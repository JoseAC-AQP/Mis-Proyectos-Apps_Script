/**
 * Servidor principal de la aplicación Google Apps Script
 */

function doGet(e) {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Metrología e Interpretación de Tolerancias ISO 3D')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Función auxiliar para incluir fragmentos HTML/JS/CSS dentro de la plantilla principal (Index.html)
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
