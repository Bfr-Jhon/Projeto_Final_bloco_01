import { Jogo } from "./Jogo";


export class JogoFisico extends Jogo{
    private _genero: string;




    constructor(id: number, nome: string, estoque: number ,tipo: number, preco: number, genero: string) {
        super(id, nome, estoque, tipo, preco)
        this._genero = genero;
    
    }



    public get genero(): string {
        return this._genero;
    }


    public set genero(genero: string) {
        this._genero = genero;
    }


    public visualizar(): void {
        super.visualizar();
        console.log("Genero: ", this._genero);
    }


}