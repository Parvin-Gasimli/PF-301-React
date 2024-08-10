const ColorInput = document.querySelector(".color");
ColorInput &&
  ColorInput.addEventListener("input", () => {
    document.body.style.backgroundColor = ColorInput.value;
  });
