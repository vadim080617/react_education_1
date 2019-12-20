import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1576838436655 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "datetime"
                }
            ]
        }), true)
    }

    async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("user");
    }
}
