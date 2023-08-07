// Código para gerar o número aleatório e outras variáveis
var quickDrawDataset = []; // Array contendo nomes de esboços

var randomNumber = Math.floor(Math.random() * quickDrawDataset.length);

var sketch = quickDrawDataset[randomNumber];
console.log(sketch);

// Inicialização das variáveis
var timerCounter = 0;
var timerCheck = "";
var drawSketch = "";
var answerHolder = "";
var score = 0;

// Atualização do texto no HTML
document.getElementById("sketchName").textContent = "Esboço a Ser Desenhado: " + sketch;
