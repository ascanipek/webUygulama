

function islem(){
    if(document.querySelector('#numberOne').value == '' || document.querySelector('#numberTwo').value == ''){
        alert('Boş Yapma')
    }  
    else{
        // Sayıları alınıyor
        let sayiBir = parseInt(document.querySelector('#numberOne').value)
        let sayiIki = parseInt(document.querySelector('#numberTwo').value)
        // İşlem Türü Alınıyor
        let islem = document.querySelector('#type').value // +, - , * , /
        // sonuc elemanı 
        let sonuc = document.querySelector('#sonuc')

        // işlem türüne göre işlemler

        if(islem == '+'){
            sonuc.innerHTML = sayiBir + sayiIki
        }
        else if(islem == '-'){
            sonuc.innerHTML = sayiBir - sayiIki

        }
        else if(islem == '*'){
            sonuc.innerHTML = sayiBir * sayiIki

        }
        else if(islem == '/'){
            sonuc.innerHTML = (sayiBir / sayiIki).toFixed(7)

        }
        else if(islem == '%'){
            sonuc.innerHTML = sayiBir * (sayiIki / 100).toFixed(7)
        }
        else if(islem == '^'){
            sonuc.innerHTML = Math.pow(sayiBir, sayiIki)
        }
    }
}
let ekran = document.querySelector('#ekran')
let tur = 0// global işlem türü
let firstNumber
let mem
function getSayi(element){
    let sayi = element.innerHTML

        ekran.innerHTML += sayi
}

function temizle(){
    ekran.innerHTML = ''
}

function sign(){
    let ekrandakiSayi = parseInt(ekran.innerHTML)
    ekran.innerHTML = ekrandakiSayi * -1
}

function getTur(islem){
    tur = islem
    firstNumber = ekran.innerHTML // birinci sayı
   
    ekran.innerHTML = ''
}  

function hesapla(){ // = butonu
    let lastNumber = ekran.innerHTML // ikinci sayı
    let sonuc = 0
    if(tur == '+'){
        sonuc = parseFloat(firstNumber) + parseFloat(lastNumber)
        ekran.innerHTML = sonuc.toFixed(2)
    }
    else if(tur == '-'){
        sonuc = parseFloat(firstNumber) - parseFloat(lastNumber)
        ekran.innerHTML = sonuc.toFixed(2)
    }
    else if(tur == '*'){
        sonuc = parseFloat(firstNumber) * parseFloat(lastNumber)
        ekran.innerHTML = sonuc.toFixed(2)
    }
    else if(tur == '/'){
        sonuc = parseFloat(firstNumber) / parseFloat(lastNumber)
        ekran.innerHTML = sonuc.toFixed(2)
    }
}

ekran.addEventListener("overflow", function(event){
    // console.log(event)
    ekran.style.fontSize = ekran.style.fontSize - 10
}, false)
