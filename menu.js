var dscc = require("dscc");

function drawViz(data) {
  document.body.innerHTML = `
    <div style="font-family: Arial; width: 350px;">
      <div style="background:#0073e6; color:white; padding:10px; border-radius:8px; margin-bottom:15px;">
        <b>SIGERSOL MUNICIPAL</b>
      </div>
      <div style="background:#f1f1f1; padding:10px; border-radius:8px; margin:6px 0; cursor:pointer;">
        🏠 Reportes de ciclo de vida
      </div>
      <div style="background:#f1f1f1; padding:10px; border-radius:8px; margin:6px 0; cursor:pointer;">
        📊 Resumen de Reportes Anuales
      </div>
      <div style="background:#f1f1f1; padding:10px; border-radius:8px; margin:6px 0; cursor:pointer;">
        📂 Documentos INAF-OEFA
      </div>
    </div>
  `;
}

dscc.subscribeToData(drawViz, {transform: dscc.tableTransform});
