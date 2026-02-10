import { Jogo } from "./Jogo";


export class JogoDigital extends Jogo{
    private _plataforma: string;




	constructor(id: number, nome: string, estoque: number ,tipo: number, preco: number, plataforma: string) {
        super(id, nome, estoque, tipo, preco)
        this._plataforma = plataforma;
	
    }



	public get plataforma(): string {
		return this._plataforma;
	}


	public set plataforma(value: string) {
		this._plataforma = value;
	}


    public visualizar(): void {
        super.visualizar();
        console.log("Plataforma: ", this._plataforma);
    }


}