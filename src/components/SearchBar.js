import React, { Component } from "react";
import { Card, CardText, Col } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

class SearchBar extends Component {
    render() {
        return (
            <Col sm="8">
                <Card>
                    <CardText>
                        <input />
                    </CardText>
                </Card>
            </Col>
        );
    }
}

export default SearchBar;
