let data
let city = 'İstanbul'

fetch('http://api.openweathermap.org/data/2.5/weather?appid=0a37e45a7316753630171c74608e2160&q=' + city + '&units=metric&lang=tr')
.then(res => {
    return res.json();
})
.then(function(res) {
    data = res
    // console.log(data);
    console.log(data)
    document.querySelector('#sehir').innerHTML = data.name
    document.querySelector('#temp').innerHTML = Math.round(data.main.temp)
    document.querySelector('#feelsLike').innerHTML = Math.round(data.main.feels_like) + ' <sup>o</sup>C'
    let date = new Date(data.dt * 1000) // Unix Epoch time format olduğu için 1000 ile çarptık
    document.querySelector('#today').innerHTML = date
    // document.querySelector('#feelsLike').innerHTML = date.getUTCDay()
    document.querySelector('#ihtimal').innerHTML = data.main.pressure + ' atm'
    document.querySelector('#windSpeed').innerHTML = data.wind.speed + ' km/h'
    document.querySelector('#humidity').innerHTML = ' % ' + data.main.humidity
    document.querySelector('#aciklama').innerHTML = ' ' + data.weather[0].description
	
    let icon  = '<i class="wi wi-owm-' + data.weather[0].id + '" style="font-size: 55px; color: #20afda; margin-left: 20px;"></i>'
    document.querySelector('#today-icon').innerHTML = icon

});


function getCity() {
    city = document.querySelector('#city').value
    console.log(city)
    fetch('http://api.openweathermap.org/data/2.5/weather?appid=0a37e45a7316753630171c74608e2160&q=' + city + '&units=metric&lang=tr')
    .then(res => {
        return res.json();
    })
    .then(function(res) {
        data = res
        // console.log(data);
        console.log(data)
        document.querySelector('#sehir').innerHTML = data.name
        document.querySelector('#temp').innerHTML = Math.round(data.main.temp)
        document.querySelector('#feelsLike').innerHTML = Math.round(data.main.feels_like) + ' <sup>o</sup>C'
        let date = new Date(data.dt * 1000)
        document.querySelector('#today').innerHTML = date
        // document.querySelector('#feelsLike').innerHTML = date.getUTCDay()
        document.querySelector('#ihtimal').innerHTML = data.main.pressure + ' atm'
        document.querySelector('#windSpeed').innerHTML = data.wind.speed + ' km/h'
        document.querySelector('#humidity').innerHTML = ' % ' + data.main.humidity
        document.querySelector('#aciklama').innerHTML = ' ' + data.weather[0].description

        let icon  = '<i class="wi wi-owm-' + data.weather[0].id + '" style="font-size: 55px; color: #20afda; margin-left: 20px;"></i>'
        document.querySelector('#today-icon').innerHTML = icon
    });
}


// function getData(sehir) {
//     fetch('http://api.openweathermap.org/data/2.5/weather?appid=0a37e45a7316753630171c74608e2160&q=' + sehir + '&units=metric&lang=tr')
//     .then(res => {
//         return res.json();
//     })
//     .then(function(res) {
//         data = res
//         // console.log(data);
//         console.log(data)
//         document.querySelector('#sehir').innerHTML = data.name
//         document.querySelector('#temp').innerHTML = Math.round(data.main.temp)
//         document.querySelector('#feelsLike').innerHTML = Math.round(data.main.feels_like) + ' <sup>o</sup>C'
//         let date = new Date(data.dt * 1000)
//         document.querySelector('#today').innerHTML = date
//         // document.querySelector('#feelsLike').innerHTML = date.getUTCDay()
//         document.querySelector('#ihtimal').innerHTML = data.main.pressure + ' atm'
//         document.querySelector('#windSpeed').innerHTML = data.wind.speed + ' km/h'
//         document.querySelector('#humidity').innerHTML = ' % ' + data.main.humidity
//     });
// }



