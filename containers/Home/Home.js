import React, { Component } from 'react';

import YouPlayBanner from '../../components/youplay-banner/youplay-banner';
import YouPlayCarousel from '../../components/youplay-carousel/youplay-carousel';

export default class Home extends Component {
    render() {
        return <div>
            <YouPlayBanner title="HOME" />
            <h1>THIS IS HOME!!!!</h1>
            <YouPlayCarousel />
        </div>
    }
}