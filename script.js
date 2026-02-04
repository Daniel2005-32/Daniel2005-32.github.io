document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button[data-target]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const section = document.getElementById(targetId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
