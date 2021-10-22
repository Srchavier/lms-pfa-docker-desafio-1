import { PartialType } from '@nestjs/mapped-types';
import { CreateModulesProjectDto } from './create-modules-project.dto';

export class UpdateModulesProjectDto extends PartialType(CreateModulesProjectDto) {}
