function showMyBag() {
    const myBag = [
        { name: "이어폰 🎧", count : 2 },
        { name: "립밤 💄", count : 1},
        { name: "이클립스 🍬", count : 1 },
        { name: "지갑 💳", count : 1}
    ];
    
    var result = "";

    for (var i = 0; i < myBag.length; i++) {
        result += "- " + myBag[i].name + " : " + myBag[i].count + "개\n";
    }


    alert(
        "🎒 [내 가방 속 물품 목록]\n" + 
        "-------------------------\n" + result +
        "-------------------------\n총 물품 종류: " + myBag.length + "가지"
    )
    
}