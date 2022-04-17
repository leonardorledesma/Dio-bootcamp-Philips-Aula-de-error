/*
Objeto Error
    é um objeto do javascript, que podemos manipulas as propriedades e executar varios metodos.
    Aceita paramentros (message "mensagem", filename "nome do arquivo", linenumber "numero da linha")
    nem todos os browser aceitam os 3 parametros sendo mais comum somente o uso da mensagem.

    para criar o erro criamos uma cosntante e damos o nome ao erro, criamos uma nova instancia com o new
    e enviamos os parametros, e se em seguida damos um 'Throw' no erro, o erro é lancado como ja visto
    anteriormente.
    também é possivem depoi de criar o erro dar um nome para ele usando .name(ponto name)
    */

    /*
    atividade
    O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado
     como parâmetro na função. Caso contrário, um erro será lançado.

    Crie uma função que recebe um array e um número
    Realize as seguintes validações
    Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
    Se o array não for do tipo 'object', lance um erro do tipo TypeError
    Se o número não for do tipo 'number', lance um erro do tipo TypeError
    Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
    Utilize a declaração try...catch
    Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof*/

   function validaArray(arr, num){
       try{
            if(!arr && !num) throw new ReferenceError("Envie os parametros");
            
               if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object");
            
               if(typeof num !== 'number') throw new TypeError("O num precisa ser do tipo number");
            
               if(arr.length !== num) throw new RangeError("Tamanho invalido");
            
               return arr;
       }
       catch(e){
            if(e instanceof ReferenceError){
            console.log("Este é um ReferenceError")
            console.log(e.message)
            }else if (e instanceof TypeError){
            console.log("Este é um TypeError")
            console.log(e.message)
            }else if(e instanceof RangeError){
            console.log("Este é um RangeError")
            console.log(e.message)
            }else{
            console.log("Tipo de erro não esperado: " + e)}
       }
   }

   console.log(validaArray([1, 2, 3, 4, 5], 5));












