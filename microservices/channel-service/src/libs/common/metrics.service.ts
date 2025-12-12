import { Injectable } from "@nestjs/common";
import { Counter, Gauge, Histogram, Registry, Pushgateway } from "prom-client";
import { IS_DEV_ENV } from "./utils/is-dev.util";

@Injectable()
export class MetricsService {
    private readonly registry = new Registry();
    public readonly grpcCallCounter: Counter<string>;
    public readonly requestDuration: Histogram<string>;
    public readonly activeRequests: Gauge<string>;
    public readonly requestsPerSecond: Gauge<string>;
    private readonly pushgateway: any;

    constructor() {
        this.grpcCallCounter = new Counter({
            name: 'grpc_calls_total',
            help: 'Total gRPC calls',
            labelNames: ['method', 'status', 'service'],
            registers: [this.registry],
        });

        this.requestDuration = new Histogram({
            name: 'grpc_call_duration_seconds',
            help: 'Duration of gRPC calls',
            labelNames: ['method', 'service'],
            buckets: [0.1, 0.5, 1, 2, 5],
            registers: [this.registry],
        });

        this.activeRequests = new Gauge({
            name: 'active_requests',
            help: 'Number of active requests',
            labelNames: ['service'],
            registers: [this.registry],
        });

        this.requestsPerSecond = new Gauge({
            name: 'grpc_requests_per_second',
            help: 'Current requests per second value',
            labelNames: ['method', 'service'],
            registers: [this.registry]
        })

        this.pushgateway = new Pushgateway(IS_DEV_ENV ? 'http://localhost:9091' : 'http://pushgateway:9091', undefined, this.registry);
    }

    public async pushMetrics() {
        return this.pushgateway.pushAdd({ jobName: process.env.SERVICE_NAME || 'auth-service' });
    }
}