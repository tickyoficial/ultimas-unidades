
// --- Lógica independente para seleção de planos ---
document.addEventListener("DOMContentLoaded", () => {
  const planos = document.querySelectorAll("div.relative.border-2.rounded-lg.cursor-pointer");
  const botao = document.querySelector("a.bg-blue-600");
  const textoExtra = botao ? botao.querySelector("div.text-xs") : null;

  planos.forEach(plano => {
    plano.addEventListener("click", () => {
      // Resetar estilos de seleção
      planos.forEach(p => p.classList.remove("border-blue-500", "bg-blue-50", "shadow-lg"));
      plano.classList.add("border-blue-500", "bg-blue-50", "shadow-lg");

      // Capturar dados
      const titulo = plano.querySelector(".font-bold.text-gray-900")?.innerText || "";
      const preco = plano.querySelector(".text-lg.font-bold.text-gray-900")?.innerText || "";

      // Atualizar texto no botão
      if (textoExtra && titulo && preco) {
        textoExtra.textContent = `${titulo} por ${preco}`;
      }

      // Atualizar link (se houver data-link no plano)
      const link = plano.getAttribute("data-link");
      if (link) {
        botao.setAttribute("href", link);
      }
    });
  });
});
