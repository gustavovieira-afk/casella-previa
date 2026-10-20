/* Marca d'água de Gustavo Vieira: selo no canto + bloqueio de salvar/arrastar imagens (prévia de proposta). */
(function () {
  var selo = document.createElement("div");
  selo.className = "selo-autor";
  selo.innerHTML = "Proposta de <b>Gustavo Vieira</b> · confidencial";
  document.body.appendChild(selo);
  document.addEventListener("contextmenu", function (e) { if (e.target.closest("img, .foto")) e.preventDefault(); });
  document.addEventListener("dragstart", function (e) { if (e.target.tagName === "IMG") e.preventDefault(); });
})();
