import {v4 as uuid} from 'uuid';
import itemActions from "../actions/item-actions";
import {findById, removeItemFromArray, updateItemFromArray} from "../utils";

const initialState = {
    items: [{
        id: uuid(),
        title: "mock Item"
    }],
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case itemActions.ON_ITEM_ADDED:
            console.log(state)
            return {
                items: [
                    action.payload,
                    ...state.items
                ],
            }
        case itemActions.ON_ITEM_CHANGED:
            const {item} = action.payload;

            return {
                items: updateItemFromArray(state.items, item, findById(state.items, item.id)),
            }
        case itemActions.ON_ITEM_DELETED:
            const id = action.payload;

            return {
                items: removeItemFromArray(state.items, findById(state.items, id))
            }
        case itemActions.ON_ALL_ITEM_DELETE:
            return {
                items: []
            }
        default:
            return state;
    }
}

export default itemReducer;
