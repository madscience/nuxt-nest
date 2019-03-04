import { Test, TestingModule } from '@nestjs/testing';
import { DefaultController } from './DefaultController';
import { AppService } from '../Service/AppService';

describe('DefaultController', () => {
  let defaultController: DefaultController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DefaultController],
      providers: [AppService],
    }).compile();

    defaultController = app.get<DefaultController>(DefaultController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(defaultController.getHello()).toBe('Hello World!');
    });
  });
});
