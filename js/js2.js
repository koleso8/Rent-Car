const array = [3, 2, 1, 4, 1, 6, 3, 5];

function waterPull(array) {
  let totalPull = 0;
  const newArray = [...array];
  let max = newArray.indexOf(Math.max(...newArray));
  let max2 = newArray.lastIndexOf(Math.max(...newArray));
  console.log(max);
  console.log(max2);
  console.log(!!newArray);
}

waterPull(array)