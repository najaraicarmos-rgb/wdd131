document.addEventListener("DOMContentLoaded", () => {
  const currentYearSpan = document.getElementById("currentyear");
  const lastModifiedP = document.getElementById("lastModified");

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  if (lastModifiedP) {
    lastModifiedP.textContent = `Última Modificação: ${document.lastModified}`;
  }

  const tempElement = document.getElementById("temp");
  const windElement = document.getElementById("wind");
  const chillElement = document.getElementById("chill");

  const temp = parseFloat(tempElement.textContent);
  const wind = parseFloat(windElement.textContent);

  const calcularSensacaoTermica = (t, v) => 
    13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));

  if (temp <= 10 && wind > 4.8) {
    const chill = calcularSensacaoTermica(temp, wind);
    chillElement.textContent = `${chill.toFixed(1)} °C`;
  } else {
    chillElement.textContent = "N/A";
  }
});