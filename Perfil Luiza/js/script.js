const toggleTheme = document.getElementById("toggleTheme"); /* chama o elemento toggleTheme */
const rootHtml = document.documentElement;

// função para alterar o tema

function changeTheme () {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
// fim da função de mudar tema