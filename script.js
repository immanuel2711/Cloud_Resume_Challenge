// Optional feature: Add dark mode
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "🌙 Toggle Dark Mode";
  btn.style.position = "fixed";
  btn.style.top = "20px";
  btn.style.right = "20px";
  btn.style.padding = "10px";
  btn.style.zIndex = "1000";
  document.body.appendChild(btn);

  btn.onclick = () => {
    document.body.classList.toggle("dark");
  };
});

