window.addEventListener('load', start);

function start () {
    var inputRange = document.querySelector('#input-range')
    var inputNumber = document.querySelector('#input-number')
    var inputText = document.querySelector('#input-text')
    inputRange.addEventListener('change', getNumberRange)
    
    function getNumberRange(event) {
        var currentNumber = event.target.value
        inputNumber.value = currentNumber
        
        extenseCases(currentNumber, inputText)
    }
}

function extenseCases(currentNumber, inputText) {
    var n1, n2, n3
    if (currentNumber.length === 1) {
        n1 = currentNumber[0]
        inputText.value = units(n1)
    } else if (currentNumber.length === 2){
        n1 = currentNumber[0]
        n2 = currentNumber[1]
        inputText.value = dozens(n1, n2)
    } else if (currentNumber.length === 3) {
        n1 = currentNumber[0]
        n2 = currentNumber[1]
        n3 = currentNumber[2]
        inputText.value = hundreds(n1, n2, n3)
    } else {
        console.log('Erro')
    }
}

function units(n1) {
    var text
    switch (n1) {
        case '0': text = 'Zero'; break
        case '1': text = 'Um'; break
        case '2': text = 'Dois'; break
        case '3': text = 'Três'; break
        case '4': text = 'Quatro'; break
        case '5': text = 'Cinco'; break
        case '6': text = 'Seis'; break
        case '7': text = 'Sete'; break
        case '8': text = 'Oito'; break
        case '9': text = 'Nove'; break
    }
    return text
}

function dozens(n1, n2) {
    var textTen
    switch (n1) {
        case '1':
            if (n2 == '0') {textTen = 'Dez'}
            if (n2 == '1') {textTen = 'Onze'}
            if (n2 == '2') {textTen = 'Doze'}
            if (n2 == '3') {textTen = 'Treze'}
            if (n2 == '4') {textTen = 'Quatorze'}
            if (n2 == '5') {textTen = 'Quinze'}
            if (n2 == '6') {textTen = 'Dezesseis'}
            if (n2 == '7') {textTen = 'Dezesete'}
            if (n2 == '8') {textTen = 'Dezoito'}
            if (n2 == '9') {textTen = 'Dezenove'}
            break
        case '2':
            if (n2 == '0') { textTen = 'Vinte'; break}
            textTen = ('Vinte e ' + units(n2))
            break
        case '3':
            if (n2 == '0') { textTen = 'Trinta'; break}
            textTen = ('Trinta e ' + units(n2))
            break
        case '4':
            if (n2 == '0') { textTen = 'Quarenta'; break}
            textTen = ('Quarenta e ' + units(n2))
            break
        case '5':
            if (n2 == '0') { textTen = 'Cinquenta'; break}
            textTen = ('Cinquenta e ' + units(n2))
            break
        case '6':
            if (n2 == '0') { textTen = 'Sessenta'; break}
            textTen = ('Sessenta e ' + units(n2))
            break
        case '7':
            if (n2 == '0') { textTen = 'Setenta'; break}
            textTen = ('Setenta e ' + units(n2))
            break
        case '8':
            if (n2 == '0') { textTen = 'Oitenta'; break}
            textTen = ('Oitenta e ' + units(n2))
            break
        case '9':
            if (n2 == '0') { textTen = 'Noventa'; break}
            textTen = ('Noventa e ' + units(n2))
            break
    }
    return textTen
}

function hundreds(n1, n2, n3) {
    var textHundreds
        if (n1 == '1') {
            if (n2 == '0' && n3 == '0') { textHundreds = 'Cem'} 
            else if (n2 == '0') { textHundreds = ('Cento e ' + units(n3))} 
            else textHundreds = ('Cento e ' + dozens(n2, n3))
        }
        if (n1 == '2') {
            if (n2 == '0' && n3 == '0') { textHundreds = 'Duzentos'} 
            else if (n2 == '0') { textHundreds = ('Duzentos e ' + units(n3))} 
            else textHundreds = ('Duzentos e ' + dozens(n2, n3))
        }
        if (n1 == '3') {
            if (n2 == '0' && n3 == '0') { textHundreds = 'Trezentos'} 
            else if (n2 == '0') { textHundreds = ('Trezentos e ' + units(n3))} 
            else textHundreds = ('Trezentos e ' + dozens(n2, n3))
        }
        if (n1 == '4') {
            if (n2 == '0' && n3 == '0') { textHundreds = 'Quatrocentos'} 
            else if (n2 == '0') { textHundreds = ('Quatrocentos e ' + units(n3))} 
            else textHundreds = ('Quatrocentos e ' + dozens(n2, n3))
        }
        if (n1 == '5') {
            if (n2 == '0' && n3 == '0') { textHundreds = 'Quinhentos'} 
            else if (n2 == '0') { textHundreds = ('Quinhentos e ' + units(n3))} 
            else textHundreds = ('Quinhentos e ' + dozens(n2, n3))
        }
        if (n1 == '6') {
            if (n2 == '0' && n3 == '0') { textHundreds = 'Seiscentos'} 
            else if (n2 == '0') { textHundreds = ('Seiscentos e ' + units(n3))} 
            else textHundreds = ('Seiscentos e ' + dozens(n2, n3))
        }
        if (n1 == '7') {
            if (n2 == '0' && n3 == '0') { textHundreds = 'Setecentos'} 
            else if (n2 == '0') { textHundreds = ('Setecentos e ' + units(n3))} 
            else textHundreds = ('Setecentos e ' + dozens(n2, n3))
        }
        if (n1 == '8') {
            if (n2 == '0' && n3 == '0') { textHundreds = 'Oitocentos'} 
            else if (n2 == '0') { textHundreds = ('Oitocentos e ' + units(n3))} 
            else textHundreds = ('Oitocentos e ' + dozens(n2, n3))
        }
        if (n1 == '9') {
            if (n2 == '0' && n3 == '0') { textHundreds = 'Novecentos'} 
            else if (n2 == '0') { textHundreds = ('Novecentos e ' + units(n3))} 
            else textHundreds = ('Novecentos e ' + dozens(n2, n3))
        }
    return textHundreds
}