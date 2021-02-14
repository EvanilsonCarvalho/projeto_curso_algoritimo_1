function acaoBotao(params){
    var varlor01, valor02, resultado, operacao


	valor01 = prompt("Digite o primeiro valor: ")
        operacao = prompt ("escolha a operacao: Ex: +, -, *, / ")
    valor02 = prompt("Digite o segundo valor: ")

          if (operacao == "+"){ 
              resultado = parseInt(valor01) + parseInt(valor02)
          }else if(operacao == "-"){
          	 resultado = parseInt(valor01) - parseInt(valor02)
          }else if(operacao == "*"){
          	 resultado = parseInt(valor01) * parseInt(valor02)
          }else if(operacao == "/"){
          	 resultado = parseInt(valor01) / parseInt(valor02)
          }	 	 
           
                
            document.getElementById("paragrafo").innerText = resultado
}