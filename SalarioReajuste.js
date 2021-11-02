  //- Escreva um algoritmo para ler o salário mensal atual de um funcionário e o
        //percentual de reajuste. Calcular e escrever o valor do novo salário.

        let salario = Number(prompt("Informe seu salario atual "))
        let reajuste = Number(prompt("Informe o valor do reajuste "))
        let salarioAtual = salario + reajuste
        
        alert("O Salario do funcionario é R$" + salario + " o reajuste foi de R$" + reajuste + " o salario foi atualizado para R$" + salarioAtual)
       