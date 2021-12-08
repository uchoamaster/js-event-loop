const configs = {
    method: 'GET'
}

const results = document.getElementById('results')

const searchCep = (event) => {
    startPreloader()

    results.style.display = 'none'
    search()
    event = event || window.event
    if( event.preventDefault) event.preventDefault()
    if( event.preventValue) event.preventValue()
    return false
}

const search = async () => {

    const cep = document.getElementById('cep').value || '000000000'

    // alert('Buscando o cep')

try {
    const result = await fetch(`https://ws.apicep.com/cep/${cep}.json`,configs)
    const data = await result.json()
    //    console.log(data)
    if (data.status === 0 ) throw data.message
   showResults(data)
 
} catch (error) {
    swal('Erro', error.toString(), 'error')
}


   endPreloader()
  
}

const showResults = (address) => {
    results.style.display = 'block'

    const html = 
    
    `
    <ul class="list-group">
    <li class="list-group-item"><strong>Cep:&nbsp;</strong>${address.code} </li>
    <li class="list-group-item"><strong>Cidade:&nbsp;</strong>${address.city}  </li>
    <li class="list-group-item"><strong>Estado:&nbsp;</strong>${address.state}  </li>
    <li class="list-group-item"><strong>Rua:&nbsp;</strong>${address.address}  </li>
    <li class="list-group-item"><strong>Bairro:&nbsp;</strong>${address.district}  </li>

    </ul>
    
    `
    results.innerHTML = html
   
}