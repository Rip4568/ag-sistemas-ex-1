import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //? Configuração do CORS, estava dando erro no react ate perceber o pq.
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  
  //? habilitar a validação de dados, acho que não precisa de muita explicação. sem isso nenhum validator funciona (acredito eu)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    exceptionFactory: (errors) => {
      const result = errors.map((error) => ({
        property: error.property,
        message: error.constraints ? Object.values(error.constraints)[0] : 'Invalid value',
      }));
      return {
        statusCode: 400,
        message: 'Validation failed',
        errors: result,
      };
    },
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
