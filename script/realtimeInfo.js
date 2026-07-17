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

// // 1. 방금 만든 weatherAPI.js 모듈에서 핵심 비동기 함수를 쏙 훔쳐옵니다.
// import { getLiveWeather } from './weatherAPI.js';

// const citySelect = document.querySelector('#city-select');
// const weatherBox = document.querySelector('#weather-box');

// citySelect.addEventListener('change', async function(event) {

//     console.log("선택된 옵션의 값:", event.target.value); // 디버깅용 로그

//     const selectedValue = event.target.value;
//     if (selectedValue === "none") {
//         weatherBox.innerHTML = "<p>도시를 선택하세요.</p>";
//         return;
//     }

//     const coords = selectedValue.split(',');
//     const cityName = citySelect.options[citySelect.selectedIndex].text;

//     weatherBox.innerHTML = "<p>모듈을 통해 실시간 수신 중... 📡</p>";

//     // 2. 수입해온 비동기 모듈 함수를 실행해 결과만 딱 받아옵니다. (코드가 훨씬 간결해집니다!)
//     const weatherInfo = await getLiveWeather(coords[0], coords[1]);

//     if (weatherInfo) {
//         weatherBox.innerHTML = `
//             <div style="background-color: #e8f8f5; border-left: 5px solid #16a085; padding: 15px; margin-top: 10px;">
//                 <h4>모듈형 날씨 피드: ${cityName}</h4>
//                 <p>🌡️ 기온: ${weatherInfo.temp}°C</p>
//                 <p>💧 습도: ${weatherInfo.humidity}%</p>
//             </div>
//         `;
//     } else {
//         weatherBox.innerHTML = "<p>데이터를 불러오지 못했습니다.</p>";
//     }
// });