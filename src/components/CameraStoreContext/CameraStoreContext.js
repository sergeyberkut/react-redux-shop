import React from 'react'

const {
	Provider: CameraStoreServiceProvider,
	Consumer: CameraStoreServiceConsumer
} = React.createContext()

export {
	CameraStoreServiceConsumer,
	CameraStoreServiceProvider
}