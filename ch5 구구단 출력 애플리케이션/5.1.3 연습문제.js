const num1 = prompt("첫번째 숫자 입력:");
const num2 = prompt("두번째 숫자 입력:");

if (isNaN(num1) || isNaN(num2) || num1 == "" || num2 == "") {
  document.write("숫자를 입력해주세요");
} else {
  document.write(parseInt(num1) + parseInt(num2));
}
