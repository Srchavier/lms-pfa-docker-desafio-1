import { Test, TestingModule } from '@nestjs/testing';
import { ModulesProjectController } from './modules-project.controller';
import { ModulesProjectService } from './modules-project.service';

describe('ModulesProjectController', () => {
  let controller: ModulesProjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModulesProjectController],
      providers: [ModulesProjectService],
    }).compile();

    controller = module.get<ModulesProjectController>(ModulesProjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
