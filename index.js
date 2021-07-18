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
    },

    compact: function(array) {
        let falseSet = new Set([false, null, 0, "", undefined, NaN])
        return array.filter(element => !falseSet.has(element))
    },

    sortBy: function(array, callback) {
        let newArray = array.slice(0)
        return newArray.sort(function(a,b){
            return callback(a) - callback(b)
        })
    },

    flatten: function(array, shallow = false) {
        let flattenedArray = []
        let flatten = function flatten(arr) {
            const result = []
          
            arr.forEach(function(i) {
              if (Array.isArray(i)) {
                result.push(...flatten(i))
              } else {
                result.push(i)
              }
            })
          
            return result
          }

        if(shallow){
            return flattenedArray = array.flat()
        } else {
           return  flattenedArray = flatten(array)    
        }
    },

    uniqSorted: function(array, callback){
        const sorted = [array[0]]
        for (let i = 1; i < array.length; i++) {
            if (sorted[i-1] !== array[i])
                sorted.push(array[i])
        }
      return sorted
    },

    uniq: function(array, sorted=false, callback=false){
        if (sorted) {
            return fi.uniqSorted(array, callback)
        } else if (!callback){
            return Array.from(new Set(array))
        } else {
            const modifiedVals = new Set()
            const uniqVals = new Set()
            for (let val of array) {
                const moddedVal = callback(val)
                if (!modifiedVals.has(moddedVal)) {
                modifiedVals.add(moddedVal)
                uniqVals.add(val)
                }
            }   
            return Array.from(uniqVals)
        }
    },

    keys: function(obj) {
        const keyArray = []
        for (const key in obj) {
           keyArray.push(key)
        }
        return keyArray
    },

    values: function(obj) {
        const valueArray = []
        for (const key in obj) {
            valueArray.push(obj[key])
        }
        return valueArray
    },

    functions: function(obj) {
        const functionNameArray = []
        for (const key in obj) {
            if (typeof obj[key] === "function") {
                functionNameArray.push(key)
            }
        }
        return functionNameArray.sort()
    }
    




  }
})()

fi.libraryMethod()
