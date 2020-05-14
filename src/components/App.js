import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";

class App extends React.Component {

    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
        });
        this.setState({images: response.data.results});
        console.log(this.state.images);
    };

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    };
}

export default App;
