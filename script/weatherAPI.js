// API 호출만 담당
// 여기서 fetch() -> Open-Meteo 서버

export async function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;
    const response = await fetch(url);
    const data = await response.json();

    return {
        temperature: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m
    };
}