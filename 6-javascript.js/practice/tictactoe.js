// Build a working game of Tic Tac Toe
// from the command line.

// This problem was originally given on a tech screen where
// it was meant to be solved in 40 minutes.

// These are the objects / classes you should build out:

// * `Game` class
// * `Board` class

// # Suggested Methods

// Here is a list of methods that we suggest building out,
// though you can choose to deviate from this list:

// Game` class methods:
// play()`: begins a new game.
// playRound(row, col)`: executes a single round of the game
//  by placing a piece at the position of`row`, `col`.
// printCurrentPlayersTurn()`: prints who's turn it is.
// decrementRounds()`: reduces the number of rounds remaining.
// delcareWinner(player)`: declares the given player as the winner.
// declareTie()`: declares a tie.
// printInvalidMove()`: declares a move invalid.
// printCurrentMove(row, col)`: prints the move just made.
// switchPlayer()`: changes current player.

// Board` class methods:
// printBoard()`: prints out the current state of the board.
// canPlacePiece(row, col)`: determines whether a given move
//  is valid.
// placePiece(row, col, player)`: places a piece on the board
//  for a given player.
// checkWinCondition(player)`: checks if the given player has won.
// checkDiagonals(player)`: checks if the given player has
//  3 pieces on either diagonal.
// checkRows(player)`: checks if the given player has 3 pieces
//  on any of the rows.
// checkColumns(player)`: checks if the given player has
//  3 pieces on any of the columns.

// # User Stories

// Users should be able to place a piece on the board.
// Users should be able to see the board after making a move.
// Users should be told who the current player is at any given time(X or O).
// Users should be told who the winner is.
// Users should be told when they make an invalid move.
// The game should end after a win, loss or tie.

// # General Approach

// Don't start by trying to figure out what classes
// should exist where and what they should do.

// Think about the whole system, and the ** event **
// that take place.

// Think of the ** life - cycle ** of playing one round
// of Tic Tac Toe.

// Diagram out an example game, and list out EXACTLY WHAT
// HAPPENS. Be as granular as possible.

// For example:

// Start a New Game.
// Display the Empty Board.
// Announce current player is X.
// Prompt user to place a piece.
// Display the board after piece is placed.
// Announce current player is O.

// Once you've mapped out **WHAT** needs to happen,
// then you can start making decisions on **HOW**
// it needs to happen. The **ACTIONS** you describe
// will likely be your **METHODS** and the **STATE**
// changes you describe will be your **PROPERTIES** or **VARIABLES**.

// **Don't** commit to a certain data structure or way of
// approaching the problem until you've figured out what
// it is you're trying to accomplish.

// The difficulty of OOP problems usually doesn't lie in
// the use of a complex algorithm. It has more to do with
// there being a LOT of simple moving parts to account for.
// That's where the complexity comes from.

class Game {
  constructor() {
    this.currentPlayer = "X";
    this.moves = 9;
    this.board = new Board();
  }
  runGame() {
    process.stdout.write("Tic Tac Toe! \n");
    process.stdout.write("To start enter your spot. example: 1, 1 \n");
    process.stdout.write(`Player ${this.currentPlayer} starts\n`);

    this.board.printBoard();

    process.stdin.on("data", (data) => {});
  }
}

class Board {
  constructor() {
    this.storage = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
  }

  printBoard() {
    process.stdout.write("  0 1 2\n");
    process.stdout.write("  _ _ _\n");
    this.storage.forEach((line, row) => {
      process.stdout.write(`${row}`);
      line.forEach((square) => {
        console.log(square, "--->");
        process.stdout.write(`|${square}`);
      });
      process.stdout.write("|");
      process.stdout.write("\n");
      process.stdout.write("  - - -\n");
    });
    process.stdout.write("\n");
  }
}

const tictactoe = new Game();

tictactoe.runGame();
