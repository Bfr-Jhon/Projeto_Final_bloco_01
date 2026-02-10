export abstract class Jogo {
  private _id: number;
  private _nome: string;
  private _estoque: number;
  private _tipo: number;
  private _preco: number;

  constructor(id: number, nome: string, estoque: number ,tipo: number, preco: number) {
    this._id = id;
    this._nome = nome;
    this._estoque = estoque;
    this._tipo = tipo;
    this._preco = preco;

  }



	public get id(): number {
		return this._id;
	}

   
	public get nome(): string {
		return this._nome;
	}

 
	public get estoque(): number {
		return this._estoque;
	}

  
	public get tipo(): number {
		return this._tipo;
	}

 
	public get preco(): number {
		return this._preco;
	}

    
	public set id(value: number) {
		this._id = value;
	}

  
	public set nome(value: string) {
		this._nome = value;
	}

    
	public set estoque(value: number) {
		this._estoque = value;
	}

 
	public set tipo(value: number) {
		this._tipo = value;
	}

   
	public set preco(value: number) {
		this._preco = value;
	}



   public visualizar(): void {

          let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Jogo Digital";
                break;
            case 2:
                tipo = "jogo Fisico";
                break;
        }

        console.log("\n\n*********************************************************");
        console.log("                       Dados dos Jogos                   ");
        console.log("*********************************************************");
        console.log("id do jogo: " + this._id);
        console.log("Nome do Jogo - " + this._nome);
        console.log("Quantidade em estoque: " + this._estoque);
        console.log("Tipo -  " + tipo);
        console.log("Preco do Jogo: " + this._preco.toFixed(2));
    }



}
