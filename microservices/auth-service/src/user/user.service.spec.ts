import { User } from '../auth/interface/auth_service'
import { v4 as uuidv4 } from 'uuid'
import { UserService } from './user.service'
import { Test, TestingModule } from '@nestjs/testing'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { DatabaseService } from '../prisma/database.service'

const userId = uuidv4()

// const user = {
//     id: '',
//     username: '',
//     picture: '',
//     email: '',
//     password: '',
//     role: '',
//     isVerified: false,
//     isTwoFactorEnabled: false,
//     method: '',
// }

const createUserDto: CreateUserDto = {
    username: '',
    picture: '',
    email: '',
    isVerified: false,
    method: 'CREDENTIALS',
    password: ''
}

const updateUserDto: UpdateUserDto = {
    email: '',
    isTwoFactorEnabled: false,
    username: ''
}

const email = ''

const users: User[] = [
    { id: userId, username: '', picture: '', email: '', password: '', role: '', isVerified: false, isTwoFactorEnabled: false, method: '' },
    { id: uuidv4(), username: '', picture: '', email: '', password: '', role: '', isVerified: false, isTwoFactorEnabled: false, method: '' },
    { id: uuidv4(), username: '', picture: '', email: '', password: '', role: '', isVerified: false, isTwoFactorEnabled: false, method: '', }
]

const user: User = users[0]

const db = {
    user: {
        findMany: jest.fn().mockResolvedValue(users),
        findUnique: jest.fn().mockResolvedValue(user),
        create: jest.fn().mockResolvedValue(user),
        update: jest.fn().mockResolvedValue(user)
    }
}

describe('User Service', () => {
    let service: UserService
    let prisma: DatabaseService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserService, {
                provide: DatabaseService,
                useValue: db,
            }]
        }).compile()
        service = module.get<UserService>(UserService)
        prisma = module.get<DatabaseService>(DatabaseService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
    })

    it('should return an array of users', async () => {
        const users = await service.findAllUsers()
        expect(users).toEqual(users)
    })


    it('should return an array of users', async () => {
        const res = await service.createUser(createUserDto)
        expect(res).toEqual(user)
    })

    it('should return an array of users', async () => {
        const res = await service.findUserByEmail(email)
        expect(res).toEqual(user)
    })

    it('should return an array of users', async () => {
        const res = await service.findUserById(userId)
        expect(res).toEqual(user)
    })

    it('should return an array of users', async () => {
        const res = await service.updateUser(userId, updateUserDto)
        expect(res).toEqual(user)
    })
})


