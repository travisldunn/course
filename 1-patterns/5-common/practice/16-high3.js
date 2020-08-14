let nums = [72, 12, 4, 3, 6, 9, 5, 11, 13, 44, 14, 3, 2, 6, -134, -98];
// let nums = [1, 10, -5, 1, -100];

console.log(high3(nums));

function high3(nums) {
  if (nums.length < 3) throw new Error("less than three");

  let high = Math.max(nums[0], nums[1]);
  let min = Math.min(nums[0], nums[1]);

  let highTwo = nums[0] * nums[1];
  let minTwo = nums[0] * nums[1];

  let highThree = nums[0] * nums[1] * nums[3];
  let current;

  for (let i = 2; i < nums.length; i++) {
    current = nums[i];

    highThree = Math.max(highThree, minTwo * current, highTwo * current);

    highTwo = Math.max(high * current, highTwo, min * current);

    minTwo = Math.min(min * current, minTwo, high * current);

    high = Math.max(high, current);

    min = Math.min(min, current);
  }

  return highThree;
}

function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error("Less than 3 items!");
  }

  // We're going to start at the 3rd item (at index 2)
  // So pre-populate highests and lowests based on the first 2 items
  // We could also start these as null and check below if they're set
  // but this is arguably cleaner
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

  // Except this one--we pre-populate it for the first *3* items
  // This means in our first pass it'll check against itself, which is fine
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  // Walk through items, starting at index 2
  for (let i = 2; i < arrayOfInts.length; i++) {
    const current = arrayOfInts[i];

    // Do we have a new highest product of 3?
    // It's either the current highest
    // or the current times the highest product of two
    // or the current times the lowest product of two
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );

    // Do we have a new highest product of two?
    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );

    // Do we have a new lowest product of two?
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

    // Do we have a new highest?
    highest = Math.max(highest, current);

    // Do we have a new lowest?
    lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
}
