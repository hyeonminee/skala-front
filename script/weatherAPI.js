// API 호출만 담당
// 여기서 fetch() -> Open-Meteo 서버

// 외부에서 가져다 쓸 수 있도록 export를 함수 맨 앞에 붙인다.
export async function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;
    const response = await fetch(url);
    const data = await response.json();

    // 필요한 데이터만 객체로 패킹해서 리턴
    return {
        temperature: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m
    };
}