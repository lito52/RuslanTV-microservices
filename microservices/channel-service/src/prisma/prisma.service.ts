import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        const adapter = new PrismaPg({
            connectionString: 'postgresql://root:123456a@localhost:5433/POSTGRES_CHANNELS?schema=public',
        });
        super({ adapter });
    }
}
