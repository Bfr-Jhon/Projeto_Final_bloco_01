
import { Jogo } from "./src/model/Jogo";
import { JogoDigital } from "./src/model/JogoDigital";
import { JogoFisico } from "./src/model/JogoFisico";
import { Input } from "./src/util/Input";


export function main() {

    let opcao: number;

    

    const jogodigital: JogoDigital = new JogoDigital(2, "Counter-Strike 2", 1000, 1, 92.00, "Steam");
    jogodigital.visualizar();


    const jogofisico: JogoFisico = new JogoFisico(3, "War", 300, 2, 75.90, "Batalha Naval");
    jogofisico.visualizar();


    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("               Steam Melhorada                           ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                         ");
        console.log("            2 - Listar todas os Produtos               ");
        console.log("            3 - Buscar Produto por Id                  ");
        console.log("            4 - Atualizar Dados do Produto             ");
        console.log("            5 - Apagar Produto                        ");
       // console.log("          6 - Buscar por Nome  do produto             ");
        console.log("            0 - sair                                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

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

                break;
            
                case 2:
                console.log("\n\nListar todas os Produtos\n\n");
                    keyPress();
                break;
            
                case 3:
                console.log("\n\nBuscar Por Id\n\n");
                        keyPress();
                break;
          
                case 4:
                console.log("\n\nAtualizar dados dos produtos\n\n");
                        keyPress();
                break;
          
                case 5:
                console.log("\n\nApagar Produto\n\n");
                    keyPress();
                break;
            
                // case 6 :
                // console.log("\n\nProcurar por Nome\n\n");
                //     keyPress();
                // break;
            

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
    console.log("\n          Steam melhorada                               ");
    console.log("Projeto Desenvolvido por: Jhonatha Vinicius");
    console.log("Jhonatha - generation@generation.org");
    console.log("github.com/bfr-jhon");
    console.log("*****************************************************");
}


// Funcao KeyPress
function keyPress(): void{
    console.log("Pressione Enter para Continuar...");
    Input.prompt();
}

main();