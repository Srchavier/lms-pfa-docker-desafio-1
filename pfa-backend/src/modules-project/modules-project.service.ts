import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModulesProjectDto } from './dto/create-modules-project.dto';
import { ModulesProject } from './entities/modules-project.entity';

@Injectable()
export class ModulesProjectService {

  constructor(@InjectRepository(ModulesProject) private connectModuleProject: Repository<ModulesProject>) {
   
  }
  create(createModulesProjectDto: CreateModulesProjectDto) {
    return this.connectModuleProject.save(createModulesProjectDto);
  }

  findAll() {
    return this.connectModuleProject.find();
  }

  findOne(id: number) {
    return this.connectModuleProject.findOne(id)
  }

  async remove(id: number) {
    return await this.connectModuleProject.delete(id);
  }
}
