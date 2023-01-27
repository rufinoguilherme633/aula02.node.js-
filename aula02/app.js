/********************************************************
 * OBJETIVO: Realizar amédia escolar de quatro(4) notas do aluno
 *data: 27/01/2023
 *Autor: Guilherme Rufino
 *Versão: 1.0
 * 
 *Versao:1.0 <-sempre bom fazer as versões para controlar melhores softwares

 *********************************************************/

console.log('sistema de Calculo de Médias escolares');

//impor da biblioteca de entradas de dados

var readline = require('readline');

//objetos para manipular a entradas de dados
var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});


//var:para escopo global, usar durante codigo intero, em diversos pontos da programação
//let:para codigos pequenos (escopo local), trabalha em um lugar só (nome), somente na função

//solicitação dade dados
// para obter esse teste tenho que ter retorno preciso de uma question
//função de calbeck para retornar nome do aluno
// cost tem por objetivo criar espaço em memoria em armazenar dados que não sofre mudanças

//criar no variavel

//variavel local para receber o nome do aluno, que vai ser retornado pela função


// preciso de mais entrada de dados

//fazer enrtrada dados em cascata porque preciso dos let nome
//olhe a identação da função e calbeck, faz primeiro calbeck pra pegar o nome e dentro dessa primeira coloco os outros cabeck porque se ele sair ele sai da função


entradaDados.question('Digite nome do aluno\n', function(nome) {
    let nomeAluno = nome;
    entradaDados.question('Digite a primeira nota\n', function(nota1) {
        let primeiraNota = (nota1);

        entradaDados.question('Digite a segunda nota\n', function(nota2) {
            let segundaNota = (nota2);

            entradaDados.question('Digite a terceira nota\n', function(nota3) {
                let terceiraNota = (nota3);

                entradaDados.question('Digite a quarta nota\n', function(nota4) {
                    let quartaNota = (nota4);


                    // resolvendo programa
                    console.log('-------------------------------------------------------------');
                    console.log(nome, 'suas notas foram notas: ', '\n', primeiraNota, '\n', segundaNota, '\n', terceiraNota, '\n', quartaNota);
                    console.log('-------------------------------------------------------------');
                    //0-> nulo  e inteiro
                    //0.0 -> numero real
                    //'0.0' uma strig
                    let media = 0; // criando variavel
                    /*-------------------------------- conversão para numer0------------------------------------------
                     *o javascript trata como string por isso prescisamos fazer A CONVERSÃO DE DADOS
                     *CONVERSAO DE STRING PARA NUMERO
                     *PARSEiNT() ou  Number.parseInt()
                     *PARSEfLOAT() ou Number.parseFloat()
                     *Number() -> deixa a criterio do javascript decidir se é número inteiro ou não
                     */

                    //                                     
                    /* -------------------------------------- Operadores de comparação--------------------------------
                     *  == (igualdade de um conteudo)
                     * != (diferença de conteudo)
                     * < (menor)
                     * > (maior )
                     * >= (maior ou igual)
                     * <=(menor ou igual)
                     * === (verificar a igualdade de conteudo e validar a tipagem de dados)  
                     *  Exemplos:
                     *   0 == 0   v
                     *   0 == '0' v
                     *   0 === '0' f -> é falso porque comparamos string a numero (conteudo e tipagem) 
                     *   0 ==! 0 F
                     *-------------------------------------------------------------------------------------------------
                     */

                    /* --------------------------------------Operadores Lógicos------------------------------------------- 
                     * OU         -> || (chmado de pipe) 'Ou' or 
                     * E          -> &&                       AND 
                     * Negação    -> !                         NOT
                     *------------------------------------------------------------------------------------------------------
                     */

                    //-------------------Fazendo estrutura condicional para validar se caixa é vazia----------------------
                    if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {
                        console.log(nome, 'ERRO: é nescessario digitar algum valor na entrada');

                        // OBS: se chamamos uma função verdaddeiro ou falso não é necessario colocar true isNaN(primeiraNota) == true

                        /*--------------------------- agora precisamos que todos sejam um numero -----------------------------------*/
                    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) /* inNum -> não é um numero*/ {
                        console.log(nome, 'ERRO: é necessario que todos os dados digitados sejam um numero');
                    } else if (primeiraNota > 10 && segundaNota > 10 && terceiraNota > 10 && quartaNota > 10) {
                        console.log('ERRO: digite numeros entre 0 e 10');

                    } else {
                        media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota));
                        console.log(media) / 4;

                        if (media >= 7) {
                            console.log('APROVADO! PARABENS')
                        } else {
                            console.log('reprovado')
                        }
                    }
                });
            });
        });
    });
});