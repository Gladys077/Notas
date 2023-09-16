const colorPicker = document.getElementById("colorPicker");
const nota = document.querySelector(".nota");
const triangle = document.querySelector(".triangle");

colorPicker.addEventListener("change", () => {
    const colorElegido = colorPicker.value;

    nota.style.backgroundColor = colorElegido;
    triangle.style.borderLeftColor = colorElegido;
})

