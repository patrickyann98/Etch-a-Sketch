function generateGrid(size) {
  const container = document.querySelector(".container");

  container.innerHTML = "";

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "aqua";
    });

    container.append(square);
  }
}
let numberSquare = 16;

const btn1 = document.querySelector(".button1");

btn1.addEventListener("click", () => {

  numberSquare = Number(
    prompt("How many squares do you want on each side?")
  );

  if (!numberSquare || numberSquare < 1) return;

  if (numberSquare > 100) {
    numberSquare = 100;
  }

  generateGrid(numberSquare);
});

const btn2 = document.querySelector(".button2");

btn2.addEventListener("click", () => {
  location.reload();
});

generateGrid(numberSquare);