import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MetricsService } from './metrics.service';

@Injectable()
export class GrpcMetricsInterceptor implements NestInterceptor {
    constructor(private readonly metricsService: MetricsService) { }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const serviceName = context.getClass().name;
        const methodName = context.getHandler().name;

        const labels = { service: serviceName, method: methodName }
        const successLabels = { ...labels, status: 'success' }
        const errorLabels = { ...labels, status: 'error' }

        this.metricsService.activeRequests.inc({ service: serviceName });

        const timer = this.metricsService.requestDuration.startTimer({
            service: serviceName,
            method: methodName
        });

        return next.handle().pipe(
            tap({
                next: () => {
                    this.metricsService.grpcCallCounter.inc(successLabels);
                },
                error: () => {
                    this.metricsService.grpcCallCounter.inc(errorLabels);
                },
                finalize: () => {
                    timer();
                    this.metricsService.activeRequests.dec({ service: serviceName });
                    this.metricsService.pushMetrics().catch(console.error);
                }
            })
        );
    }
}