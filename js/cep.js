const searchCep = (event) => {
    alert('Buscando o cep')

    event = event || window.event
    if( event.preventDefault) event.preventDefault()
    if( event.preventValue) event.preventValue()
    return false
}