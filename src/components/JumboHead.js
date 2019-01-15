import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

class JumboHead extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Header</h1>
                </Jumbotron>
            </div>
        );
    }
}

export default JumboHead;
