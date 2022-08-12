
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  // console.log(matrix);
  let mas = [];

  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (i % 2 == 0) {
        // mas.push(matrix[i].sort((a, b) => { return (+a) - (+b) }));
        mas.push([...(matrix[i].sort((a, b) => { return (+a) - (+b) }))]);
        break;
      } else {
        // mas.push(matrix[i].sort((a, b) => { return (+b) - (+a) }));
        mas.push([...(matrix[i].sort((a, b) => { return (+b) - (+a) }))]);
        break;
      }
    }

  }
  // mas = mas.sort((a, b) => { return (+a) - (+b) });
  console.log(mas.flat(Infinity));
  return mas.flat(Infinity);
}



// towelSort([[1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 10, 11, 12],
// [13, 14, 15, 16]
// ]);

// [
//   [ 1, 2, 3, 4 ],
//   [ 5, 6, 7, 8 ],
//   [ 9, 10, 11, 12 ],
//   [ 13, 14, 15, 16 ]
// ]

// [ [ 1, 2, 4 ], [ 5, 6, 7, 8 ], [ 9, 12 ] ]
