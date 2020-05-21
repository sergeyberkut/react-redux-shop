import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { basketItemCountChange, } from '../../../store/actions'
import { withCameraStoreService } from '../../Hoc'
import { compose } from '../../../utils'

const BasketPage = ({ basket, basketItemCountChange }) => {

	const setBasketItems = items => localStorage.setItem('basket', JSON.stringify(items))

	const basketItemCountChangeHandler = (id, count) => {
		let newBasket = [...basket]
		const idx = newBasket.findIndex(item => item.id === id)
		newBasket[idx].count = +newBasket[idx].count + count
		newBasket = newBasket.filter(item => item.count)
		setBasketItems(newBasket)
		basketItemCountChange(newBasket)

	}

	const basketClear = () => {
		setBasketItems([])
		basketItemCountChange([])
	}

	if (!basket.length) {
		return (
			<div className="basket__is-clearblock">
				<h1 className="basket__is-clear-text">Корзина пуста</h1>
				<NavLink to='/' className="basket__links">На главную</NavLink>
			</div>
		)
	}

	return (

		<div>
			<div className="basket">
				<div className="basket__header">
					<div className="basket__title">Корзина</div>
					<button className="basket__clear-all" onClick={basketClear}>Очистить корзину</button>
				</div>
				<div className="basket__goods">
					{
						basket.map(({ count, price, label, img, id, categoryName }) => {

							const url = `/${categoryName}/${label.toLowerCase().replace(/\s/, '-')}-${id}`

							return (
								<ul className="basket__goods-row" key={id}>
									<li className="basket__goods-imageblock"><NavLink to={url}><img src={img} alt="" className="basket__goods-image" /></NavLink>
									</li>
									<li className="basket__goods-name"><NavLink to={url} className="basket__goods-name-link">{label}</NavLink></li>
									<li className="basket__goods-price">Цена за ед: {price} руб.</li>
									<li className="basket__goods-count">
										<span className="basket__action basket__action-decrease"
											onClick={() => basketItemCountChangeHandler(id, -1)}
										>-</span>
										Кол-во: {count}
										<span className="basket__action basket__action-increase"
											onClick={() => basketItemCountChangeHandler(id, 1)}
										>+</span>

									</li>
									<li className="basket__goods-total">{price * count} руб.</li>
									<li className="basket__goods-times"
										onClick={() => basketItemCountChangeHandler(id, -count)}
									>&times;</li>
								</ul>
							)
						})
					}
				</div>
				<div className="basket__information">
					<div className="basket__data">
						<div className="basket__person-data">
							<h2 className="basket__data-title">Ваши данные:</h2>
							<label htmlFor="email" className="basket__label">E-mail:</label>
							<input type="text" className="basket__person-data-input" id="email" onChange={() => ({})} />
							<label htmlFor="phone" className="basket__label">Телефон:</label>
							<input type="text" className="basket__person-data-input" id="phone" onChange={() => ({})} />
							<label htmlFor="name" className="basket__label">Имя:</label>
							<input type="text" className="basket__person-data-input" id="name" onChange={() => ({})} />
						</div>
						<div className="basket__delievery-data">
							<h2 className="basket__data-title">Доставка:</h2>
							<div className="basket__delievery-radioboxes">
								<div className="basket__radioblock">
									<input type="radio" className="basket__radiobox" name="delievery" id="pickup" checked onChange={() => ({})} />
									<label htmlFor="pickup">Самовывоз бесплатно</label>
								</div>
								<div className="basket__radioblock">
									<input type="radio" className="basket__radiobox" name="delievery" id="courier" onChange={() => ({})} />
									<label htmlFor="courier">Курьером от 5 руб.</label>
								</div>
							</div>
							<h3 className="basket__label">Пункт выдачи:</h3>
							<ul className="basket__point-of-issue">
								<li className="basket__point-of-issue-item">- г. Минск, улица Киселева 55</li>
							</ul>
							<div className="basket__promocode-block">
								<input type="text" className="basket__promocode-input" placeholder="Промо код" />
								<button className="basket__apply-promocode-btn">Применить</button>
							</div>
						</div>
					</div>
					<div className="basket__total-price-and-order">
						<div className="basket__total-price">Итоговая стоимость: &nbsp;
						{basket.reduce((prevValue, { price, count }) => prevValue + price * count, 0)}
						&nbsp;
						 руб.</div>
						<div className="basket__order">
							&#10004; Оформить заказ
								</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = ({ basket }) => ({ basket })

const mapDispatchToProps = { basketItemCountChange }

export default compose(
	withCameraStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BasketPage)

