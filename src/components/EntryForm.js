import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class EntryForm extends Component {
    render() {
        return (
            <Form>
                <FormGroup tag="fieldset">
                    <legend>Event Entry Form</legend>
                </FormGroup>
                <FormGroup>
                    <Label for="restName">Event</Label>
                    <Input
                        type="text"
                        name="event"
                        id="restName"
                        placeholder="Event Name"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="visitDate">Date Visited</Label>
                    <Input
                        type="date"
                        name="date"
                        id="visitDate"
                        placeholder="date placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Rating</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="commentsText">Comments</Label>
                    <Input type="textarea" name="text" id="commentsText" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default EntryForm;
