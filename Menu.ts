import { colors } from "./src/util/Colors";
import { keyInYNStrict, question } from "readline-sync";
import { JogoController } from "./src/controller/JogoController";
import { Jogo } from "./src/model/Jogo";
import { JogoDigital } from "./src/model/JogoDigital";
import { JogoFisico } from "./src/model/JogoFisico";
import { Input } from "./src/util/Input";

 const tiposJogos = ['Jogos Digitais', 'Jogos Fisicos']
     // Instancia da Classe JogoController
    const jogos = new JogoController();

export function main() {

    // // Instancia da Classe JogoController
    // const jogos = new JogoController();


    //Variaveis Auxiliares
    let opcao: number;
    let id: number;
    let estoque: number;
    let tipo: number;
    let preco: number;
    let nome: string;
    let plataforma: string;
    let genero: string;
    // const tiposJogos = ['Jogos Digitais', 'Jogos Fisicos']

    // testes tipo 1 - jogos Digitais
    jogos.cadastrar(new JogoDigital(jogos.gerarNumero(), "Counter Strike -2 ", 100, 1, 99.90, "Steam"));
    jogos.cadastrar(new JogoDigital(jogos.gerarNumero(), "God of War Ragnarok", 15, 1, 299.90, "PS5"));
    jogos.cadastrar(new JogoDigital(jogos.gerarNumero(), "Dave The Diver", 200, 1, 60.75, "Steam"));
    jogos.cadastrar(new JogoDigital(jogos.gerarNumero(), "Overcooked", 999, 1, 0.00, "PS5"));
    
    //teste tipo 2 - jogos Fisicos
    jogos.cadastrar(new JogoFisico(jogos.gerarNumero(), "War", 8, 2, 99.90, "Guerra"));
    jogos.cadastrar(new JogoFisico(jogos.gerarNumero(), "Uno", 80, 2, 40.00, "Cartas/estrategia"));
    jogos.cadastrar(new JogoFisico(jogos.gerarNumero(), "Amigos de M...", 80, 2, 37.70, "cartas/Comedia"));
    jogos.cadastrar(new JogoFisico(jogos.gerarNumero(), "Monopoly", 100, 2, 130.00, "Gerenciamento"));



    while (true) {

        console.log(colors.bg.black, colors.fg.greenstrong,"*****************************************************");
        console.log("                                                     ");
        console.log(colors.bg.black, colors.fg.magentastrong,"               PlayHouse                                               ", colors.reset);
        console.log(colors.bg.black, colors.fg.greenstrong,"                                                     ");
        console.log("***************************************************************************");
        console.log("                                                                           ");
        console.log("            1 - Criar Produto                                              ");
        console.log("            2 - Listar todas os Produtos                                   ");
        console.log("            3 - Buscar Produto por Id                                       ");
        console.log("            4 - Atualizar Dados do Produto                                  ");
        console.log("            5 - Apagar Produto                                              ");
        console.log("            6 - Buscar por Nome  do produto                                 ");
        console.log("            0 - sair                                                        ");
        console.log("                                                                            ");
        console.log("****************************************************************************");
        console.log("                                                              ", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = Input.questionInt("");

        if (opcao == 0) {
            console.log("\nSteam Melhorada - Nao vendemos so jogos, vendemos Diversão!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {

            case 1:
                console.log("\n\nCriar Conta\n\n");                
                keyPress();
                criarConta();
                break;
    

                case 2:
                console.log("\n\nListar todas os Jogos\n\n");
                    jogos.listarTodos();

                    keyPress();
                break;

            
                case 3:
                console.log("\n\nBuscar Por Id\n\n");
                
                        buscarPorId();
                        keyPress();
                break;
          

                case 4:
                console.log("\n\nAtualizar dados dos Jogos\n\n");

                    atualizarJogo();
                    keyPress();
                break;
          

            
                case 5:
                console.log("\n\nApagar Jogo\n\n");
                        deletarJogoPorId();
                    keyPress();
                break;
            
                 case 6 :
                console.log("\n\nProcurar por Nome\n\n");
                    procurarPorNome();
                
                keyPress();
                 break;
            

              default:

                console.log("\nOpção Inválida!\n");
                        keyPress();
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log( colors.fg.magentastrong,"         PlayHouse                                ", colors.reset);
    console.log("Projeto Desenvolvido por:" ,colors.fg.magentastrong,"Jhonatha Vinicius", colors.reset);
    console.log("Jhonatha - jhonathavinicius21@gmail.com");
    console.log("github.com/bfr-jhon");
    console.log("*****************************************************");
}


// Funcao KeyPress
function keyPress(): void{
    console.log("Pressione Enter para Continuar...");
    Input.prompt();
}



//funcao  para Criar a Conta

function criarConta(): void{
    console.log("Digite o Nome do jogo: ")
                const nome = Input.question("");

                console.log("Digite o Tipo de Jogo: ");
                const tipo = Input.keyInSelect(tiposJogos, "", {cancel: false})+ 1;

                console.log("Informe A quantidade Disponivel em Estoque: ");
                const estoque = Input.questionInt("");

                console.log("Informe O Preço do Jogo: ");
                const preco = Input.questionFloat("");
                switch (tipo){
                    case 1:
                        console.log("Qual a Plataforma do game: ")
                        const plataforma = Input.question("");
                        jogos.cadastrar(new JogoDigital(jogos.gerarNumero(), nome, estoque, tipo, preco, plataforma));
                        break;

                        case 2:
                            console.log("Informe Qual Genero do Jogo: ");
                            const genero = Input.question("");
                            jogos.cadastrar(new JogoFisico(jogos.gerarNumero(), nome, estoque, tipo, preco, genero))
                        break;
                }
}





//funcao Buscar por Id
function buscarPorId(): void{
console.log("Digite o Id do jogo que deseja Buscar:");    
    const id  = Input.questionInt("");
    jogos.procurarPorId(id);

}

// funcao Buscar Por nome
    function procurarPorNome(): void{
        console.log("Digite o nome do Jogo: ")
        const jogo = Input.question("");

        jogos.procurarPorNome(jogo);
    }



// Funcao ATUALIZAR DADOS 
function atualizarJogo(): void{
    console.log("Digite o Id do jogo");
    const id = Input.questionInt("");

    const jogo = jogos.buscarPorId(id);
    if(jogo !== null){
        let nome: string = jogo.nome;
        const tipo: number = jogo.tipo;
        let estoque: number = jogo.estoque;
        let preco: number = jogo.preco

        

        // atualizacao do Nome do Jogo
            console.log("Nome atual do jogo", nome);
            console.log("Digite o Novo nome do produto \n pressione enter para manter o valor atual");
            let entrada: string = Input.question("");

            nome = entrada.trim() === "" ? nome : entrada;


            // atualizacao do  estoque
                console.log("estoque atual", estoque);
                console.log("Digite a nova quantidade no estoque \n (Pressione enter para manter o valor atual)");
            entrada = Input.question("");

            estoque = entrada.trim() === "" ? estoque : parseInt(entrada);

            // atualizacao do preco
            console.log("Preco atual", preco);
            console.log("Digite o novo valor do produto \n (Pressione enter para manter o valor atual)");
         entrada = Input.question("");

         preco = entrada.trim() === "" ? preco : parseFloat(entrada.replace(",","."));


         // atualizacao do Tipo
         switch(tipo){
                case 1: // Jogos Digitais
                    let plataforma : string = (jogo as JogoDigital).plataforma
        
                    //atualizacao plataforma
                    console.log("Plataforma Atual ",plataforma);
                    console.log("Digite a Nova Plataforma \n (Pressione enter para manter o valor atual)");
         
                    entrada = Input.question("");
                    plataforma = entrada.trim() === "" ? plataforma : entrada;
                    jogos.atualizar(new JogoDigital(id, nome, estoque, tipo, preco, plataforma));
                    break;

                case 2: // Jogos Fisico
                    let genero: string = (jogo as JogoFisico).genero
        
                    //atualizacao genero
                    console.log("Plataforma Atual ",genero);
                    console.log("Digite o novo Genero \n (Pressione enter para manter o valor atual)");
         
                    entrada = Input.question("");
                    genero = entrada.trim() === "" ? genero : entrada;
                    jogos.atualizar(new JogoFisico(id, nome, estoque, tipo, preco, genero));
                    break;

        }

    }
}

    // Deletar Jogo

    function deletarJogoPorId(): void{
        console.log("digite o Id do jogo: ")
    const id = Input.questionInt("");
    const confirmar = keyInYNStrict("Tem certeza que deseja Deletar a conta?");
    if(confirmar === true){
        jogos.deletar(id);
    }
    else{
        console.log(colors.fg.redstrong,"Operação Cancelada !!", colors.reset);
    }
    }

    
    



main();



