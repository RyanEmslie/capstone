import React, { Component } from "react";
import ShowMap from "../ShowMap";
import Header from "../Header";
import NavButtons from "../NavButtons";

class MyPalces extends Component {
    render() {
        return (
            <div>
                <Header />
                <NavButtons />
                <ShowMap />
            </div>
        );
    }
}

export default MyPalces;
