import React from 'react';
import PropTypes from 'prop-types';

import './youplay-banner.css';

const YouPlayBanner = (props) => {
    return <section className="youplay-banner banner-top big">
        <div className="image">
            <img src="assets/images/shooter/banner-bg.jpg" />
        </div>
        <div className="info">
            <div>
                <div className="container">
                    <h1 className="h1">{ props.title }</h1>
                </div>
            </div>
        </div>
    </section>
}

YouPlayBanner.propTypes = {
    title: PropTypes.string.isRequired
}

export default YouPlayBanner