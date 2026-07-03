const anoAtualSpan = document.getElementById('anoatual');
anoAtualSpan.textContent = new Date().getFullYear();
document.getElementById("ultimaModificacao").textContent = `Última modificação: ${document.lastModified}`;