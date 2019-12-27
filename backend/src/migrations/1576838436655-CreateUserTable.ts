import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateUserTable1576838436655 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: 'CURRENT_TIMESTAMP'
                }
            ]
        }), true);

        await queryRunner.createIndex("user", new TableIndex({
            name: "IDX_USER_NAME",
            isUnique: true,
            columnNames: ["name"]
        }));
    }

    async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropIndex("user", "IDX_USER_NAME");
        await queryRunner.dropTable("user");
    }
}
