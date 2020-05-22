import React, { useState } from 'react'
import { onItemToBasketAdded, onModalVisibleToggle } from '../../store/actions'
import { connect } from 'react-redux'
import { compose } from '../../utils'
import { withCameraStoreService } from '../Hoc'

const BuyBlock = ({
	buyLabel = '',
	addToBasketLabel = '',
	counterOrder = 1,
	basket,
	onItemToBasketAdded,
	id,
	camerastoreService,
	onModalVisibleToggle
}
) => {

	let [basketCount, setBasketCount] = useState('1')

	const setBasketItems = items => localStorage.setItem('basket', JSON.stringify(items))

	const onItemToBasketAddedHandler = (id, basketCount) => {
		const newBasket = [...basket]
		const idx = newBasket.findIndex(item => item.id === id)
		if (idx === -1) {
			const selectedItem = camerastoreService.getGoodByID(id) // сделать так, чтобы он искал этот товар в сторе, потому что так менее затратно 

			selectedItem.count = basketCount
			newBasket.push(selectedItem)
		} else ++newBasket[idx].count
		setBasketItems(newBasket)
		onItemToBasketAdded(newBasket)
	}

	return (
		<React.Fragment>

			<div className="counter" style={counterOrder < 2 ? { order: 1 } : { order: 2 }}>
				<div className="counter__increase" onClick={() => setBasketCount(++basketCount)}>+</div>
				<div className="counter__count">{basketCount}</div>
				<div className="counter__decrease"
					onClick={() => {
						if (basketCount > 1) {
							setBasketCount(--basketCount)
						}
					}}
				>-</div>
			</div>

			<div className="column__buy-now"
				style={counterOrder >= 2 ? { order: 1 } : { order: 2 }}
				onClick={onModalVisibleToggle}
			>
				<i className="demo-icon icon-hand-pointer-o">&#xf25a;</i>
				{buyLabel}
			</div>

			<div className="column__add-to-cart" style={{ order: 3 }}
				onClick={() => onItemToBasketAddedHandler(id, basketCount)}
			>
				<i className="demo-icon icon-cart-plus">&#xf217;</i>
				{addToBasketLabel}
			</div>

		</React.Fragment >
	)
}


const mapStateToProps = ({ basket }) => {
	return {
		basket
	}
}

const mapDispatchToProps = {
	onItemToBasketAdded,
	onModalVisibleToggle
}

export default compose(
	withCameraStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BuyBlock)
