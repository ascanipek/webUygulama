let data
let city = 'İstanbul'
let today

fetch('http://api.openweathermap.org/data/2.5/weather?appid=0a37e45a7316753630171c74608e2160&q=' + city + '&units=metric&lang=tr')
.then(res => {
    return res.json();
})
.then(function(res) {
    data = res
    // console.log(data);
    // console.log(data)
    document.querySelector('#sehir').innerHTML = data.name
    document.querySelector('#temp').innerHTML = Math.round(data.main.temp)
    document.querySelector('#feelsLike').innerHTML = Math.round(data.main.feels_like) + ' <sup>o</sup>C'
    // let date = new Date(data.dt * 1000) // Unix Epoch time format olduğu için 1000 ile çarptık
    let date = tarih(data.dt)
    document.querySelector('#today').innerHTML = date.gun + ' ' + date.ay + ' ' + date.sene
    today =  date.gun
    document.querySelector('#todayDate').innerHTML = date.isimGun
    // document.querySelector('#feelsLike').innerHTML = date.getUTCDay()
    document.querySelector('#ihtimal').innerHTML = data.main.pressure + ' atm'
    document.querySelector('#windSpeed').innerHTML = data.wind.speed + ' km/h'
    document.querySelector('#humidity').innerHTML = ' % ' + data.main.humidity
    document.querySelector('#aciklama').innerHTML = ' ' + data.weather[0].description
    let icon  = '<i class="wi wi-owm-' + data.weather[0].id + '" style="font-size: 55px; color: #20afda; margin-left: 20px;"></i>'
    document.querySelector('#today-icon').innerHTML = icon
});


fetch('http://api.openweathermap.org/data/2.5/forecast?appid=0a37e45a7316753630171c74608e2160&q=' + city + '&units=metric&lang=tr')
.then(res => {
    return res.json()
})
.then(function(res) {
    data = res.list
    // console.log(data)
    let otherDays = []
    
    data.map(function(item){
        let dt = tarih(item.dt)
        let gun = dt.gun
        if(gun != today){
            otherDays.push(item)
        }
    })
    otherDays.shift()
    // console.log(otherDays)
    let result = {
        bir: otherDays[4],
        iki: otherDays[12],
        uc: otherDays[20],
        dort: otherDays[28],
        bes: otherDays[36]
    }
    // gun = tarih(result.bir.dt).gun
    document.querySelector('#secondDay').innerHTML = tarih(result.bir.dt).isimGun
    document.querySelector('#thirdDay').innerHTML = tarih(result.iki.dt).isimGun
    document.querySelector('#forthDay').innerHTML = tarih(result.uc.dt).isimGun
    document.querySelector('#fifthDay').innerHTML = tarih(result.dort.dt).isimGun
    // document.querySelector('#sixthDay').innerHTML = tarih(result.bes.dt).isimGun

    document.querySelector('#secondTemp').innerHTML = Math.round(result.bir.main.temp)
    document.querySelector('#thirdTemp').innerHTML = Math.round(result.iki.main.temp)
    document.querySelector('#forthTemp').innerHTML = Math.round(result.uc.main.temp)
    document.querySelector('#fifthTemp').innerHTML = Math.round(result.dort.main.temp)
    // document.querySelector('#sixthTemp').innerHTML = Math.round(result.bes.main.temp)

    document.querySelector('#secondFeels').innerHTML = Math.round(result.bir.main.feels_like)
    document.querySelector('#thirdFeels').innerHTML = Math.round(result.iki.main.feels_like)
    document.querySelector('#forthFeels').innerHTML = Math.round(result.uc.main.feels_like)
    document.querySelector('#fifthFeels').innerHTML = Math.round(result.dort.main.feels_like)
    // document.querySelector('#sixthFeels').innerHTML = Math.round(result.bes.main.feels_like)

    document.querySelector('#secondIcon').innerHTML = '<i class="wi wi-owm-' + result.bir.weather[0].id + '" style="font-size: 55px; color: #20afda;"></i>'
    document.querySelector('#thirdIcon').innerHTML = '<i class="wi wi-owm-' + result.iki.weather[0].id + '" style="font-size: 55px; color: #20afda;"></i>'
    document.querySelector('#forthIcon').innerHTML = '<i class="wi wi-owm-' + result.uc.weather[0].id + '" style="font-size: 55px; color: #20afda;"></i>'
    document.querySelector('#fifthIcon').innerHTML = '<i class="wi wi-owm-' + result.dort.weather[0].id + '" style="font-size: 55px; color: #20afda;"></i>'
    // document.querySelector('#sixthIcon').innerHTML = '<i class="wi wi-owm-' + result.bes.weather[0].id + '" style="font-size: 55px; color: #20afda;"></i>'

    document.querySelector('#secondWindSpeed').innerHTML = result.bir.wind.speed + ' km/h' 
    document.querySelector('#thirdWindSpeed').innerHTML = result.iki.wind.speed + ' km/h' 
    document.querySelector('#forthWindSpeed').innerHTML = result.uc.wind.speed + ' km/h' 
    document.querySelector('#fifthWindSpeed').innerHTML = result.dort.wind.speed + ' km/h' 
    // document.querySelector('#sixthWindSpeed').innerHTML = result.bes.wind.speed + ' km/h' 

    document.querySelector('#secondSunrise').innerHTML = result.bir.weather[0].description
    document.querySelector('#thirdSunrise').innerHTML = result.iki.weather[0].description
    document.querySelector('#forthSunrise').innerHTML = result.uc.weather[0].description
    document.querySelector('#fifthSunrise').innerHTML = result.dort.weather[0].description
    // document.querySelector('#sixthSunrise').innerHTML =result.bes.weather[0].description



    console.log(result)
    // 4, 12, 20, 28, 36  
})


function getCity() {
    city = document.querySelector('#city').value
    console.log(city)
    // anlık veri
    fetch('http://api.openweathermap.org/data/2.5/weather?appid=0a37e45a7316753630171c74608e2160&q=' + city + '&units=metric&lang=tr')
    .then(res => {
        return res.json();
    })
    .then(function(res) {
        data = res
        document.querySelector('#sehir').innerHTML = data.name
        document.querySelector('#temp').innerHTML = Math.round(data.main.temp)
        document.querySelector('#feelsLike').innerHTML = Math.round(data.main.feels_like) + ' <sup>o</sup>C'
        let date = tarih(data.dt)
        document.querySelector('#today').innerHTML = date.gun + ' ' + date.ay + ' ' + date.sene
        document.querySelector('#todayDate').innerHTML = date.isimGun
        document.querySelector('#ihtimal').innerHTML = data.main.pressure + ' atm'
        document.querySelector('#windSpeed').innerHTML = data.wind.speed + ' km/h'
        document.querySelector('#humidity').innerHTML = ' % ' + data.main.humidity
        document.querySelector('#aciklama').innerHTML = ' ' + data.weather[0].description

        let icon  = '<i class="wi wi-owm-' + data.weather[0].id + '" style="font-size: 55px; color: #20afda; margin-left: 20px;"></i>'
        document.querySelector('#today-icon').innerHTML = icon
    });

    // 5 günlük veri

    fetch('http://api.openweathermap.org/data/2.5/forecast?appid=0a37e45a7316753630171c74608e2160&q=' + city + '&units=metric&lang=tr')
    .then(res => {
        return res.json()
    })
    .then(function(res) {
        data = res.list
        // console.log(data)
        let otherDays = []
        
        
        data.map(function(item){
            let dt = tarih(item.dt)
            let gun = dt.gun
            if(gun != today){
                otherDays.push(item)
            }
        })
        otherDays.shift()
        // console.log(otherDays)
        let result = {
            bir: otherDays[4],
            iki: otherDays[12],
            uc: otherDays[20],
            dort: otherDays[28],
            bes: otherDays[36]
        }

        // gun = tarih(result.bir.dt).gun
        document.querySelector('#secondDay').innerHTML = tarih(result.bir.dt).isimGun
        document.querySelector('#thirdDay').innerHTML = tarih(result.iki.dt).isimGun
        document.querySelector('#forthDay').innerHTML = tarih(result.uc.dt).isimGun
        document.querySelector('#fifthDay').innerHTML = tarih(result.dort.dt).isimGun
        // document.querySelector('#sixthDay').innerHTML = tarih(result.bes.dt).isimGun

        document.querySelector('#secondTemp').innerHTML = Math.round(result.bir.main.temp)
        document.querySelector('#thirdTemp').innerHTML = Math.round(result.iki.main.temp)
        document.querySelector('#forthTemp').innerHTML = Math.round(result.uc.main.temp)
        document.querySelector('#fifthTemp').innerHTML = Math.round(result.dort.main.temp)
        // document.querySelector('#sixthTemp').innerHTML = Math.round(result.bes.main.temp)

        document.querySelector('#secondFeels').innerHTML = Math.round(result.bir.main.feels_like)
        document.querySelector('#thirdFeels').innerHTML = Math.round(result.iki.main.feels_like)
        document.querySelector('#forthFeels').innerHTML = Math.round(result.uc.main.feels_like)
        document.querySelector('#fifthFeels').innerHTML = Math.round(result.dort.main.feels_like)
        // document.querySelector('#sixthFeels').innerHTML = Math.round(result.bes.main.feels_like)

        document.querySelector('#secondIcon').innerHTML = '<i class="wi wi-owm-' + result.bir.weather[0].id + '" style="font-size: 55px; color: #20afda;"></i>'
        document.querySelector('#thirdIcon').innerHTML = '<i class="wi wi-owm-' + result.iki.weather[0].id + '" style="font-size: 55px; color: #20afda;"></i>'
        document.querySelector('#forthIcon').innerHTML = '<i class="wi wi-owm-' + result.uc.weather[0].id + '" style="font-size: 55px; color: #20afda;"></i>'
        document.querySelector('#fifthIcon').innerHTML = '<i class="wi wi-owm-' + result.dort.weather[0].id + '" style="font-size: 55px; color: #20afda;"></i>'
        // document.querySelector('#sixthIcon').innerHTML = '<i class="wi wi-owm-' + result.bes.weather[0].id + '" style="font-size: 55px; color: #20afda;"></i>'

        document.querySelector('#secondWindSpeed').innerHTML = result.bir.wind.speed + ' km/h' 
        document.querySelector('#thirdWindSpeed').innerHTML = result.iki.wind.speed + ' km/h' 
        document.querySelector('#forthWindSpeed').innerHTML = result.uc.wind.speed + ' km/h' 
        document.querySelector('#fifthWindSpeed').innerHTML = result.dort.wind.speed + ' km/h' 
        // document.querySelector('#sixthWindSpeed').innerHTML = result.bes.wind.speed + ' km/h' 

        document.querySelector('#secondSunrise').innerHTML = result.bir.weather[0].description
        document.querySelector('#thirdSunrise').innerHTML = result.iki.weather[0].description
        document.querySelector('#forthSunrise').innerHTML = result.uc.weather[0].description
        document.querySelector('#fifthSunrise').innerHTML = result.dort.weather[0].description
        // document.querySelector('#sixthSunrise').innerHTML =result.bes.weather[0].description


        console.log(result)
        // 4, 12, 20, 28, 36  
    })
}


function tarih(date) {
    var now = new Date(date * 1000)
    var aylar = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
    var gunler = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");
    var yil = now.getFullYear();
    var ay = now.getMonth();
    var gun = now.getDate();
    var haftagun = now.getDay();       
    // var now = new Date();
    var saat = now.getHours();
    var dakika = now.getMinutes();
    saat = sifirekle(saat);
    dakika = sifirekle(dakika);
    let res = gun + " " + aylar[ay] + " " + yil + " " + gunler[haftagun] + " " + saat + ":" + dakika;
    // console.log(res)
    res = res.split(' ')
    // console.log(res)
    let data = {
        gun: res[0],
        ay: res[1],
        sene: res[2],
        isimGun: res[3],
        saat: res[4]
    }
    // 22 Şubat 2021 Pazartesi 15:35
    return data
}

function sifirekle(sayi) {
    if (sayi < 10) {
        return "0" + sayi.toString();
    } else {
        return sayi.toString();
    }
}