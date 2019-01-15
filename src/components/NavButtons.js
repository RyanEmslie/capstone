import React from "react";
import { Card, CardBody, Button } from "reactstrap";

import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function NavButtons() {
    return (
        <div>
            <Card className="nav-button-card">
                <CardBody>
                    <div className="btn-group-vertical">
                        <Button id="nav-buttons" size="lg">
                            Home
                        </Button>
                        <Button id="nav-buttons" size="lg">
                            Save Location
                        </Button>
                        <Button id="nav-buttons" size="lg">
                            Saved Locations
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
