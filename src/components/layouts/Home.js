import React, { Component } from "react";
import JumboHead from "../JumboHead";
import ShowMap from "../ShowMap";
import NavButtons from "../NavButtons";

class Home extends Component {
    render() {
        return (
            <div>
                <JumboHead />
                <ShowMap />
                <div>
                    <NavButtons />
                </div>
            </div>
        );
    }
}

export default Home;
