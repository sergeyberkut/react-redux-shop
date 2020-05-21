import React from 'react'
import { NavLink } from 'react-router-dom'
import BuyBlock from '../../BuyBlock'

export default function CatalogPage({ productList, categoryName, categoryTitle }) {
	return (
		<div className="main__goods">
			<h1 className="main__title">{categoryTitle}</h1>
			<div className="main__goods-row">
				{


					productList.map(({ label, img, description, price, id }) => {

						const url = `/${categoryName}/${label.toLowerCase().replace(/\s/gm, '-')}-${id}`

						return (
							<div className="main__goods-column" key={id}>
								<div className="column__title"><NavLink to={url}>{label}</NavLink>
								</div>
								<NavLink to={url}>
									<div className="column__imageblock">
										<img src={img} alt='Изображение отсутствует' className="column__image" />
									</div>
								</NavLink>
								<ul className="column__preference-list">
									{
										description.slice(0, 5).map((character) => {
											return (
												<li className="column__preference-list-item" key={character}>{character || ''}</li>
											)
										})
									}
									<NavLink to={url} className="column__readmore">Читать полное описание...</NavLink>
								</ul>
								<div className="column__actionsblock">
									<div className="column__price">{price ? `${price} Br` : 'Нет в наличии'} </div>
									{price ? <BuyBlock id={id} /> : null}
								</div>
							</div>
						)
					}
					)
				}
			</div>
		</div>
	)
}
