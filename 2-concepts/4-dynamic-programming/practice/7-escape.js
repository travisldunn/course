/*
 *  Dungeon Escape (Tabulation)
 *
 *  Given a matrix of integers that represents rooms in a dungeon,
 *  determine the minimum amount of health a adventurer must start with
 *  in order to escape the dungeon
 *
 *  The adventurer starts at the upper left corner of the matrix, and
 *  the exit is located at the bottom right corner.
 *
 *  The adventurer must leave the dungeon before sundown, so in the
 *  interest of time, this brave adventurer decides to only travel
 *  downwards and to the right
 *
 *  Negative integers represent rooms with monsters, so the adventurer
 *  would lose health when going though these rooms. 0s represent empty
 *  rooms, and positive integers represent rooms that contain health
 *  pots that will increase the adventurer's health
 *
 *
 *  Input:  dungeon {Integer[][]}
 *  Output: {Integer}
 *
 *
 * Example:
 *  Input:  [[ -2, -5, 10],
 *           [ -3,-10, 30],
 *           [  3,  1, -5]]
 *
 *  Output: 7 (The steps to do this would be down, down, right, right)
 *
 *
 *    Note: The initial health should be represented by a positve integers
 *          If the health ever drops to zero or a negative integer, the
 *          adventurer dies.
 *          Every room will contain an integer. It will either be empty (0),
 *          contain a monster (negative), or contain a health pot (positive).
 *          You could create every single possible path, but there is of course
 *          a dynamic programming approach to not go with this route.
 *
 */

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)

function escape(dungeon) {
  const yBound = dungeon.length;
  const xBound = dungeon[0].length;

  // bottom right corner
  dungeon[yBound - 1][xBound - 1] = Math.max(
    1 - dungeon[yBound - 1][xBound - 1],
    1
  );

  // bottom row
  for (let x = xBound - 2; x > -1; x--) {
    dungeon[yBound - 1][x] = Math.max(
      dungeon[yBound - 1][x + 1] - dungeon[yBound - 1][x],
      1
    );
  }

  // right column
  for (let y = yBound - 2; y > -1; y--) {
    dungeon[y][xBound - 1] = Math.max(
      dungeon[y + 1][xBound - 1] - dungeon[y][xBound - 1],
      1
    );
  }

  // remainder of dungeon
  for (let y = yBound - 2; y > -1; y--) {
    for (let x = xBound - 2; x > -1; x--) {
      let fromRight = Math.max(dungeon[y][x + 1] - dungeon[y][x], 1);
      let fromBelow = Math.max(dungeon[y + 1][x] - dungeon[y][x], 1);
      dungeon[y][x] = Math.min(fromRight, fromBelow);
    }
  }

  return dungeon[0][0];
}
