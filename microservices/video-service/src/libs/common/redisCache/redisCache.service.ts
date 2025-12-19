import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisCacheService {
    constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) { }

    async get<T>(key: string): Promise<T | null> {
        const data = await this.cacheManager.get<T>(`${key}`);
        if (data) {
            return JSON.parse(data as string);
        }
        return null;
    }

    async set<T>(key: string, value: T, ttl: number = 60 * 5): Promise<string> {
        await this.cacheManager.set(key, value, 1000 * 60 * 5);
        return `key ${key} added`
    }

    async del(key: string): Promise<string> {
        await this.cacheManager.del(key);
        return `key ${key} deleted`
    }

    async addListFirstVideos(value: string): Promise<string> {
        const key = 'listFirstVideos'
        await this.cacheManager.set(key, value, 1000 * 60)
        return 'list success added'
    }

    async addListFirstChannelVideos(value: string): Promise<string> {
        const key = 'listFirstChannelVideos'
        await this.cacheManager.set(key, value, 1000 * 60)
        return 'list for channel videos success added'
    }
}