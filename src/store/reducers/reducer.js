const initialState = {
	error: null,
	basket: [],
	catalogHome: []
}

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'ON_ITEM_TO_BASKET_ADDED':
			return {
				...state,
				basket: payload
			}
		case 'FETCH_BASKET_SUCCESS':
			return {
				...state,
				basket: payload
			}
		case 'ON_BASKET_ITEM_COUNT_CHANGE':
			return {
				...state,
				basket: payload
			}
		case 'FETCH_CATALOG-HOME-SUCCESS':
			return {
				...state,
				catalogHome: payload
			}
		default:
			return state
	}
}


export default reducer