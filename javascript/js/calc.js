

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