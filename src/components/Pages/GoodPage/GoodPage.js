import React from 'react'
import BuyBlock from '../../BuyBlock'

const GoodPage = ({ product: { label, img, price, specification, nameSpecification, description, id } }) => {

	return (
		<div className="product">
			<h1 className="product__title">{label}</h1>
			<div className="product__description">
				<div className="product__photoblock">
					<img src={img} alt={'Изображение отсутствует'} className="product__photo" />
				</div>
				<div className="about">
					<div className="about__title">Описание</div>
					<ul className="about-list">
						{
							description.map(character => {
								return (
									<li className="about__list-item" key={character}>{character}</li>
								)
							})
						}
					</ul>
					<div className="about__price">{price ? `Цена: ${price} Br.` : 'Нет в наличии'}</div>
					{
						price
							?
							<div className="about__buttonsblock">
								<div className="column__actionsblock">
									<BuyBlock buyLabel="Быстрый заказ" addToBasketLabel="Купить" counterOrder="2"
										id={id}
									/>
								</div>
							</div>
							: null
					}
				</div>
			</div>
			<table className="specification">
				<thead>
					<tr>
						<td className="specification__title" colSpan="2">Спецификация</td>
						<td></td>
					</tr>
				</thead>
				<tbody className="specification__table">
					{
						nameSpecification.map((character, index) => {
							return (
								<tr className="specification__table-row" key={character + index}>
									<td>{nameSpecification[index]}</td>
									<td>{specification[index]}</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</div>
	)
}

export default GoodPage