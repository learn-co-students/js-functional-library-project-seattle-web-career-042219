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
      let retAr = [];
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          retAr.push(newCollection[i]);
        }
      }
      return retAr;
    },

    size: function(collection) {
      const newCollection = Array.isArray(collection)
        ? collection.slice(0)
        : Object.values(collection);
      return newCollection.length;
    },

    first: function(collection, elements = 1) {
      const newCollection = Array.isArray(collection)
        ? collection.slice(0)
        : Object.values(collection);
      let retAr = [];
      for (let i = 0; i < elements; i++) {
        retAr.push(newCollection[i]);
      }
      return elements === 1 ? retAr.shift() : retAr;
    },

    last: function(collection, elements = 0) {
      const newCollection = Array.isArray(collection)
        ? collection.slice(0)
        : Object.values(collection);
      let retAr = [];
      for (let i = 0; i < newCollection.length; i++) {
        retAr.push(newCollection[i]);
      }
      return elements
        ? newCollection.slice(
            newCollection.length - elements,
            newCollection.length
          )
        : newCollection.pop();
    },

    compact: function(array) {
      let newAr = [];
      for (let i = 0; i < array.length; i++) {
        array[i] ? newAr.push(array[i]) : null;
      }
      return newAr;
    },

    sortBy: function(array, callback) {
      const newCollection = Array.isArray(array)
        ? array.slice(0)
        : Object.values(array);
      let retAr = [];
      return newCollection.sort(function(a, b) {
        return callback(a) - callback(b);
      });
    },

    flatten: function() {},

    functions: function() {}
  };
})();

fi.libraryMethod();
