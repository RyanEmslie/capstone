import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function NavButtons() {
    return (
        <div>
            <Card className="nav-button-card">
                <CardBody>
                    <div className="btn-group-vertical">
                        <Button
                            tag={NavLink}
                            exact
                            to="/"
                            id="nav-buttons"
                            size="lg"
                        >
                            Home
                        </Button>
                        <Button
                            tag={NavLink}
                            to="/entryform"
                            id="nav-buttons"
                            size="lg"
                        >
                            Check-in
                        </Button>
                        <Button
                            tag={NavLink}
                            to="/myplaces"
                            id="nav-buttons"
                            size="lg"
                        >
                            Saved Locations
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
