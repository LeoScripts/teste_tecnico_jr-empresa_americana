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
 
