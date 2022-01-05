const dragons = [
    { name: 'fluffykins', size: 1 },
    { name: 'wargle', size: 3 }
]

let title= dragons.map(dragon => {
    if (dragon.size > 1) {
        return dragon.name + ' the great'
    }
    return dragon.name + ' the tiny'
})

title

// reimplemented map function with reduce 

