//poderia criar a função dessa forma mas irei utilizar arrow function que eh o mais recente
// function start() {
    
// }

const start = () => {
    // alert('start')
    console.log('start')
    second()
    console.log('end')
}

const second = () => {
    // console.log('second')
    setTimeout(() => {
        console.log('second')
    }, 2000)
}