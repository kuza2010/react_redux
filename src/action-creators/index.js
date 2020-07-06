import itemActions from "../actions/item-actions";

const addItem = (item) => {
    return {
        type: itemActions.ON_ITEM_ADDED,
        payload: item
    }
}

const deleteItem = (id) => {
    return {
        type: itemActions.ON_ITEM_DELETED,
        payload: id
    }
}

const deleteItems = () => {
    return {
        type: itemActions.ON_ALL_ITEM_DELETE,
    }
}

const changeItem = (item) => {
    return {
        type: itemActions.ON_ITEM_CHANGED,
        payload: {item}
    };
}

export {
    changeItem,
    deleteItem,
    deleteItems,
    addItem
}