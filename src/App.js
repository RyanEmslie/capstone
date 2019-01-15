import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/layouts/Home";
import Search from "./components/layouts/Search";
import MyPlaces from "./components/layouts/MyPlaces";

import "./App.css";

class App extends Component {
    // initialize our state
    constructor(props) {
        super(props);
        this.state = {
            location: {
                lat: null,
                lng: null
            }
        };
    }

    //Method used to get state from ShowMap
    onLocationChange(newLat, newLng) {
        console.log("on change clicked");
        this.setState({
            location: {
                lat: newLat,
                lng: newLng
            }
        });
        console.log(this.state);
    }

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
