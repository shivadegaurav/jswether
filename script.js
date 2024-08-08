const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');
const cond = document.getElementById('condition');
const Wimg = document.getElementById('image');

//alert('hello');

async function getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=b4b538c723ce428f9c2181811240407&q=${cityName}&aqi=yes`);
    return await promise.json()

}
//http://api.weatherapi.com/v1/current.json?key=b4b538c723ce428f9c2181811240407&q=London&aqi=yes
button.addEventListener('click', async() =>{
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
    cond.innerText=result.current.condition.text;
    Wimg.src=result.current.condition.icon;
});