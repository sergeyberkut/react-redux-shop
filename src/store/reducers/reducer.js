const initialState = {
	error: null,
	basket: [],
	loadingGoods: true,
	loadingMenu: true,
	catalogHome: [],
	catalogMenu: [],
	goodsToShow: [],
	modalVisible: false
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
		case 'FETCH_CATALOG-HOME_SUCCESS':
			return {
				...state,
				loading: false,
				catalogHome: payload,
			}
		case 'FETCH_CATALOG-HOME_REQUESTED':
			return {
				...state,
				loading: true,
				catalogHome: [],
			}
		case 'FETCH_CATALOG-MENU_SUCCESS':
			return {
				...state,
				catalogMenu: payload,
				loadingMenu: false,
			}
		case 'FETCH_GOODS-TO-SHOW_SUCCESS':
			return {
				...state,
				loadingGoods: false,
				goodsToShow: payload,
			}
		case 'FETCH_GOODS-TO-SHOW_REQUESTED':
			return {
				...state,
				loadingGoods: true,
			}
		case 'ON_MODAL-VISIBLE_TOGGLE':
			return {
				...state,
				modalVisible: !state.modalVisible
			}
		default:
			return state
	}
}


export default reducer