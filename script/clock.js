// 현재 실시간 시간을 화면에 출력

function updateClock() {
    const now = new Date();

    // 시, 분, 초 가져오기
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // 한 자리 숫자는 앞에 0 붙이기
    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");

    document.getElementById("clock").textContent = `⏰ 현재 시간 : ${hour}:${minute}:${second}`;

   
} 
// 처음에만 한 번 실행
updateClock();

// 1초마다 반복 실행
setInterval(updateClock, 1000); 