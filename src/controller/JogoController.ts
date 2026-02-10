import { Jogo } from "../model/Jogo";
import { JogoRepository } from "../repository/JogoRepository";
import { colors } from "../util/Colors";


export class JogoController implements JogoRepository{

    private listaJogos = new Array<Jogo>();
    numero: number = 0;


    procurarPorId(id: number): void {
        let buscaJogos = this.buscarPorId(id);
        if(buscaJogos != null){
            buscaJogos.visualizar();
        }
        else{
            console.log(colors.fg.red,`Produto com o id ${id}, não encontrado!!`,colors.reset)
        }
    }

    listarTodos(): void {
        for (let jogo of this.listaJogos){
            jogo.visualizar();
        }
    }

    cadastrar(jogo: Jogo): void {
        this.listaJogos.push(jogo);
        console.log(`\nO Jogo ${jogo.nome} com id ${jogo.id} foi Criado com Sucesso!`)
    }


    atualizar(jogo: Jogo): void {
        let buscaJogo = this.buscarPorId(jogo.id);

        if(buscaJogo != null){
            this.listaJogos[this.listaJogos.indexOf(buscaJogo)] = jogo;
            console.log(`O Jogo com id ${jogo.id} foi atualizado com Sucesso!!`)
        }
        else{
            console.log(colors.fg.red,`O Jogo com id ${jogo.id} Não foi encontrado!!`,colors.reset)
        
        }


    }

    deletar(id: number): void {
       let buscaJogo = this.buscarPorId(id);
       if(buscaJogo !== null){
        this.listaJogos.splice(this.listaJogos.indexOf(buscaJogo),1);
        console.log("foi Apagado Com sucesso!!")
       }
       else{
            console.log(colors.fg.red,"Produto com id",id, " nao encontrado!",colors.reset);
       }


    }


    procurarPorNome(nome: string): void {
       const buscarPorJogo = this.listaJogos.filter(Jogo => Jogo.nome.toUpperCase().includes(nome.toUpperCase()));

       // listagem dos dados
       if(buscarPorJogo.length > 0){
        buscarPorJogo.forEach( jogo => jogo.visualizar());
       }
       else{
        console.log(colors.fg.red,"nenhum Jogo Foi encontrado! ",colors.reset)
       }
    }

    //metodo auxiliar para gerar O ID dos jogos

    public gerarNumero(): number {
        return ++ this.numero;
    }


    public buscarPorId(id: number): Jogo | null{
        for (let jogo of this.listaJogos){
            if (jogo.id === id)
                return jogo;
        }

        return null;
    } 


}