function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let cont = 1; cont <= 10; cont++) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            tab.appendChild(item) // adiciona elemento filho para o 'item'
        }
    }
}