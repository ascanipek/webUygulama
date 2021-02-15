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
    document.querySelector('#feelsLike').innerHTML = Math.round(data.main.feels_like)
    let date = new Date(data.dt * 1000)
    document.querySelector('#today').innerHTML = date
    document.querySelector('#feelsLike').innerHTML = date.getUTCDay()
});


function getCity() {
    city = document.querySelector('#city').value
}


function getData(sehir) {
    fetch('http://api.openweathermap.org/data/2.5/weather?appid=0a37e45a7316753630171c74608e2160&q=' + sehir + '&units=metric&lang=tr')
    .then(res => {
        return res.json();
    })
    .then(function(res) {
        data = res
        // console.log(data);
        console.log(data)
    });
}



