import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Card, CardBody } from "reactstrap";

// import Proptypes from "prop-types";

import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

class ShowMap extends Component {
    state = {
        location: {
            lat: 39.8333333,
            lng: -98.585522
        },
        zoom: 6,
        hasLocation: false
    };

    // From GeoLocation API
    // If user declines browser location,
    //their ID will be taken from https://api.ip.sb
    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(`Location received from browser`);
                this.setState({
                    location: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    hasLocation: true,
                    zoom: 18
                });
            },
            () => {
                console.log(`Location taken from IP address`);
                fetch(`https://ipapi.co/json`)
                    .then(res => res.json())
                    .then(locData => {
                        console.log(locData);
                        this.setState({
                            location: {
                                lat: locData.latitude,
                                lng: locData.longitude
                            },
                            hasLocation: true,
                            zoom: 18
                        });
                    });
            }
        );
    }

    addMarker = e => {
        console.log(e.latlng);
        this.setState({
            location: { lat: e.latlng.lat, lng: e.latlng.lng }
        });
        //Passes Lat and Long up to App state
        // this.props.onLocationChange(e.latlng.lat, e.latlng.lng);
    };

    render() {
        const position = [this.state.location.lat, this.state.location.lng];

        return (
            <div>
                <Card className="map-card">
                    <CardBody>
                        <Map
                            className="map"
                            center={position}
                            zoom={this.state.zoom}
                            onClick={this.addMarker}
                        >
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a>'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {this.state.hasLocation ? (
                                <Marker position={position}>
                                    <Popup>
                                        <p>{`Lat: ${
                                            this.state.location.lat
                                        }, \nLong: ${
                                            this.state.location.lng
                                        }`}</p>
                                    </Popup>
                                </Marker>
                            ) : (
                                <Marker position={position}>
                                    <Popup>
                                        <p>{`Center of the Country \nLat: ${
                                            this.state.location.lat
                                        }, \nLong: ${
                                            this.state.location.lng
                                        }`}</p>
                                    </Popup>
                                </Marker>
                            )}
                        </Map>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ShowMap;
