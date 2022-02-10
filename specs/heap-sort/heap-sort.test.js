/*
  
  Create a function called heapSort that accepts an array and performs a heap sort on it in place (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
   
*/

const heapSort = (array) => {
  array = createMaxHeap(array);
  for (let i = array.length - 1; i >= 0; i--) {
    const root = array[0];
    array[0] = array[i];
    array[i] = root;
    heapify(array, 0, i);
  }
  return array;
};

const createMaxHeap = (array) => {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length)
  }
  return array;
};

const heapify = (array, index, heapSize) => {
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  let maxValIndex = index;
  if (left < heapSize && array[left] < array[maxValIndex]) {
    maxValIndex = left;
  }
  if (right < heapSize && array[right] < array[maxValIndex]) {
    maxValIndex = right;
  }
  // swap
  if (maxValIndex !== index) {
    const temp = array[index];
    array[index] = array[maxValIndex];
    array[maxValIndex] = temp;
    heapify(array, maxValIndex, heapSize)
  }
};

// unit tests
// do not modify the below code
test("heap sort", function () {
  const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
  heapSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
