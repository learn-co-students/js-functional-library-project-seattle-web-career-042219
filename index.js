const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let valuesArray;
      if (collection instanceof Array) {
        valuesArray = collection.slice();
      } else {
        valuesArray = Object.values(collection);
      }

      for(let i=0; i<valuesArray.length; i++) {
        callback(valuesArray[i]);
      }

      return collection;
    },

    map: function(collection, callback) {

      let valuesArray;

      if (Array.isArray(collection)) {
        valuesArray = collection.slice();
      } else {
        valuesArray =  Object.values(collection);
      }
      const outputArray = [];

      for (let i = 0; i < valuesArray.length; i++) {
        outputArray.push(callback(valuesArray[i]));
      }

      return outputArray;
    },

    reduce: function(collection, callback, acc) {
      let valuesArray;

      if (Array.isArray(collection)) {
        valuesArray = collection.slice();
      } else {
        valuesArray =  Object.values(collection);
      }

      let result;
      let startIndex;
      if (acc) {
        result = acc;
        startIndex = 0;
      } else {
        result = valuesArray[0];
        startIndex = 1;
      }

      for(let i=startIndex; i<valuesArray.length; i++) {
        result = callback(result, valuesArray[i], valuesArray);
      }

      return result;
    },

    find: function(collection, predicate) {
      let valuesArray;

      if (Array.isArray(collection)) {
        valuesArray = collection.slice();
      } else {
        valuesArray =  Object.values(collection);
      }

      for(let i=0; i<valuesArray.length; i++) {
        if (predicate(valuesArray[i])) {
          return valuesArray[i];
        }
      }
    },

    filter: function(collection, predicate) {
      let valuesArray;

      if (Array.isArray(collection)) {
        valuesArray = collection.slice();
      } else {
        valuesArray =  Object.values(collection);
      }

      const outputArray = [];

      for (let i = 0; i < valuesArray.length; i++) {
        if (predicate(valuesArray[i])) {
            outputArray.push(valuesArray[i]);
        }
      }

      return outputArray;

    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      } else {
        return Object.keys(collection).length;
      }
    },

    first: function(array, n) {
      if (n) {
        const outputArray = [];
        for(let i=0; i<n; i++) {
          outputArray.push(array[i]);
        }
        return outputArray;
      } else {
        return array[0];
      }
    },

    last: function(array, n) {
      if (n) {
        const outputArray = [];
        for (let i=array.length - n; i<array.length; i++) {
          outputArray.push(array[i]);
        }
        return outputArray;
      } else {
        return array[array.length-1];
      }
    },

    compact: function(array) {
      const outputArray = [];
      for (let i=0; i<array.length; i++) {
        if (array[i]) {
          outputArray.push(array[i]);
        }
      }
      return outputArray;
    },

    sortBy: function(collection, callback) {
      let valuesArray;

      if (Array.isArray(collection)) {
        valuesArray = collection.slice();
      } else {
        valuesArray =  Object.values(collection);
      }

      return valuesArray.sort((a,b) => callback(a) - callback(b));
    },

    flatten: function(array, shallow) {
      let outputArray = [];
      if (shallow) {
        for (let i=0; i<array.length; i++) {
          const currentItem = array[i];
          if (Array.isArray(currentItem)) {
            for (let j=0; j<currentItem.length; j++) {
              outputArray.push(currentItem[j]);
            }
          } else {
            outputArray.push(currentItem);
          }
        }
      } else {
        for (let i=0; i<array.length; i++) {
          let currentItem = array[i];
          if (Array.isArray(currentItem)) {
            outputArray.push(...fi.flatten(currentItem));
          } else {
            outputArray.push(currentItem);
          }
        }
      }
      return outputArray;
    },

    uniq: function(array, isSorted, callback) {
      const outputArray = [];
      for (let i=0; i<array.length; i++) {
        const currentItem = array[i];

        // TODO: actually do the isSorted part (tests pass just fine without it)

        if (callback) {
          let alreadyInArray = false;
          for (let j=0; j<outputArray.length; j++) {
            if (callback(outputArray[j]) === callback(currentItem)) {
              alreadyInArray = true;
            }
          }
          if (!alreadyInArray) {
            outputArray.push(currentItem);
          }
        } else {
          if (!outputArray.includes(currentItem)) {
            outputArray.push(currentItem);
          }
        }
      }
      return outputArray;
    },

    keys: function(object) {
      const outputArray = [];
      for (let key in object) {
        outputArray.push(key);
      }
      return outputArray;
    },

    values: function(object) {
      const outputArray = [];
      for (let key in object) {
        outputArray.push(object[key]);
      }
      return outputArray;
    },

    functions: function(object) {
      const outputArray = [];
      for (let key in object) {
        if (typeof object[key] === "function") {
          outputArray.push(key);
        }
      }
      return outputArray.sort();
    },


  }
})()

// const unmodifiedTestArr = [1, 2, 3, 4]
// console.log(fi.map(unmodifiedTestArr, (x) => (x * 3)));

const nestedArr = [1, [2, 3], [[4, 5], 6, [7, [8, 9]]]];
console.log(fi.flatten(nestedArr));
