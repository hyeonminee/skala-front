// 화면(DOM)만 담당
// 사용자(select) -> realtimeInfo.js -> weatherAPI.js -> 결과 받아와서 화면(innerHTML) 출력

import { getWeather } from "./weatherAPI.js";

const cities = {
    seoul: {
        name: "대한민국 서울 KR",
        lat: 37.56,
        lon: 126.97
    },

    brussels: {
        name: "벨기에 브뤼셀 BEL",
        lat: 50.85,
        lon: 4.34
    },

    vancouver: {
        name: "캐나다 밴쿠버 CAN",
        lat: 49.28,
        lon: -123.12
    },

    tokyo: {
        name: "일본 도쿄 JP",
        lat: 35.67,
        lon: 139.65
    },

    paris: {
        name: "프랑스 파리 FRA",
        lat: 48.85,
        lon: 2.35
    }
};

const citySelect = document.getElementById("city");
const weatherBox = document.getElementById("weather-box");

citySelect.addEventListener("change", showWeather);

async function showWeather() {

    const city = cities[citySelect.value];

    if (!city) {
        weatherBox.innerHTML = "도시를 선택해주세요.";
        return;
    }

    weatherBox.innerHTML =
        "<p>실시간 날씨 로딩 중... ⏳</p>";

    try {

        const weather = await getWeather(city.lat, city.lon);

        weatherBox.innerHTML =
            "<h4>🌏 " + city.name + " 실시간 날씨</h4>" +
            "<p>🌡️ 현재 기온 : " + weather.temperature + " °C</p>" +
            "<p>💧 현재 습도 : " + weather.humidity + " %</p>";

    } catch (error) {

        weatherBox.innerHTML =
            "<p>❌ 날씨 정보를 불러오지 못했습니다.</p>";

        console.log(error);
    }
}