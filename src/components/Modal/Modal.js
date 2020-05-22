import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { onModalVisibleToggle } from '../../store/actions'

function Modal({ onModalVisibleToggle, modalVisible }) {

	const focusRef = useRef()


	const body = document.body
	if (modalVisible) {
		body.classList.add('lock')
	} else {
		body.classList.remove('lock')
	}



	useEffect(() => {
		if (modalVisible) {
			focusRef.current.focus()
		}
	}, [focusRef])

	useEffect(() => {
	}, [])


	// надо сделать проверку в контенте на то, что нужно ли выводить модалку
	// только так получится поставить фокус
	// а так модалка маунтится постоянно
	// хотя её можно перенести в хедер для того, чтобы она отображалась нормально и без redux

	if (!modalVisible) {
		return <p></p>
	}

	return (

		<div className="modal">
			<div className="modal__backdrop"
				onClick={({ target: { className } }) => {
					if (className.includes('modal__backdrop')) {
						onModalVisibleToggle()
					}
				}}

			>
				<div className="modal__body">
					<div className="modal__header">
						<span className="modal__times"
							onClick={onModalVisibleToggle}

						>&times;</span>
					</div>
					<div className="modal__title">Для быстрого заказа введите Ваш номер телефона.</div>
					<form className="modal__form" onSubmit={event => event.preventDefault()}>
						<input type="text" className="modal__number-input" placeholder="+375333052571" onChange={() => ({})} ref={focusRef} /><br />
						<label htmlFor="count" className="modal__count-label">Количество: </label>
						<input type="text" className="modal__count-input" onChange={() => ({})} />
						<div className="modal__btnblock">
							<button className="modal__btn">Закать</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}


const mapStateToProps = ({ modalVisible }) => ({ modalVisible })

const mapDispatchToProps = { onModalVisibleToggle }

export default connect(mapStateToProps, mapDispatchToProps)(Modal)