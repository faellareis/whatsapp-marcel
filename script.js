'use strict'

const nameContact = document.getElementById('search_contact')
const contacts = document.getElementById('contacts')
const inicial_screen = document.getElementById('inicial_screen')

const showContacts = async () => {
    try {
        const url = 'http://localhost:8080/v1/whatsapp/contatos/11966578996'
        const response = await fetch(url)
        if (response.status === 200) {
            const data = await response.json()
            const object = data.contatos

            object.forEach((item) => {
                const createContacts = document.createElement('div')
                const listContacts = document.createElement('h2')
                const imageProfile = document.createElement('img')

                imageProfile.src = '../img/teste.png'
                imageProfile.alt = 'profile image'
                imageProfile.classList.add('profile_image')

                createContacts.setAttribute('data-number', item.numero) // AQUI: Usar número
                listContacts.textContent = item.nome

                createContacts.appendChild(imageProfile)
                createContacts.appendChild(listContacts)
                contacts.appendChild(createContacts)
            })
        } else {
            alert('Erro ao buscar dados dos contatos!')
        }
    } catch (error) {
        console.log(error)
        alert('Erro interno no servidor!')
    }
}
showContacts()

const DadosContatos = async (name) => {
    const url = `http://localhost:8080/v1/whatsapp/contatos/?numero=11987876567&contato=${name}`
    const response = await fetch(url)

    if (response.status === 200) {
        const data = await response.json()
        contacts.replaceChildren('') // Limpa a lista antes de mostrar

        data.contato.forEach((item) => {
            const createContacts = document.createElement('div')
            const listContacts = document.createElement('h2')
            const imageProfile = document.createElement('img')

            imageProfile.src = '../img/teste.png'
            imageProfile.alt = 'profile image'
            imageProfile.classList.add('profile_image')

            createContacts.setAttribute('data-number', item.numero_contato) // Usar número aqui também
            listContacts.textContent = item.nome_contato

            createContacts.appendChild(imageProfile)
            createContacts.appendChild(listContacts)
            contacts.appendChild(createContacts)
        })
    } else {
        console.log('Usuário não encontrado')
    }
}

nameContact.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchContacts(nameContact.value)
    }
})

// Função para mostrar conversas
const showChatsContacts = async (number) => {
    const url = `http://localhost:8080/v1/whatsapp/contatos/${number}`
    const response = await fetch(url)
    const data = await response.json()

    if (response.status === 200 && data.contatos.length > 0) {
        inicial_screen.replaceChildren('') // Limpa a tela de chat
        const contato = data.contatos[0] // Pega o primeiro contato

        contato.mensagens.forEach((message) => {
            const messageElement = document.createElement('div')
            messageElement.textContent = `${message.texto}`
            inicial_screen.appendChild(messageElement)
        })
    } else {
        alert('Não foi possível acessar as conversas com este usuário!')
    }
}

// Evento de clique no contato
contacts.addEventListener('click', (event) => {
    const contactDiv = event.target.closest('div[data-number]')
    if (contactDiv) {
        const contactNumber = contactDiv.getAttribute('data-number')
        showChatsContacts(contactNumber)
    }
})