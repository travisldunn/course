let meetings = [
  { startTime: 4, endTime: 8 },
  { startTime: 3, endTime: 5 },
  { startTime: 0, endTime: 1 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];

mergeRanges = (meetings) => {
  meetings.sort((a, b) => {
    return a.startTime - b.startTime;
  });
  const cond = [];
  let current = { ...meetings[0] };

  for (let i = 1; i < meetings.length; i++) {
    if (meetings[i].startTime <= current.endTime) {
      if (meetings[i].endTime > current.endTime) {
        current.endTime = meetings[i].endTime;
      }
    } else {
      cond.push(current);
      current = { ...meetings[i] };
    }
    current;
  }
  cond.push(current);

  return cond;
};

console.log(mergeRanges(meetings));

// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ];
