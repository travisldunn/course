# Tell Me About Yourself

Should take one minute; minute and a half at most

##### Prompt

Say: "Tell me about yourself"

##### Do you hear these things?

1. Who the interviewee is (interviewee's one liner)

2. How the interviewee became who they are (short statement about why they became a software engineer with a specific story)

3. Their Pitch (why this company). This has 2 sub-parts and includes:

  - Why they are qualified - Did they share a couple
  **specific** highlights about their applicable expertise

  - Why this company - Did they share **specific** reasons
  why they are interested in the company/position
  (showcasing aligned values/mission) and how they plan to
  add value to the team, product, service, mission, etc

# 209 - Closest N Steakhouses

Given a set of `coordinates` as an array of two-element arrays containing integers, representing the location of steakhouses on a grid, and a positive integer `n`, return a list of the `n` closest steakhouses. Assume you are standing at coordinate `[0,0]`.

Closeness is determined by the minimum straight-line distance between two points.


```
Input:     coordinates: [[Integer]]
           n: Integer
Output:    [[Integer]]  
```

# Example

```javascript
closestSteakhouses([[1,-1],[3,4], [2,5],[1,2]], 2)
// => [[ 1, -1 ], [ 1, 2 ]]
```

![Closest Steakhouses Example](https://res.cloudinary.com/outco-io/image/upload/v1540861099/ClosestSteakhouses.png)

# Constraints

```

Time Complexity:  O(N Log N)
Auxiliary Space Complexity:  O(N)

```

# Solution

Compute the distance between every point and the origin using the pythagorean theorem.

Sort the list of distances, and return the first `n` of them.


# Code

```javascript
function closestSteakhouses(coordinates, numberOfHouses) {
  let distances = [];

  coordinates.forEach((coordinate, index) => {
    distances.push({coordinate, index, distance: calculateDistance(coordinate)})
  })

  distances.sort((a, b) => {
    return a.distance - b.distance;
  })

  let result = [];

  for(let i = 0; i < Math.min(numberOfHouses, coordinates.length); i++) {
    result.push(distances[i].coordinate);
  }

  return result;
}

function calculateDistance(coordinate) {
  return Math.sqrt(Math.pow(coordinate[0], 2) + Math.pow(coordinate[1], 2));
}

closestSteakhouses([[1,-1],[3,4], [2,5],[1,2]], 2)
```

# Extra Credit

How would your solution change if you were no longer standing at `[0,0]` but some arbitrary coordinate `[x, y]`?

What if instead of looking for the closest steakhouses to you, you were looking for the closest cluster of `n` steakhouses? For example, if you wanted to know what the `3` closest steakhouses were to each other, how would you solve the problem?


# Resources

[Pythagorean Theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem)
