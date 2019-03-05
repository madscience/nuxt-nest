import express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './App/AppModule';
import { Nuxt } from '@nuxt/core';
import { Builder } from '@nuxt/builder';
import nuxtConfig from '../nuxt.config';

async function bootstrap() {
  const expressServer = express();
  const nuxt = await new Nuxt(nuxtConfig);

  if (nuxtConfig.dev) {
    await new Builder(nuxt).build();
  }

  // attach Nuxt to expressServer
  expressServer.use(nuxt.render);

  // attach NestJs to expressServer
  const app = await NestFactory.create(AppModule, expressServer);
  await app.listen(3000);
}

bootstrap();
