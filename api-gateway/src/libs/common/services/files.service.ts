import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class FilesService {
    private readonly s3Client: S3Client
    private readonly bucketName: string

    constructor(
        private readonly configService: ConfigService
    ) {
        this.s3Client = new S3Client({
            region: this.configService.getOrThrow<string>('S3_REGION'),
            endpoint: this.configService.getOrThrow<string>('S3_ENDPOINT'),
            credentials: {
                accessKeyId: this.configService.getOrThrow<string>('S3_ACCESS_KEY_ID'),
                secretAccessKey: this.configService.getOrThrow<string>('S3_SECRET_ACCESS_KEY')
            }
        })
        this.bucketName = this.configService.getOrThrow<string>('S3_BUCKET')
    }

    async upload(key: string, buffer: Buffer) {
        try {
            await this.s3Client.send(
                new PutObjectCommand({
                    Bucket: this.bucketName,
                    Key: key,
                    Body: buffer
                }))
        } catch (error) {
            console.log("error:", error)
        }
    }

    async delete(key: string) {
        try {
            await this.s3Client.send(
                new DeleteObjectCommand({
                    Bucket: this.bucketName,
                    Key: key
                })
            )
        } catch (error) {
            console.log("error:", error)
        }
    }
}