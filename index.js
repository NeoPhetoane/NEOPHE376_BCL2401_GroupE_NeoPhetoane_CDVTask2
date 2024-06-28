let chessBoard = "";

// Loops through the rows
for (let row = 0; row < 8; row++) {
  // Create a new row array
  chessBoard[row] = [];
  // Loop through the columns
  for (let col = 0; col < 8; col++) {

    if ((row + col) % 2 === 0) { chessBoard += " ";
} else {
    chessBoard += "#";
}
}
chessBoard += "\n";
}
// Print the chess board
    console.log(chessBoard);
