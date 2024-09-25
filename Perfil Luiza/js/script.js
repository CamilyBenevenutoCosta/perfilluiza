// Mudança de tema de dark para light
const toggleTheme = document.getElementById("toggleTheme"); /* chama o elemento toggleTheme */
const rootHtml = document.documentElement;

// Accordion

const accordionHeaders = document.querySelectorAll(".accordion-header");  // o querySelectorAll pega todos os accordion-header do documento (por isso "seletor de tudo")
const menuLinks = document.querySelectorAll(".menu-link"); // o mesmo nesse,o querySelectorAll seleciona todos os menu-link do documento


// Função para Alterar o Tema

function changeTheme () {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
// Fim da Função de Mudar Tema

// Função Click da área Accordion(abre e fecha do curso)
// forEach = para cada
accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active"); // adiciona e remove o active do accordion-item
    })
})

// Fim Função Click da área Accordion(abre e fecha do curso)