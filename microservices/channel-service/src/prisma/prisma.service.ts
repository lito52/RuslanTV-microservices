import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../prisma/generated';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        const adapter = new PrismaPg({
            connectionString: 'postgresql://root:123456a@localhost:5433/POSTGRES_CHANNELS?schema=public',
        });
        super({ adapter });
    }
}
