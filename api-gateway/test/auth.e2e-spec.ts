import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { RegisterDto } from 'src/interfaces/auth_service';

const dto: RegisterDto = {
  email: 'lito@mail.ru',
  password: '12345678',
  passwordRepeat: '12345678',
  username: 'l1to'
}

describe('AuthController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new ValidationPipe())
    await app.init();

  });

  afterAll(async () => {
    await app.close()
  })

  it('POST /auth/register - should return a user', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/register')
      .send(dto)
      .expect(200);

    expect(response.body).toHaveProperty('message')
  });

  // it('GET /auth/findUserById/:id - should return 401 if user not found', async () => {
  //   await request(app.getHttpServer())
  //     .get('/auth/findUserById/not-existing-id')
  //     .expect(401)
  // })

  it('GET /auth/oauth/connect/:provider - should return url', async () => {
    const response = await request(app.getHttpServer())
      .get('/auth/oauth/connect/google')
      .expect(200);

    expect(response.body).toHaveProperty('url')
  });
});
