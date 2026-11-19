const corpoTabela = document.getElementById('corpoTabela')

const alunos = [
    {
      "nome": "iFood",
      "pais": "Brasil"
    },
]

function exibir_aluno(){
    corpoTabela.innerHTML = ''
    for(let aluno of alunos){
        const linha = document.createElement('tr')
        const dadoNome = document.createElement('td')
        linha.appendChild(dadoNome)
        dadoNome.innerHTML = aluno.nome
        const dadoPais = document.createElement('td')
        linha.appendChild(dadoPais)
        dadoPais.innerHTML = aluno.pais
        corpoTabela.appendChild(linha)
    }
    
}

f = document.getElementById('formulario')
f.addEventListener('submit', function(e){
    e.preventDefault()

    campoNome = document.getElementById('campoUm').value
    campoPais = document.getElementById('campoDois').value

    if (campoNome != '' & campoPais != ''){
        alunos.push({
            nome : campoNome,
            pais : campoPais
        })}
    else{
        alert("Preencha ambos os campos!")
    }
    
    exibir_aluno()
})

exibir_aluno()