const btns = document.querySelectorAll(".btn-class");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.background = "hsl(75, 94%, 57%)";
    btn.style.color = "hsl(0, 0%, 12%)";
  });
});
