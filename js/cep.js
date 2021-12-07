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
    })
    .catch(error => {
        console.log(error)
    })

    event = event || window.event
    if( event.preventDefault) event.preventDefault()
    if( event.preventValue) event.preventValue()
    return false
}