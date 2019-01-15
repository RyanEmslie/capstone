import React, { Component } from "react";
import ShowMap from "../ShowMap";
import Header from "../Header";
import NavBar from "../NavBar";

class MyPalces extends Component {
    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <ShowMap />
            </div>
        );
    }
}

export default MyPalces;
