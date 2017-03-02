'use_strict';

import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';

export default class Carousel extends React.Component {
    constructor() {
        super();
        this.state = {assets: {}};
        this.state.settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false
        };
    }

    componentWillMount() {
        this.fetchAssets();
    }

    fetchAssets() {
        axios.get('http://172.18.0.137/xdk2/data.php?startIndex=0&pageSize=25').then(response => {
            this.setState({
                assets: response.data
            });
        });
    }

    render() {
        if (this.state.assets.data === void 0) {
            return null;
        }
        const items = this.state.assets.data.map((asset) => {
            return (
                <div>
                    <Asset asset={asset} />
                </div>
            )
        });
        return (
            <Slider {...this.state.settings}>
                {items}
            </Slider>
        );
    }
}

function Asset(props) {
    return (
        <div className="asset-item" id={props.asset.id} title={props.asset.title}>
            <img className="asset-item-img" src={props.asset.img} />
            <div className="asset-item-title">{props.asset.title}</div>
        </div> : null
    );
}
