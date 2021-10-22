import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModulesProjectService } from './modules-project.service';
import { CreateModulesProjectDto } from './dto/create-modules-project.dto';
import { UpdateModulesProjectDto } from './dto/update-modules-project.dto';

@Controller('modules-project')
export class ModulesProjectController {
  constructor(private readonly modulesProjectService: ModulesProjectService) {}

  @Post()
  create(@Body() createModulesProjectDto: CreateModulesProjectDto) {
    return this.modulesProjectService.create(createModulesProjectDto);
  }

  @Get()
  findAll() {
    return this.modulesProjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modulesProjectService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modulesProjectService.remove(+id);
  }
}
