import React, { Component } from "react";
import ShowMap from "../ShowMap";
import EntryForm from "../EntryForm";
import Header from "../Header";
import NavBar from "../NavBar";

class Search extends Component {
    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <ShowMap />
                <EntryForm />
            </div>
        );
    }
}

export default Search;
