# Sorting - Bucket Sort

#### Prompt

Given an unsorted array of numbers which are randomly distributed
across the a range, sort the numbers using bucket sort.

Input:     
- {Array} - floats
- {Float} - minimum of range (inclusive)
- {Float} - maximum of range (exclusive)

Output:    
- {Array}

#### Examples

Input: [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434], 0.0, 1.0

Output: [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897]

#### Constraints

Time Complexity: O(Nlog(N))  
Space Complexity: O(N)  

#### Notes

How does the number of buckets we choose affect the runtime
and/or auxiliary space usage of our function?

[Wikipedia](https://en.wikipedia.org/wiki/Bucket_sort)

#### Solution

```javascript
function bucketsort(arr, min, max) {
  if (arr.length < 50){
    return arr.sort((a, b) => {return a - b;});
  }

  const numberOfBuckets = Math.ceil(Math.sqrt(arr.length));
  const bucketRange = (max - min) / numberOfBuckets;
  let buckets = [];
  let bucketIndex;
  let result = [];

  for (let i = 0; i < numberOfBuckets; i++) {
    buckets.push([]);
  }

  for (let i = 0; i < arr.length; i++) {
    bucketIndex = Math.floor((arr[i] - min) / bucketRange);
    buckets[bucketIndex].push(arr[i]);
  }

  for (let i = 0; i < buckets.length; i++) {
    result.push(...bucketsort(buckets[i], i * bucketRange, i * bucketRange + bucketRange));
  }

  return result;
}
```
