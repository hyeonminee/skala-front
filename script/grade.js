function startGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0; // 총점

    for (var i = 0; i < subjects.length; i++) {
        var score = Number(prompt(subjects[i] + " 점수를 입력하세요."));
        
        if (isNaN(score)) {
            alert("올바른 숫자가 입력되지 않아 계산을 취소합니다.");
            return; // 함수 즉시 종료
        }
        
        // 입력받은 과목 점수 총점에 누적해 더함
        total += score;
    }

    var average = total / subjects.length;

    var result="";

    if (average >= 60) {
        result = "🎉 합격입니다! 우수자로 선정되었습니다."
    }
    else {
        result = "불합격입니다! 좀 더 분발하세요! 📚"
    }

    alert(
        "===== 📊 성적 결과표 =====\n" +
        "▶ 총점: " + total + "점\n"+
        "▶ 평균: " + average.toFixed(1) + "점\n" + // toFixed(1)은 소수점 첫째 자리까지만 출력
        "=====================\n" +
        "▶ 결과: " + result
    )
}