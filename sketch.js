function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); 
}

function draw() {
  background("white"); 
  stroke("black"); 
  strokeWeight(4); 

  let lineLength = 36; 
  let distance = 14; // Spazio tra i quadrati (orizzontale e verticale)
  let squareSize = 36; 
  let altezza = squareSize + distance;  
  let extraMargin = 10;

  // Calcolo dinamico del numero di colonne e righe basato sulle dimensioni della finestra
  let columns = Math.floor((windowWidth - extraMargin * 2) / (squareSize + distance));
  let rows = Math.floor((windowHeight - extraMargin * 2) / altezza); 

  // Calcola lo spazio extra per centrare la griglia
  let extraWidth = windowWidth - columns * (squareSize + distance);
  let extraHeight = windowHeight - rows * altezza; 

  // Offset per iniziare il disegno al centro aggiungendo il margine extra 
  let startX = extraWidth / 2 + extraMargin;
  let startY = extraHeight / 2 + extraMargin;

  // Generare griglia di quadrati vuoti
  for (let i = 0; i < columns; i++) { 
    for (let j = 0; j < rows; j++) {
      
      // xPos determina la posizione orizzontale di ciascun quadrato nella griglia
      // yPos determina la posizione verticale di ciascun quadrato
      let xPos = startX + i * (squareSize + distance);
      let yPos = startY + j * altezza;
      
      // Genero numero decimale casuale tra 0 e 1 per decidere quali lati disegnare
      let option = random(0, 1);

      // Disegno i lati del quadrato in base all'opzione generata
      // Sequenza condizionale che decide quale tipo di linee tracciare in ogni quadrato della griglia in base al valore della variabile casuale option
      if (option < 0.15) { // Lato sinistro e lato superiore
        line(xPos, yPos, xPos, yPos + lineLength); 
        line(xPos, yPos, xPos + lineLength, yPos); 
      } else if (option < 0.30) { // Lato sinistro e lato inferiore
        line(xPos, yPos + squareSize, xPos, yPos + squareSize - lineLength); 
        line(xPos, yPos + squareSize, xPos + lineLength, yPos + squareSize); 
      } else if (option < 0.45) { // Lato destro e lato superiore
        line(xPos + squareSize, yPos, xPos + squareSize, yPos + lineLength); 
        line(xPos + squareSize - lineLength, yPos, xPos + squareSize, yPos); 
      } else if (option < 0.60) { // Lato destro e lato inferiore
        line(xPos + squareSize, yPos + squareSize, xPos + squareSize, yPos + squareSize - lineLength); 
        line(xPos + squareSize - lineLength, yPos + squareSize, xPos + squareSize, yPos + squareSize); 
      } else if (option < 0.75) { // Lato superiore e lato inferiore
        line(xPos, yPos, xPos + squareSize, yPos);
        line(xPos, yPos + squareSize, xPos + squareSize, yPos + squareSize); 
      } else { // Lato sinistro e lato destro
        line(xPos, yPos, xPos, yPos + squareSize); 
        line(xPos + squareSize, yPos, xPos + squareSize, yPos + squareSize); 
      }
    }
  }
}

// Ridisegna automaticamente griglia quando finestra viene ridimensionata 
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  redraw() // Ridisegna la griglia senza richiedere il refresh manuale 
}
