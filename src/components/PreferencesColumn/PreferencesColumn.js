import React from 'react'

export default function PreferencesColumn({ img, title, text }) {
	return (
		<div className="preferences__column">
			<div className="column-image">
				<img src={img} alt="" />
			</div>
			<div className="column-title">{title}</div>
			<p className="column-text">{text}</p>
		</div>
	)
}
