//a general purpose reducer that expects items to have an id
/*
    {
        id: 123
    }
*/
const mainReducerDefaultState = [];
export default (state = mainReducerDefaultState, action) => {
	switch (action.type) {
		case "ADD":
			return [...state, action.payload]; //spread operator - creates new array

		case "REMOVE_BY_ID":
			return state.filter(({ id }) => id !== action.id); //filter creates new array

		case "EDIT_BY_ID":
			return state.map(item => {
				if (item.id === action.id) {
					return {
						...item,
						...action.updates
					}; //spreads both objects out, effectively edits existing
				} else {
					return item; //no change unless our criteria matches
				}
			});
		//sets state to the array we pass in
		case "SET_TO":
			return action.items;

		default:
			return state;
	}
};
