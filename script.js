let allButtons = document.querySelectorAll(".list li button");
let main = document.querySelector(".main");

let date = new Date();
// let timer=0;

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let myValue = parseInt(button.dataset.btnValue);
    let sec = date.getSeconds();
    let divTimer = document.createElement("div"); // 19:1
    divTimer.classList.add("timer");
    main.appendChild(divTimer);

    let stop = setInterval(() => {
      if (myValue >= 0) {
        divTimer.innerHTML = `00:${myValue}`;
        myValue--;
        console.log(myValue);
      } else {
        clearInterval(stop);
      }
    }, 1000);
  });
});
