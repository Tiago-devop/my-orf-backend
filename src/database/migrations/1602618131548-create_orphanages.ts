import {MigrationInterface, QueryRunner} from "typeorm";

export class createOrphanages1602618131548 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // REALIZA ALTERAÇÕES
        // CRIAR TABELA, CRIAR UM NOVO CAMPO, DELETAR ALGUM CAMPO
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // DESFAZER O QUE FOI FEITO DO UP
    }

}
