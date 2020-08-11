// # OOP Project - Tic Tac Toe

// Prompt: "Build a working game of Tic Tac Toe from the command line."

// The goal of this problem is to challenge you to build out a working version of Tic Tac Toe that takes user input from the command line and has a way of displaying to board.

//     You'll also need to know how to take input and output from the command line in your particular language. So you'll want to start there and get a working demo for that and then build your solution around it.If you've never done that before, a good place to start is by looking at how Hackerrank does it.

// This problem was originally given on a tech screen where it was meant to be solved in 40 minutes.

// So far, the earliest an Outcoder got a working solution for this problem was 7: 40pm, starting at 6pm.Think you can do better ? (Done in Ruby)

// If you do finish early, spend some time doing any necessary code cleanup, and then try writing a game of Battleship.

// # Objects

// These are the objects / classes you should build out:

// * `Game` class
// * `Board` class

// # Suggested Methods

// Here is a list of methods that we suggest building out, though you can choose to deviate from this list:

// * `Game` class methods:
//   * `play()`: begins a new game.
//   * `playRound(row, col)`: executes a single round of the game by placing a piece at the position of`row`, `col`.
//   * `printCurrentPlayersTurn()`: prints who's turn it is.
//     * `decrementRounds()`: reduces the number of rounds remaining.
//   * `delcareWinner(player)`: declares the given player as the winner.
//   * `declareTie()`: declares a tie.
//   * `printInvalidMove()`: declares a move invalid.
//   * `printCurrentMove(row, col)`: prints the move just made.
//   * `switchPlayer()`: changes current player.

// * `Board` class methods:
//   * `printBoard()`: prints out the current state of the board.
//   * `canPlacePiece(row, col)`: determines whether a given move is valid.
//   * `placePiece(row, col, player)`: places a piece on the board for a given player.
//   * `checkWinCondition(player)`: checks if the given player has won.
//   * `checkDiagonals(player)`: checks if the given player has 3 pieces on either diagonal.
//   * `checkRows(player)`: checks if the given player has 3 pieces on any of the rows.
//   * `checkColumns(player)`: checks if the given player has 3 pieces on any of the columns.

// # User Stories

// Users should be able to place a piece on the board.

// Users should be able to see the board after making a move.

// Users should be told who the current player is at any given time(X or O).

// Users should be told who the winner is.

// Users should be told when they make an invalid move.

// The game should end after a win, loss or tie.

// # General Approach

// Don't start by trying to figure out what classes should exist where and what they should do.

// Think about the whole system, and the ** event ** that take place.

// Think of the ** life - cycle ** of playing one round of Tic Tac Toe.

// Diagram out an example game, and list out ** EXACTLY WHAT HAPPENS **.Be as granular as possible.

// For example:

// ```

// Start a New Game.
// Display the Empty Board.
// Announce current player is X.
// Prompt user to place a piece.
// Display the board after piece is placed.
// Announce current player is O.
// ...

// ```

// Once you've mapped out **WHAT** needs to happen, then you can start making decisions on **HOW** it needs to happen. The **ACTIONS** you describe will likely be your **METHODS** and the **STATE** changes you describe will be your **PROPERTIES** or **VARIABLES**.

//     ** Don't** commit to a certain data structure or way of approaching the problem until you've figured out what it is you're trying to accomplish.

// The difficulty of OOP problems usually doesn't lie in the use of a complex algorithm. It has more to do with there being a LOT of simple moving parts to account for. That's where the complexity comes from.

class TicTacToe {
  constructor() {
    // Current Player starts at X
    // Number of Rounds
    // Create 3x3 board
    this.currentPlayer = "X";
    this.numberOfRounds = 9;
    this.board = new Board();
  }

  runGame() {
    process.stdout.write("Let's play Tic Tac Toe! \n\n");
    process.stdout.write("To play, input two numbers: row column \n");
    process.stdout.write("For example: 0 0 \n\n");

    this.board.printBoard();
    this.printCurrentPlayersTurn();

    process.stdin.on("data", (data) => {
      let moves = data.toString().trim().split(" ");
      let row = parseInt(moves[0]);
      let col = parseInt(moves[1]);
      process.stdout.write("\n");

      this.playRound(row, col);
    });
  }

  playRound(row, col) {
    if (this.board.canPlacePiece(row, col)) {
      this.board.placePiece(row, col, this.currentPlayer);

      this.board.printBoard();

      this.printCurrentMove(row, col);

      let detectWinner = this.board.checkWinCondtion(this.currentPlayer);

      if (detectWinner) {
        this.declareWinner(this.currentPlayer);
      }

      this.decrementRounds();

      if (!detectWinner && this.numberOfRounds <= 0) {
        this.declareTie();
      }
      this.switchPlayer();

      this.printCurrentPlayersTurn();
    } else {
      this.printInvalidMove();
    }
  }

  printCurrentPlayersTurn() {
    process.stdout.write(`It's ${this.currentPlayer}'s turn \n\n`);
  }

  decrementRounds() {
    this.numberOfRounds -= 1;
  }

  declareWinner(player) {
    process.stdout.write(`\n${player} is the winner! \n`);
    process.exit();
  }

  declareTie() {
    process.stdout.write(`\nCat's game!\n`);
    process.exit();
  }

  printInvalidMove() {
    process.stdout.write(`Invalid Move, ${this.currentPlayer} goes again \n\n`);
  }

  printCurrentMove(row, col) {
    process.stdout.write(
      `An ${this.currentPlayer} was placed at row ${row}, column ${col} \n\n`
    );
  }

  switchPlayer() {
    if (this.currentPlayer === "X") {
      this.currentPlayer = "O";
    } else {
      this.currentPlayer = "X";
    }
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
        process.stdout.write(`|${square}`);
      });
      process.stdout.write("|");
      process.stdout.write("\n");
      process.stdout.write("  - - -\n");
    });
    process.stdout.write("\n");
  }

  canPlacePiece(row, col) {
    if (
      isNaN(row) ||
      isNaN(col) ||
      row > 2 ||
      row < 0 ||
      col > 2 ||
      col < 0 ||
      this.storage[row][col] === "X" ||
      this.storage[row][col] === "O"
    ) {
      return false;
    }
    return true;
  }

  placePiece(row, col, player) {
    this.storage[row][col] = player;
  }

  checkWinCondtion(player) {
    if (
      this.checkRows(player) ||
      this.checkColumns(player) ||
      this.checkDiagonals(player)
    ) {
      return true;
    }
    return false;
  }

  checkDiagonals(player) {
    if (
      this.storage[0][0] === player &&
      this.storage[1][1] === player &&
      this.storage[2][2] === player
    ) {
      return true;
    }
    if (
      this.storage[0][2] === player &&
      this.storage[1][1] === player &&
      this.storage[2][0] === player
    ) {
      return true;
    }
    return false;
  }

  checkRows(player) {
    for (let row = 0; row < this.storage.length; row++) {
      if (
        this.storage[row][0] === player &&
        this.storage[row][1] === player &&
        this.storage[row][2] === player
      ) {
        return true;
      }
    }
    return false;
  }

  checkColumns(player) {
    for (let col = 0; col < this.storage.length; col++) {
      if (
        this.storage[0][col] === player &&
        this.storage[1][col] === player &&
        this.storage[2][col] === player
      ) {
        return true;
      }
    }
    return false;
  }
}

// Uncomment to run game:

// let game = new TicTacToe();
// game.runGame();
