let hometown = [
  { name: "지우", place: "일산", city: "고양" },
  { name: "현진", place: "과천" },
  { name: "호진", place: "진주", city: "경상도" },
  { name: "민기", place: "부산", city: "경상도" },
];

for (let i = 0; i < hometown.length; i++) {
  let h = hometown[i];
  if (!h || !h.city) continue;

  console.log(i + "번째 실행입니다.");

  if (h.name == "민기") {
    console.log(
      h.name + "의 고향은" + " " + h.city + " " + h.place + "입니다."
    );
    break;
  }
}
