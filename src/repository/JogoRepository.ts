import { Jogo } from "../model/Jogo";

export interface JogoRepository{

    //Crud dos Jogos
    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(jogo: Jogo): void;
    atualizar(jogo: Jogo): void;
    deletar(id: number): void;
    
    
    // extra
    procurarPorNome(nome: string):void;

}