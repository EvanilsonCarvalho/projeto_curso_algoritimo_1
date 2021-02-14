var nome, nota1, nota2, passou;
passou = false;

nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Digite a nota 1 do aluno:")
nota02 = prompt("Digite a nota 2 do aluno:")

media = (parseInt(nota01) + parseInt(nota02)) /2

if(media >= 5)
passou = true;
if(passou && (media >= 5 || media <= 7))
 alert("Aprovado" + nome)
 else
 alert("Reprovado" + nome)