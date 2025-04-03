'use script'

const getDadosContatos = async () => {
    const url = `http://localhost:8080/v1/whatsapp/contatos/11966578996`
    const response = await fetch(url)
    const data = await response.json()
    
    const contatos = document.getElementById('contatos')
    const exibirContatos = document.createElement('div')
    data.contatos.forEach(item => {
        const dadosContatos = document.createElement('p')
        dadosContatos.textContent = item.nome 
        exibirContatos.appendChild(dadosContatos)
    })
    contatos.appendChild(exibirContatos)
    
}



getDadosContatos('11966578996')