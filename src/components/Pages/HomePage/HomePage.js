import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { withCameraStoreService } from '../../Hoc'
import PreferencesColumn from '../../PreferencesColumn'
import { connect } from 'react-redux'
import { compose } from '../../../utils'

import { fetchCatalogHome } from '../../../store/actions'
import cams from './images/cams.jpg'
import cars from './images/cars.jpg'
import cams2 from './images/cams2.jpg'

const HomePage = ({ fetchCatalogHome, catalogHome }) => {

	useEffect(() => {
		fetchCatalogHome()
	}, [fetchCatalogHome])

	return (
		<React.Fragment>
			<section className="section homepage-catalog">
				<div className='container'>
					<div className="homepage-catalog__body">
						<div className="homepage-catalog__row">
							{
								catalogHome.map(({ label, img, link }) => {
									return (
										<NavLink to={`/${link}`} className="homepage-catalog__column" key={label}>
											<div className="column-image">
												<img src={img} alt="" />
											</div>
											<h2 className="column-title">{label}</h2>
											<span className="column-link">Перейти в каталог</span>
										</NavLink>
									)
								})
							}
						</div>
					</div>
				</div>
			</section>

			<section className="section preferences">
				<div className='container'>
					<div className="preferences__body">
						<div className="preferences__row">
							<PreferencesColumn
								img={cams}
								title="Коммерческая недвижимость"
								text="Система безопасности Бизнес-центра как объекта с большим человекопотоком на базеоборудования Proto-X. Для получения коммерческого предложения заполните форму ниже." />
							<PreferencesColumn
								img={cars}
								title="Транспорт"
								text="Система видеонаблюдения для общественного транспорта на базе профессионального	оборудования для видеонаблюдения Proto-X. Для получения коммерческого предложения заполните форму ниже." />
							<PreferencesColumn
								img={cams2}
								title="Дома и социальные объекты"
								text="Система безопасности и мониторинг ситуации на придомовой территории	многоквартирных домов детских садиков и школ. Для получения коммерческого предложения заполните форму	ниже." />
						</div>
					</div>
				</div>
			</section>

			<section className="section callback">
				<div className='container'>
					<div className="callback__body">
						<div className="callback__row">
							<div className="callback__column callback__column-videoblock video">
								{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/RhMYBfF7-hE" frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe> */}
							</div>
							<form className="callback__column">
								<label htmlFor="name">Имя:</label>
								<input type="text" id="name" />
								<label htmlFor="lastname">Фамилия:</label>
								<input type="text" id="lastname" />
								<label htmlFor="phone">Телефон:</label>
								<input type="text" id="phone" />
								<label htmlFor="email">E-mail:</label>
								<input type="text" id="email" />
								<label htmlFor="comment">Комментарий:</label>
								<input type="text" id="comment" />
								<div className="callback__btnblock">
									<button type="submit">Отправить</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

		</React.Fragment>
	)
}

const mapStateToProps = ({ catalogHome }) => ({ catalogHome })

const mapDispatchToProps = (dispatch, { camerastoreService }) => {
	return {
		fetchCatalogHome: fetchCatalogHome(camerastoreService, dispatch)
	}
}

export default compose(
	withCameraStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(HomePage)

