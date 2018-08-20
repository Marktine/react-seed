import React, { Component } from 'react';
import YouPlayBanner from '../../components/youplay-banner/youplay-banner';

export default class Events extends Component {
    render() {
        return <div>
            <YouPlayBanner title="ABC" />
            <h1>Event Page</h1>
        </div>
    }
}