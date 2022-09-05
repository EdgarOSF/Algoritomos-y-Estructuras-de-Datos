// O(n) - Lineal
const isUnique = (array) => {
  const breadcums = {};
  let result = true;
  for (let i = 0; i < array.length; i++) {
    console.log(`~~~~ LOOP ~~~~ i === ${i}`);
    if (breadcums[array[i]]) {
      result = false;
    } else {
      breadcums[array[i]] = true;
    }
  }
  return result;
};

console.log(isUnique([0, 1, 2, 3, 4]) === true);


// Version ineficiente
// const isUnique = function(arr) {
//     let result = true;
//     for (let i = 0; i < (arr).length; i++) {
//       console.log(`~~~~ OUTER LOOP ~~~~ i === ${i}`);
//       for (let j = 0; j < (arr).length; j++) {
//         console.log(`~~~~ INNER LOOP ~~~~ j === ${j}`);
//         if (i !== j && (arr)[i] === (arr)[j]) {
//           result = false;
//         }
//       }
//     }
//     return result;
//   };
