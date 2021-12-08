const configs = {
    method: 'GET'
}

const results = document.getElementById('results')

const searchCep = (event) => {

    startPreloader()

    results.style.display = 'none'

    const cep = document.getElementById('cep').value || '000000000'

    // alert('Buscando o cep')
    fetch(`https://viacep.com.br/ws/${cep}/json/`,configs)
    .then(response =>{
        // console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data)

        if(data.status === 0) throw data.message

        showResults(data)
    })
    .catch(error => {
        console.log(error)

        swal('Erro', 'Cep não encontrado!', 'error')
    })
    .finally(()=> endPreloader())
    event = event || window.event
    if( event.preventDefault) event.preventDefault()
    if( event.preventValue) event.preventValue()
    return false
}


const showResults = (address) => {
    results.style.display = 'block'

    const html = 
    
    `
    <ul class="list-group">
    <li class="list-group-item"><strong>Cep:&nbsp;</strong>${address.cep} </li>
    <li class="list-group-item"><strong>DDD:&nbsp;</strong>${address.ddd} </li>
    <li class="list-group-item"><strong>Cidade:&nbsp;</strong>${address.localidade}  </li>
    <li class="list-group-item"><strong>Estado:&nbsp;</strong>${address.uf}  </li>
    <li class="list-group-item"><strong>Rua:&nbsp;</strong>${address.logradouro}  </li>
    <li class="list-group-item"><strong>Complemento:&nbsp;</strong>${address.complemento}  </li>
    <li class="list-group-item"><strong>Bairro:&nbsp;</strong>${address.bairro}  </li>
    <li class="list-group-item"><strong>Siafi:&nbsp;</strong>${address.siafi}  </li>
    <li class="list-group-item"><strong>IBGE:&nbsp;</strong>${address.ibge}  </li>
    </ul>
    
    `
    results.innerHTML = html
   
}