// # Jigsaw Puzzle

// Design a jigsaw puzzle with `N` by`M` pieces.

// # Clarifying Questions

// #### Is there a limit to how many pieces there can be ?

//     For the sake of scalability, limit the puzzle to be a max of 100, 000 pieces

// #### Does each piece connect to up to 4 specific other pieces ?

//     Yes interior pieces connect to 4 surrounding pieces.Sides and corners pieces connect to 2.

// #### Is there an image that we should account for?

//     Yes for image.

// #### What about 3D jigsaw puzzles ?

//     No for 3D.

// #### Is this a timed game ?

//     No

// #### Is there a persistent score ?

//     No

// # Objects
//     * These are given for you: `Board` class, `Piece` class.
// * What other objects do you need if any ?

// # Interviewer Checklist
//     * a) Does the interviewee clarify the questions to get a good understanding of user requirements ?

// * b) Does the interviewee demonstrate the composition of each object i.e, what owns what ?

// * c) Does the interviewee demonstrate inheritance hierarchy if applicable ?

// * d) Does the interviewee detail the minimum properties(data) and methods(actions) of these objects to allow the user requirements to be met ?

// * e) Do the objects ensure encapsulation of data leading to a good interface for methods and restricting unnecessary access to data ?

// # Specific Follow Up Questions
//     * a) How do you check whether a piece fits with another piece ?

// * b) How can you ensure that multiple groups of pieces can be worked on simultaneously ?

// * c) How does a user reset the game ?

// * d) How would you account for multiplayer, where players can collaborate ?

// # Preliminary Solution

// Here is the beginning of a solution.There's definitely much more than can be
// built on top of the code here:

class Piece {
  constructor(northID, southID, eastID, westID) {
    this.northID = northID;
    this.southID = southID;
    this.eastID = eastID;
    this.westID = westID;
    this.northMatch = false;
    this.southMatch = false;
    this.eastMatch = false;
    this.westMatch = false;
    this.requiredMatches = 0;

    if (this.northID !== null) {
      this.requiredMatches++;
    }
    if (this.southID !== null) {
      this.requiredMatches++;
    }
    if (this.eastID !== null) {
      this.requiredMatches++;
    }
    if (this.westID !== null) {
      this.requiredMatches++;
    }
  }

  verifyID(direction, checkID) {
    if (this[`${direction} ID`] === checkID) {
      this[`${direction} Match`] = true;
      return true;
    } else {
      return false;
    }
  }

  pieceComplete() {
    let matches = 0;
    if (northMatch) {
      matches++;
    }
    if (southMatch) {
      matches++;
    }
    if (eastMatch) {
      matches++;
    }
    if (westMatch) {
      matches++;
    }
    return matches === this.requiredMatches;
  }
}

class Jigsaw {
  constructor(N, M) {
    this.storage = [];
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        let northID = y - 0.5 > 0 ? y - 0.5 + "_" + x : null;
        let southID = y + 0.5 < N - 1 ? y + 0.5 + "_" + x : null;
        let eastID = x + 0.5 < M - 1 ? x + 0.5 + "_" + y : null;
        let westID = x - 0.5 > 0 ? x - 0.5 + "_" + y : null;
        this.storage.push(new Piece(northID, southID, eastID, westID));
      }
    }
  }

  getPieces() {
    return this.storage;
  }

  verifyHorizontal(left, right) {
    if (
      left.eastID !== null &&
      right.westID !== null &&
      left.eastID === right.westID
    ) {
      left.eastMatch = true;
      right.westMatch = true;
      return true;
    } else {
      return false;
    }
  }

  verifyVertical(above, below) {
    if (
      above.southID !== null &&
      below.northID !== null &&
      above.southID === below.northID
    ) {
      above.southMatch = true;
      below.northMatch = true;
      return true;
    } else {
      return false;
    }
  }
}
