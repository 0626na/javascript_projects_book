const multiplicationNumber = prompt(
  "구구단 몇단을 볼까요?",
  "1~9의 숫자를 입력"
);
const body = document.body;
let div = "";
let result = "";

if (isNaN(multiplicationNumber) || multiplicationNumber === "") {
  result = `숫자를 입력해주세요`;
} else if (multiplicationNumber < 1 || multiplicationNumber > 9) {
  result = `1에서 9사이의 숫자를 입력해주세요`;
} else {
  for (let i = 1; i <= 9; i++) {
    result += `${multiplicationNumber} * ${i} = ${
      multiplicationNumber * i
    } <br>`;
  }
}

div = `<div>
    ${result}
</div>`;

body.innerHTML = div;
