const configs = {
    method: 'GET'
}
const searchCep = (event) => {

    const cep = document.getElementById('cep').value || '000000000'

    // alert('Buscando o cep')
    fetch(`https://ws.apicep.com/cep/${cep}.json`,configs)
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
    })

    event = event || window.event
    if( event.preventDefault) event.preventDefault()
    if( event.preventValue) event.preventValue()
    return false
}

const results = document.getElementById('results')
const showResults = (address) => {
    results.style.display = 'block'

    const html = 
    
    `
    <ul class="list-group">
    <li class="list-group-item"><strong>Cep:&nbsp;</strong>${address.code} </li>
    <li class="list-group-item"><strong>Cidade:&nbsp;</strong>${address.city}  </li>
    <li class="list-group-item"><strong>Estado:&nbsp;</strong>${address.state}  </li>
    <li class="list-group-item"><strong>Rua:&nbsp;</strong>${address.district}  </li>
    </ul>
    
    `
    results.innerHTML = html
   
}