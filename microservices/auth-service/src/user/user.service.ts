import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { RpcException } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'prisma/generated';
import { DatabaseService } from 'src/prisma/database.service';

@Injectable()
export class UserService {
	public constructor(private readonly prismaService: DatabaseService) { }

	public async createUser(dto: CreateUserDto) {
		const user = await this.prismaService.user.create({
			data: {
				username: dto.username,
				picture: dto.picture,
				email: dto.email,
				password: dto.password ? await hash(dto.password) : '',
				method: dto.method,
				isVerified: dto.isVerified
			},
			include: {
				accounts: true
			}
		})
		return user
	}

	public async findAllUsers() {
		return await this.prismaService.user.findMany({
			orderBy: {
				createdAt: 'desc'
			}
		})
	}

	public async findUserById(id: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id
			},
			include: {
				accounts: true
			}
		})

		if (!user) {
			throw new RpcException({ message: `User with id ${id} not exists` })
		}

		return user
	}

	public async findUserByEmail(email: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				email
			},
			include: {
				accounts: true
			}
		})

		return user
	}

	// async deleteUser(id: string): Promise<Boolean> {
	//     const user = await this.findUserById(id)

	//     await this.prismaService.user.delete({
	//         where: {
	//             id
	//         }
	//     })
	//     return true
	// }

	public async updateUser(userId: string, dto: UpdateUserDto): Promise<User> {
		const user = await this.findUserById(userId)

		const updatedUser = await this.prismaService.user.update({
			where: {
				id: userId
			},
			data: {
				email: dto.email,
				username: dto.username,
				isTwoFactorEnabled: dto.isTwoFactorEnabled
			}
		})

		return updatedUser
	}
}
