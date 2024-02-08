const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var x;",
        "let x;",
        "both var and let",
      ],
      correta: 2
    },
    {
      pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array?",
      respostas: [
        "push()",
        "pop()",
        "shift()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do código: console.log(typeof([]))?",
      respostas: [
        "'array'",
        "'object'",
        "'array' and 'object'",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para concatenar duas ou mais strings em JavaScript?",
      respostas: [
        "concat()",
        "join()",
        "append()",
      ],
      correta: 0
    },

    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        "==="
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
      respostas: [
        "toInt()",
        "parseNumber()",
        "parseInt()",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação.",
        "Um modelo de objeto para representar documentos HTML e XML.",
        "Um método para declarar funções em JavaScript.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '10' + 10 em JavaScript?",
      respostas: [
        "'1010'",
         "20",
        "'20'",
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreveria um comentário de uma linha em JavaScript?",
      respostas: [
         "// Isso é um comentário de uma linha",
         "/* Isso é um comentário de uma linha */",
         "<!-- Isso é um comentário de uma linha -->",
      ],
      correta: 0
    }
          
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
   
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição 
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
   //adicionar as respostas
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
       corretas.delete(item)
       if (estaCorreta) {
         corretas.add(item)
       }
       
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
     }
    
  
  
     quizItem.querySelector('dl').appendChild(dt)
   }
  
  
    //remover o resposta A
   quizItem.querySelector('dl dt').remove()
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
  
  
  
  }