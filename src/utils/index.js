const removeItemFromArray = (arr, idx) => {
    return [
        ...arr.slice(0, idx),
        ...arr.slice(idx + 1)
    ]
}

const updateItemFromArray = (arr, item, idx) => {
    return [
        ...arr.slice(0, idx),
        item,
        ...arr.slice(idx + 1)
    ]
}

const findById = (arr, idToFind) => {
    console.log(arr)
    return arr.findIndex(element => {
        return element.id === idToFind;
    });
}

export {removeItemFromArray, updateItemFromArray, findById}