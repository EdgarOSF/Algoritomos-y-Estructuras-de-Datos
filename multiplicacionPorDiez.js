const times10 = function (n) {
  return n * 10;
};
//   const cache = {};
//   const saveInMemory = function(n) {
//     if (n in cache) {
//       console.log('Fetching from cache: ', n);
//       return cache[n];
//     } else {
//       console.log('Calculating result');
//       let result = times10(n); //90
//       cache[n] = result;
//       return result;
//     }
//   };
//   console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
//   console.log('Task 2 calculated value: ', saveInMemory(9)); // calculated
//   console.log('Task 2 cached value: ', saveInMemory(9)); // cached

// Solucion con Closure
const memoizedClosure = () => {
  const cache = {};
  return (valor) => {
    if (valor in cache) {
      console.log(`Fetching from cache: ${valor}`);
      return cache[valor];
    } else {
      console.log('Calculating result...');
      const valorPor10 = times10(valor);
      cache[valor] = valorPor10;
      return valorPor10;
    }
  };
};

const memoClosureTimes10 = memoizedClosure();
console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value: ', memoClosureTimes10(9)); // calculated
console.log('Task 2 cached value: ', memoClosureTimes10(9)); // cached
