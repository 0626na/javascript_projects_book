const excuteBtn = document.querySelector("#AddList");
const currentDo = document.getElementById("currentList");
const list = document.querySelector("#list");
const childrenList = list.getElementsByTagName("li");

function AddList() {
  const newList = document.createElement("li");
  const text = document.createTextNode(prompt("새 할일"));
  newList.appendChild(text);
  list.insertBefore(newList, list.firstChild);
  newList.addEventListener("click", showCurrentDO);
}

function showCurrentDO() {
  for (let i = 0; i < childrenList.length; i++) {
    childrenList[i].removeAttribute("class");
  }
  currentDo.innerHTML = this.innerText;
  this.setAttribute("class", "active");
}

excuteBtn.addEventListener("click", AddList);
for (let i = 0; i < childrenList.length; i++) {
  childrenList[i].addEventListener("click", showCurrentDO);
}
