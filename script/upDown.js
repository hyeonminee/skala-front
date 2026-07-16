function startGame() {
    // 1. 컴퓨터가 1-50 사이 무작위 난수 생성
    var computerNum = Math.floor(Math.random()*50)+1;

    var count = 0; // 시도 횟수

    // 2. 사용자가 맞출 때까지 반복 실행
    while (true) {
        var userInput = prompt("1부터 50 사이의 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요?")

        if (userInput == null) {
            alert("게임이 취소되었습니다.");
            break;
        }

        var userNum = parseInt(userInput);
        count++;

        // 유효하지 않은 값 예외 처리 (숫자가 아니거나 범위 초과)
        if (isNaN(userNum) || userNum < 1 || userNum >50) {
            alert("1부터 50 사이의 숫자만 입력해주세요.");
            continue; // 루프의 처음으로 
        }

        // 3. 숫자 비교 및 알림창 띄우기
        if (userNum === computerNum) {
            // 정답을 맞추면 축하 메시지를 띄우고 게임 종료
            alert("축하합니다! " + count + "번 만에 맞췄어요 ~ !");
            break; // 반복문 탈출 (게임 종료)
        } else if (userNum > computerNum) {
            // 사용자가 정답보다 큰 값을 입력한 경우
            alert("Down!!");
        } else {
            // 사용자가 정답보다 작은 값을 입력한 경우
            alert("Up!!")
        }
    }
}




