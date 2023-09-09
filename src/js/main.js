import Typed from "typed.js";
import confetti from "canvas-confetti";

new Typed("#heading", {
strings: ["Heay There", "I am a Product Designer", "Front-end Dev", "An Indie Maker."],
  typeSpeed: 78,
  backSpeed: 98,
  cursorChar: "_",
  loop: true,
})

const form = document.getElementById("form");
form.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        const myCanvas = document.createElement('canvas');
        document.body.appendChild(myCanvas);
        confetti.create(myCanvas, {
            resize: true,
            useWorker: true,
        });
        confetti({
            particleCount: 1000,
            spread: 300,
        });
    myCanvas.remove();
}
        
    console.log(e.key);
})