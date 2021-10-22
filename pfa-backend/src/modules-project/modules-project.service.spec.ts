import { Test, TestingModule } from '@nestjs/testing';
import { ModulesProjectService } from './modules-project.service';

describe('ModulesProjectService', () => {
  let service: ModulesProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModulesProjectService],
    }).compile();

    service = module.get<ModulesProjectService>(ModulesProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
