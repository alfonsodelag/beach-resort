import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from "../components/RoomsContainer"

const Services = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    );
}

export default Services;
