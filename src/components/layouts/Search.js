import React, { Component } from "react";

import ShowMap from "../ShowMap";
import EntryForm from "../EntryForm";
// import Header from "../Header";
import NavButtons from "../NavButtons";
// import Proptypes from "prop-types";

import { Row, Col } from "reactstrap";

class Search extends Component {
    render() {
        return (
            <div>
                <NavButtons />
                <Row>
                    <Col sm="8">
                        <ShowMap
                            onLocationChange={this.props.onLocationChange}
                        />
                    </Col>
                    <Col sm="4">
                        <EntryForm />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Search;
