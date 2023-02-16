import React from 'react'
import Activities from '../components/Activities'
import Caraousel from '../components/Caraousel'
import Navbar from '../components/Navbar'
import OptionalFeatures from '../components/OptionalFeatures'
import TravellerDetails from '../components/TravellerDetails'
import TripDetails from '../components/TripDetails'

const Home = () => {
    return (
        <>
            <Navbar />
            <Caraousel />
            <TravellerDetails />
            <TripDetails />
            <OptionalFeatures />
            <Activities />
        </>
    )
}

export default Home