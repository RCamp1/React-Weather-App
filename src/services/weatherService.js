const apiKey = import.meta.env.VITE_WEATHER_API;

export async function getWeather(city) {
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`);

    const data = await response.json();

    return data;

}