import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import ShowMap from "./components/ShowMap";
import Home from "./components/layouts/Home";
import Search from "./components/layouts/Search";
import MyPlaces from "./components/layouts/MyPlaces";

import "./App.css";

class App extends Component {
    // initialize our state

    state = {
        location: {
            lat: 39.8333333,
            lng: -98.585522
        },

        zoom: 6,
        hasLocation: false
    };

    //Method used to get state from ShowMap
    onLocationChange = (newLat, newLng) => {
        console.log("on change clicked");
        this.setState({
            location: {
                lat: newLat,
                lng: newLng
            }
        });
        console.log(this.state);
    };

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/entryform" component={Search} />
                    <Route exact path="/myplaces" component={MyPlaces} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
