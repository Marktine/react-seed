import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AngledImg = () => {
    return <Link to="/" className="angled-img">
        <div className="img">
            <img src="assets/images/shooter/game-cos-1-500x375.jpg" alt="" />
        </div>
        <div className="bottom-info">
            <h4>Header</h4>
            <div>Some content...</div>
        </div>
    </Link>
}

const createCarousel = function (length) {
    let table = [];

    for(let i = 0; i < length; i++) {
        table.push(<AngledImg key={i} />);
    }
    return table;
}

const YouPlayCarousel = () => {
    return <div className="youplay-carousel" data-stage-padding="0" data-item-padding="15"
        data-autoplay="8000" data-loop="false"
        >
         { createCarousel(3) }
    </div>
}

// YouPlayCarousel.propTypes = {
//     contentArr: PropTypes.arrayOf(PropTypes.object)
// }

export default YouPlayCarousel