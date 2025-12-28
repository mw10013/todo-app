document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");
  const themeToggle = document.getElementById("theme-toggle");

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const theme = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";
    localStorage.setItem("theme", theme);
  });

  addBtn.addEventListener("click", addTodo);
  todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") return;

    const li = document.createElement("li");
    li.style.opacity = "0";
    li.style.transform = "translateY(-10px)";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.addEventListener("change", function () {
      span.classList.toggle("completed");
      // Add a subtle animation when completing
      if (span.classList.contains("completed")) {
        span.style.animation = "strikeThrough 0.3s ease-out";
      } else {
        span.style.animation = "none";
      }
    });

    const span = document.createElement("span");
    span.textContent = todoText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      removeTodo(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    // Trigger animation
    requestAnimationFrame(() => {
      li.style.transition = "all 0.3s ease-out";
      li.style.opacity = "1";
      li.style.transform = "translateY(0)";
    });

    todoInput.value = "";
  }

  function removeTodo(li) {
    li.style.transition = "all 0.3s ease-in";
    li.style.opacity = "0";
    li.style.transform = "translateX(100%) scale(0.8)";

    setTimeout(() => {
      if (li.parentNode) {
        li.parentNode.removeChild(li);
      }
    }, 300);
  }
});
