
//add item
//destructure object passed in, if none exists, set to empty obj
export const addItem= (item={})=> ({
    type:'ADD',
    payload: item
});

//remove an item by ID
export const removeItem = ({ id }={})=> ({
    type: 'REMOVE_BY_ID',
    id
});

//edit an item by ID
export const editItem= (id, updates)=> ({
    type: 'EDIT_BY_ID',
    id, updates
});

//set entire list of items
export const setItems = (items) => ({
    type: 'SET_TO',
    items
});