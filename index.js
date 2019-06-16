const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, callback) {
      const newCollection = Array.isArray(collection)
        ? collection.slice()
        : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = [];
      if (!Array.isArray(collection)) {
        collection = Object.values(collection);
      }
      for (let i = 0; i < collection.length; i++) {
        newCollection.push(callback(collection[i]));
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection.slice(0);
      if (!acc) {
        acc = collection[0];
        newCollection = collection.slice(1);
      }
      for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      const newCollection = Array.isArray(collection)
        ? collection.slice(0)
        : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      const newCollection = Array.isArray(collection)
        ? collection.slice(0)
        : Object.values(collection);
      let filteredArr = [];
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          filteredArr.push(newCollection[i]);
        }
      }
      return filteredArr;
    },

    size: function(collection) {
      const newCollection = Array.isArray(collection)
        ? collection.slice(0)
        : Object.values(collection);
      return newCollection.length;
    },

    // Array Functions

    first: function(array, n = 0) {
      return n ? array.slice(0, n) : array[0];
    },

    last: function(array, n = 0) {
      return n
        ? array.slice(array.length - n, array.length)
        : array[array.length - 1];
    },

    compact: function(array) {
      return array.filter(item => !!item);
    },

    sortBy: function(array, callback) {
      let newAr = [...array];
      return newAr.sort(function(a, b) {
        return callback(a) - callback(b);
      });
    },

    flatten: function(array, shallow = false, flattenedAr = []) {
      if (shallow) {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
              flattenedAr.push(array[i][j]);
            }
          } else {
            flattenedAr.push(array[i]);
          }
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          let val = array[i];
          if (Array.isArray(val)) {
            this.flatten(val, false, flattenedAr);
          } else {
            flattenedAr.push(val);
          }
        }
      }
      return flattenedAr;
    },

    uniq: function(array, isSorted = false, callback = false) {
      if (isSorted) {
        let uniqAr = [array[0]];
        for (let i = 1; i < array.length; i++) {
          if (uniqAr[i - 1] !== array[i]) {
            callback ? uniqAr.push(callback(array[i])) : uniqAr.push(array[i]);
          }
        }
        return uniqAr;
      } else {
        let modifiedAr = [];
        let uniqAr = [];
        for (let i = 0; i < array.length; i++) {
          let moddedVal = callback ? callback(array[i]) : array[i];
          if (!modifiedAr.includes(moddedVal)) {
            modifiedAr.push(moddedVal);
            uniqAr.push(array[i]);
          }
        }
        return uniqAr;
      }
    },

    keys: function(object) {
      let keysAr = [];
      for (let key in object) {
        keysAr.push(key);
      }
      return keysAr;
    },

    values: function(object) {
      let valuesAr = [];
      for (let value in object) {
        valuesAr.push(object[value]);
      }
      return valuesAr;
    },

    functions: function(object) {
      let newAr = [];
      for (let key in object) {
        if (typeof object[key] === "function") {
          newAr.push(key);
        }
      }
      return newAr.sort();
    }
  };
})();

fi.libraryMethod();
