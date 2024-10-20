function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); 
  const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);
}

function draw() {
  background("white"); 
  stroke("black"); 
  strokeWeight(3); 

  let lineLength = 38; 
  let padding = 30; 
  let distance = 12; // Spazio tra i quadrati (orizzontale e verticale)
  let squareSize = 38; 
  // Definisco altezza come somma della dimensione del quadrato e lo spazio verticale
  let altezza = squareSize + distance;  

  // Calcolo dinamico del numero di colonne e righe basato sulle dimensioni della finestra
  let usableWidth = windowWidth - padding; 
  let usableHeight = windowHeight - padding; // Altezza utilizzabile (padding inferiore escluso)
  
  let columns = Math.floor(usableWidth / (squareSize + distance)); 
  let rows = Math.floor(usableHeight / altezza); 

  // Posizione di inizio griglia considerando padding 
  let startX = padding; 
  let startY = padding;

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
      // Ci sono più linee perpendicolari che linee parallele 
      if (option < 0.20) { // Lato sinistro e lato superiore
        line(xPos, yPos, xPos, yPos + lineLength); 
        line(xPos, yPos, xPos + lineLength, yPos); 
      } else if (option < 0.40) { // Lato sinistro e lato inferiore
        line(xPos, yPos + squareSize, xPos, yPos + squareSize - lineLength); 
        line(xPos, yPos + squareSize, xPos + lineLength, yPos + squareSize); 
      } else if (option < 0.60) { // Lato destro e lato superiore
        line(xPos + squareSize, yPos, xPos + squareSize, yPos + lineLength); 
        line(xPos + squareSize - lineLength, yPos, xPos + squareSize, yPos); 
      } else if (option < 0.80) { // Lato destro e lato inferiore
        line(xPos + squareSize, yPos + squareSize, xPos + squareSize, yPos + squareSize - lineLength); 
        line(xPos + squareSize - lineLength, yPos + squareSize, xPos + squareSize, yPos + squareSize); 
      } else if (option < 0.90) { // Lato superiore e lato inferiore
        line(xPos, yPos, xPos + squareSize, yPos);
        line(xPos, yPos + squareSize, xPos + squareSize, yPos + squareSize); 
      } else { // Lato sinistro e lato destro
        line(xPos, yPos, xPos, yPos + squareSize); 
        line(xPos + squareSize, yPos, xPos + squareSize, yPos + squareSize); 
      }
    }
  }
}
