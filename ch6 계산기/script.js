const inputFrm = document.forms["cal"];
const inputBtns = document.getElementsByTagName("input");
const clearBtn = document.querySelector("#clearBtn");
const resultBtn = document.querySelector("#calculationBtn");

for (let i = 0; i < inputBtns.length; i++) {
  //숫자 버튼 이벤트처리
  if (inputBtns[i].value != "clear" && inputBtns[i].value != "=") {
    inputBtns[i].addEventListener("click", calc);
  }
}

clearBtn.addEventListener("click", clear);
resultBtn.addEventListener("click", resultCalculate);

function calc() {
  //숫자버튼 이벤트 핸들러
  if (
    inputFrm["result"].value == 0 ||
    inputFrm["result"].value == "input error"
  ) {
    inputFrm["result"].value = "";
  }
  inputFrm["result"].value += this.value;
}

function clear() {
  //입력 초기화 핸들러
  inputFrm["result"].value = 0;
}

function resultCalculate() {
  //계산 처리 핸들러
  try {
    const result = eval(inputFrm["result"].value);
    inputFrm["result"].value = result;
  } catch (error) {
    inputFrm["result"].value = "input error";
  }
}
