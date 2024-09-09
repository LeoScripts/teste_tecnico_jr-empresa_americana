# teste_tecnico_jr-empresa_americana
Teste tecnico Jr para empresa americana que fiz a tempos atraz faz bastante tempo.

## meu fluxo
- cria uma matriz para armazenar palavras aleatorias
- cria matriz pra armazenar palindromos
- coloca numeros gerado aleatorios dentro da matriz
- verifica quais sao palindromo
- coloca em outra matriz
- exibe com o console.log


## resolução e descrição do teste

- ingles
Write a script that creates an array with 10000 random words 
between 3 and 5 characters, 
and returns the number of words that are palindromes in that array. 
Notes: The code needs to be in javascript You’ll need to return just the number of words 
You have 30 mins, if you run out of time, submit the form anyway. 
Once you click “Start” you cannot pause the countdown Don’t delete the main function

- português
  Escreva um script que crie uma matriz com 10.000 palavras aleatórias 
  entre 3 e 5 caracteres e 
  retorne o número de palavras que são palíndromos nessa matriz. 
  Observações: O código deve estar em javascript. 
  Você precisará retornar apenas o número de palavras. 
  Você tem 30 minutos, se o tempo acabar, 
  envie o formulário mesmo assim. 
  Depois de clicar em “Iniciar”, 
  você não pode pausar a contagem regressiva Não exclua a função principal
  
  
 ## result
 
 ```
 function randomPalindromes(){

    const words = [];
    const wordsPalindromes = [];

    for (let j = 0; j < 10000 ; j++) { 
        function FuncWordRandom(){
            var letters = 'abcdefghijklmnopqrstuvwxyz';
            var randomWord = '';
            for (var i = 0; i < 3 ; i++) {
                var word = Math.floor(Math.random() * letters.length);
                randomWord += letters.substring(word, word + 1);
            }
            return randomWord;
         }
        
        words.push(FuncWordRandom())
     }  


     words.forEach((string)=>{
        if (!string) return;
        if(string === string.split('').reverse().join('')){
            if(false)return;
            wordsPalindromes.push(string)
        }   
     })
     

        

     return console.log(wordsPalindromes.length)
} 

randomPalindromes()
 
 ```
 
## resultado explicativo em portugues
```
function palindromoAleatorio(){

    // variaveis que vao receber os dados gerados 
    const palavras = [];
    const palavrasPalindromo = [];

    // loop de 10.000 repetições
    for (let j = 0; j < 10000 ; j++) { 

        function textoAleatorio(){

            //letras que seram usadas  pra formação das palavras
            var letras = 'abcdefghijklmnopqrstuvwxyz';

            //onde sera armazenado a palavra apos a formação
            var aleatorio = '';

            //aqui fazemos o for e delimitamos o tamnho da palavra entre em 3 mas e so mudar a
            // quiantidade de por um numero desejado 
            for (var i = 0; i < 3 ; i++) {

                            // Math.floor => arredonda as coisas pra um valor inteiro
                                    //Math.random => passa pelos indices de maneira aleatoria
                                                    //mutiplicamos pelos indice no caso da variavel letras
                var rnum = Math.floor(Math.random() * letras.length);

                //aqiu juntamos o resultado letra por letra ate formar a palavra 
                // que neste caso tera 3 letras
                                    //substring retorna a parte de uma determinada sequencia
                //aqui que acontece a formação das palavras
                //pois pegamos a variavel aleatorio q de inicio esta vazia e valomos adicionao
                // letras uma do lado da outra concatenando pra formar as palavras
                aleatorio += letras.substring(rnum, rnum + 1);
                
         
            }
         
            // retorna a execução de gerando uma palavra
            // mas como esta dentro de um loop for sera executada varias vezes
            // diacordo com a quantidade requerida que neste caso e 10.000
            return aleatorio;
         }
        
        //exutando a funçãp texto aletorio e armazenado o retorno na variavel palavras
        palavras.push(textoAleatorio())

     }  

     // aqui montei um interaçao, loop que varre todo o array verificando as palavras
     palavras.forEach((string)=>{

        //se nao for uma string da o retorno vazio
        if (!string) return;

        // se for um string e for igual a palavra de tras pra frente
                            //split desmonta a palvra sepando as letras
                                        //reverse  inverte as ordens das letras
                                                // join junta tudo    
        // essa verificação traz um falor boleano true ou false
        if(string === string.split('').reverse().join('')){

            // caso oretorno seja falso traz u retorno vazio
            if(false)return;

            // caso o retorno nao seja falso ela executa o codigo abaixo
            // e coloca os dados vaildados dentro da variavel palavras palindromo
            palavrasPalindromo.push(string)
        } 
        
        	
            
     })
     

        
     //atenção qui sao imprimido os retornos ou sua quantidade quado usamos o length 
     return console.log(palavrasPalindromo.length)
} 

// aqui executamos nossa função
palindromoAleatorio()
 
```
