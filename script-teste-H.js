document.getElementById('innerH').textContent = window.innerHeight

printarAltura()

async function printarAltura(){
    document.getElementById('innerH').textContent = window.innerHeight
    document.getElementById('outerH').textContent = window.outerHeight
    document.getElementById('contador').textContent = Math.random()
    setTimeout(printarAltura, 500)
}