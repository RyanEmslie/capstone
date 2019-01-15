import React, { Component } from "react";
import { Card, CardText } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

class Header extends Component {
    render() {
        return (
            <div className=".card-foot">
                <Card>
                    <CardText>Header</CardText>
                </Card>
            </div>
        );
    }
}

export default Header;
