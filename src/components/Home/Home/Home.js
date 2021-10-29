import React from 'react';
import Banner from '../Banner/Banner';
import Guide from '../Guide/Guide';
import Packages from '../Packages/Packages';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Guide></Guide>
            <Packages></Packages>
        </div>
    );
};

export default Home;