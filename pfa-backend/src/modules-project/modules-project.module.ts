import { Module } from '@nestjs/common';
import { ModulesProjectService } from './modules-project.service';
import { ModulesProjectController } from './modules-project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModulesProject } from './entities/modules-project.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ModulesProject])],
  controllers: [ModulesProjectController],
  providers: [ModulesProjectService]
})
export class ModulesProjectModule {}
