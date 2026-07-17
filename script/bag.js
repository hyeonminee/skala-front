function showMyBag() {
    // 내가 작성한 코드
    var myBag = [
        { name: "이어폰 🎧", count : 2 },
        { name: "립밤 💄", count : 1},
        { name: "이클립스 🍬", count : 1 },
        { name: "지갑 💳", count : 1}
    ];
    
    var resultText = "";

    for (var i = 0; i < myBag.length; i++) {
        resultText += "- " + myBag[i].name + " : " + myBag[i].count + "개\n";
    }


    alert(
        "🎒 [내 가방 속 물품 목록]\n" + 
        "-------------------------\n" + resultText +
        "-------------------------\n총 물품 종류: " + myBag.length + "가지"
    )
    
    // 교수님께서 제공해주신 코드드 => 가독성이 훨씬 좋고, alert 때 깔끔하게 resultText만으로 불러오는 것이 좋아보인다.
    // // 2. 출력할 텍스트 기본 세팅
    // var resultText = "🎒 [내 가방 속 물품 목록]\n-----------------------\n";

    // // 3. ★ for...in 루프 활용
    // // myBag 배열의 인덱스(0, 1, 2...)를 순서대로 변수 i에 자동으로 넣어줍니다.
    // for (var i in myBag) {
    //     // i가 알아서 방 번호가 되므로 기존과 동일하게 접근 가능합니다.
    //     resultText = resultText + "- " + myBag[i].name + " : " + myBag[i].count + "개\n";
    // }

    // resultText = resultText + "-----------------------\n";
    // resultText = resultText + "총 물품 종류: " + myBag.length + "가지";

    // // 4. 알림창 출력
    // alert(resultText);
}

// var vs const
// var => 재할당 가능, 중복 선언 가능, 함수 단위 범위
// const => 재할당 불가능, 중복 선언 불가능, 블록 단위 범위( {} )

// var는 함수 내부에서 지역 변수로 인정되며 if나 for문 블록 밖에서도 접근할 수 있음.
// const는 코드 블록 {} 안에서만 유효하므로 블록이 끝나면 사라져 변수 관리가 훨씬 안전함.