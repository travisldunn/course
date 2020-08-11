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

# 410 - Minimum Height Trees

Given an undirected graph with N vertices and is a tree-like (meaning there are no cycles, no disconnected vertices or disjoined sets).

If a vertex in the given graph is selected as a root node of a tree, there is an associated height. (The height of a tree is defined as the largest number of nodes in the path from the root to a leaf)

Find the values of vertices, where the associated tree’s height would be a minimum height. If there are ties for minimum, height, return all the values.

There are `N` vertices, and vertices have values ranging from `0` to `N-1`

```
Input:   Integer N denoting number of vertices
	     Array of Two-Item Integers representing edges

Output: Array of Integers representing vertices with minimum height

```

# Example
```
Input: N = 4, edges = [[0, 3], [1, 3], [2,3]]
Output: [3] (because vertex 3 at the root has a minimum height of 2)
```


![MinHeight1](http://res.cloudinary.com/outco-io/image/upload/v1520906391/MinHeight1.png)

`Height = 3`


![MinHeight2](http://res.cloudinary.com/outco-io/image/upload/v1520906391/MinHeight2.png)

`Height = 3`


![MinHeight3](http://res.cloudinary.com/outco-io/image/upload/v1520906391/MinHeight3.png)

`Height = 3`     


![MinHeight4](http://res.cloudinary.com/outco-io/image/upload/v1520906391/MinHeight4.png)

`Height = 2`

```
Input: N = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]
Output: [3, 4]

```

![MinHeight5](http://res.cloudinary.com/outco-io/image/upload/v1520906391/MinHeight5.png)

`Height = 3`

# Constraints

```
Time Complexity: O(V+E)
Auxiliary Space Complexity: O(V+E)
```

`V` is the number of vertices

`E` is the number of edges

# Solution

* 1) Create an adjacency list

```

adjacency list matrix representation
{
  0: [3],
  1: [3],
  2: [3],
  3: [0,1,2,4],
  4: [3,5],
  5: [4]
}
```

* 2) Create a list of degrees for each vertex

```
listOfDegrees = [1,1,1,4,2,1]
```

* 3) Locate all the leaves (degrees equals one) and add to a ‘leaves’ list

```
leaves = [0,1,2,5]
```

* 4) For each leaf, reduce the degree of all its neighbors

```
listOfDegrees = [0,0,0,1,1,0]

{
  3: [4],
  4: [3]
}
```
    * If any of its neighbors is now a leaf, add that into a ‘newLeaves’
      collection replace ‘leaves’ with ‘newLeaves’ and repeat until there are
      only 1 or 2 unvisited nodes

```
newLeaves = [3, 4]
{

}
```

* 5) Return the leaves list

```
newLeaves = [3, 4]
```

# Resources

[Minimum Height Trees on Geeks for Geeks](http://www.geeksforgeeks.org/roots-tree-gives-minimum-height/)

[Minimum Height Trees on Leetcode](https://leetcode.com/problems/minimum-height-trees)

# Code


```javascript
// Javascript Solution

function minimumHeightTrees(n, edges) {  

  // instantiate an adjacency list, a list to track degrees  
  let adjacent = [];  
  let degrees = [];  
  for(let i = 0; i < n; i++) {  
    adjacent[i] = [];  
    degrees[i] = 0;  
  }  

  // build the adjacency and degree list  
  for(let i = 0, edge; i < edges.length; i++) {  
    edge = edges[i];  
    degrees[edge[0]]++;  
    degrees[edge[1]]++;  
    adjacent[edge[0]].push(edge[1]);  
    adjacent[edge[1]].push(edge[0]);  
  }  

  // push in all the current leaves (degree equals one)  
  let leaves = [];  
  let newLeaves;  
  for(let i = 0; i < n; i++) {  
    if(degrees[i] === 1) {  
      leaves.push(i);  
    }  
  }  

  // while there remains at least two unvisited vertices, traverse inward  
  // starting from the leaves.  
  while(n > 2){  
    // collect any new leaves that form from moving inward  
    newLeaves = [];  
    n -= leaves.length;  

    // loop through all the neighbors of each leaf and reduce degrees inward  
    for(let i = 0; i < leaves.length; i++) {  
      let leaf = leaves[i];  
      degrees[leaf]--;  

      for(let j = 0; j < adjacent[leaf].length; j++) {  
        let neighbor = adjacent[leaf][j];  




        // reduce the degree from the neighbor and if it becomes a leaf  
        // add as a new leaf  

degrees[neighbor]--;  
        if(degrees[neighbor] === 1) {  
          newLeaves.push(neighbor);  
        }  
      }  
    }  
    // reset leaves to all the new leaves  
    leaves = newLeaves;  
  }  

  //the final leaf would have either 1 or 2 items  
  return leaves;  

  ```
