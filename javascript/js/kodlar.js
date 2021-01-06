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

// let a = 51
// a == 50 ? console.log('a 50 ye eşit') : console.log('a 50 den farklı')


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

let gunler = document.querySelector('#gun')
console.log(gunler)
let opt
// for(let i=1; i<=31; i++){
//     opt = document.createElement('option') // <option></option>
//     opt.value = i // <option value="i"></option>
//     opt.innerHTML = i // <option value="i">i</option>
//     gunler.appendChild(opt) //
// }

i = 1
while(i<=31){
    opt = document.createElement('option') // <option></option>
    opt.value = i // <option value="i"></option>
    opt.innerHTML = i // <option value="i">i</option>
    gunler.appendChild(opt) //
    i++
}

let aylar = document.querySelector('#ay')
for(i = 0; i < 13 ; i++){
    opt = document.createElement('option') // <option></option>
    opt.value = i // <option value="i"></option>
    opt.innerHTML = i // <option value="i">i</option>
    aylar.appendChild(opt)
}

let seneler = document.querySelector('#sene')
for(i = 2021; i >= 1900 ; i--){
    opt = document.createElement('option') // <option></option>
    opt.value = i // <option value="i"></option>
    opt.innerHTML = i // <option value="i">i</option>
    seneler.appendChild(opt)
}
let sayi = ' '
let sayac = 1
let toplam = 0
// while(sayi !== 0){
//     // alert('çalıştı')
//     sayi = prompt(sayac + ". Sayıyı Girin: ")
//     sayi = parseInt(sayi)
//     // toplam = toplam + sayi
//     toplam += sayi
//     sayac++
// }
// do{
//     // kodlar
// }while(sart)


// document.querySelector('#tarih').innerHTML = toplam

// Soru: 1-300'e kadar olan sayılardan 7'ye tam bölünenleri bulan ve hepsini toplayan js programını yazın
let yedi = document.querySelector('#yedi')
let span
let yedilerinToplami = 0
for(i=1; i<=301; i++){
    kalan = i % 7
    if( kalan == 0 ){
        span = document.createElement('span')
        yedilerinToplami += i
        span.innerHTML = i + ' - '
        yedi.appendChild(span)
    }
}
document.querySelector('#yediToplam').innerHTML = 'Toplam: ' + yedilerinToplami
