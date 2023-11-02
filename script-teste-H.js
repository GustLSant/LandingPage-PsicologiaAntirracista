document.getElementById('p').textContent = window.innerHeight

printarAltura()

async function printarAltura(){
    document.getElementById('p').textContent = window.innerHeight
    setTimeout(printarAltura, 500)
}