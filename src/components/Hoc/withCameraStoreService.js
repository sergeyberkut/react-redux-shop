import React from 'react'
import { CameraStoreServiceConsumer } from '../CameraStoreContext'

const withCameraStoreService = () => (Wrapped) => {

	return props => {
		return (
			<CameraStoreServiceConsumer>
				{
					camerastoreService => {
						return (
							<Wrapped
								{...props}
								camerastoreService={camerastoreService}
							/>
						)
					}
				}
			</CameraStoreServiceConsumer>
		)
	}
}

export default withCameraStoreService