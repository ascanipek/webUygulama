// console.log('Harici dosyadan çalışan kod!')

let gun = new Date() 
let saat = gun.getHours()
let dakika = gun.getMinutes()

console.log('Saat: ' + saat + ':' + dakika)

if(saat >= 6 && saat <= 11)
    document.querySelector('#tarih').innerHTML = 'Günaydın'
else if(saat >= 11 && saat <= 19)
    document.querySelector('#tarih').innerHTML = 'İyi Günler'
else if(saat >= 19 && saat <= 21)
    document.querySelector('#tarih').innerHTML = 'İyi Akşamlar'
else if(saat >= 21)
    document.querySelector('#tarih').innerHTML = 'İyi Geceler'




    function hesapla(){
        // Kullanıcının girdiği veriler alınıyor
        let firstNumber = document.querySelector('#sayiBir').value
        let secondNumber = document.querySelector('#sayiIki').value
        // veriler tamsayıya çevriliyor
        // console.log(document.querySelector('#sonuc'))
        let enBuyuk
        let sonuc = document.querySelector('#sonuc')
        if(firstNumber === '' || secondNumber === '')
            alert("Boş bırakmayın")
        else if(firstNumber > secondNumber){
            firstNumber = parseInt(firstNumber)
            secondNumber = parseInt(secondNumber)
            enBuyuk = firstNumber
            sonuc.style.visibility = 'visible'
            sonuc.classList.add("alert-danger");
            document.querySelector('#sonuc').innerHTML = 'Birinci Sayı daha Büyük: ' + enBuyuk
        }
        else if( secondNumber > firstNumber){
            firstNumber = parseInt(firstNumber)
            secondNumber = parseInt(secondNumber)
            enBuyuk = secondNumber
            sonuc.style.visibility = 'visible'
            sonuc.classList.add("alert-warning");
            sonuc.innerHTML = 'İkinci Sayı daha Büyük: ' + enBuyuk
        }
        else{
            enBuyuk = 'Sayıları Eşit'
            sonuc.style.visibility = 'visible'
            sonuc.classList.add("alert-primary");
            sonuc.innerHTML = 'Girilen Sayılar eşit. Senin Amacın!'
        }
        
    }