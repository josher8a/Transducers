const dragons = [
    { name: 'fluffykins', size: 1 },
    { name: 'wargle', size: 3 }
]

let dragonTitle = dragon => {
    if (dragon.size > 1) {
        return dragon.name + ' the great'
    }
    return dragon.name + ' the tiny'
}


let title= dragons.map(dragonTitle) 

title

// reimplemented map function with reduce 

function map(array, callback) {
    return array.reduce((acc, current) => {
        acc.push(callback(current))
        return acc
    }, [])
}

title = map(dragons, dragonTitle)
