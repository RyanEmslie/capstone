import React, { Component } from "react";
import { Card, CardText } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

class Footer extends Component {
    render() {
        return (
            <div className=".card-foot">
                <Card>
                    <CardText>Footer</CardText>
                </Card>
            </div>
        );
    }
}

export default Footer;
