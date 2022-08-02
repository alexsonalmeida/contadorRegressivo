let intervalo
const visor = document.querySelector(".inputs")

const verifica0 = unidade => {
    if (unidade < 10) return `0${unidade}`
    return unidade
}

const iniciarContador = () => {
    let seg = document.querySelector(".seg")
    let min = document.querySelector(".min")
    let hrs = document.querySelector(".hrs") 

    if (seg.value === '') seg.value = 0
    if (min.value === '') min.value = 0
    if (hrs.value === '') hrs.value = 0
    
    if (seg.value < 0 || min.value < 0 || hrs.value < 0) {
        alert("Erro, valores negativos não são aceitos")
        return
    }

    if (seg.value > 59 || min.value > 59 || hrs.value > 99) {
        alert("Erro, o tempo máximo permitido para o timer é 99 para horas, 59 para minutos e 59 para segundos")
        return
    }

    let segValor = Number(seg.value)
    let minValor = Number(min.value)
    let hrsValor = Number(hrs.value)  

    const decrementarContador = () => {
        visor.style.backgroundColor = "white"
        visor.style.width = "max-content"
        visor.style.padding =  "0.5rem 3rem"
        visor.style.borderRadius = "2rem"
        visor.style.boxShadow = "black 0.1rem 0.1rem 0.4rem"
        visor.style.fontSize = "1.5rem"

        if (segValor === 0 && minValor === 0 && hrsValor === 0) {
            visor.innerText = 'Tempo acabado'
            clearInterval(intervalo)
        } else {
            if (segValor === 0 && minValor === 0) {
                visor.innerText = `${verifica0(hrsValor)}:${verifica0(minValor)}:${verifica0(segValor)}` 
                hrsValor--
                minValor = 59
                segValor = 59
            } else if (segValor === 0) {
                 visor.innerText = `${verifica0(hrsValor)}:${verifica0(minValor)}:${verifica0(segValor)}` 
                minValor--
                segValor = 59
            } else {
                visor.innerText = `${verifica0(hrsValor)}:${verifica0(minValor)}:${verifica0(segValor)}`               
                segValor-- 
            }
        }
    }

    intervalo = setInterval(decrementarContador, 1000)
}