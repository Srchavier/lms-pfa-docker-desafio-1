import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'module_project',
})
export class ModulesProject {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

}
