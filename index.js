const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
        const newArray = (collection instanceof Array ? collection.slice() : Object.values(collection))
        for (let i = 0; i < newArray.length; i++) {
            callback(newArray[i])    
        }
        return collection
    },

    map: function(collection, callback) {
        let newArray = []
        const newCollection = (collection instanceof Array ? collection.slice() : Object.values(collection))
        for (let i = 0; i < newCollection.length; i++) {
            newArray.push(callback(newCollection[i]))   
        }
        return newArray
    },

    reduce: function(c = [], callback = () => {} , acc) {
        let collection = c.slice(0)

        if (!acc) {
            acc = collection[0]
            collection = collection.slice(1)
        }
        for (let i = 0; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection)
        }
        return acc
    },

    find: function(collection, truthTest) {
        if (!(collection instanceof Array))
            collection = Object.values(collection)

        for (let i = 0; i < collection.length; i++) 
           if (truthTest(collection[i])) return collection[i]

        return undefined
    },

    filter: function(collection, truthTest) {
        if (!(collection instanceof Array))
        collection = Object.values(collection)

        const newArray = []

        for (let i = 0; i < collection.length; i++) {
            if (truthTest(collection[i])) {
               newArray.push(collection[i]) 
            }    
        }
        return newArray
    },

    size: function(collection) {
        return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(collection, stop = false) {
        return (stop) ? collection.slice(0, stop) : collection[0]
    },

    last: function(collection, stop = false) {

        return (stop) ? collection.slice(-1 * stop) : collection[collection.length -1]
    }


  }
})()

fi.libraryMethod()
