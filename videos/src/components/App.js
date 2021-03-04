import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

const KEY = "AIzaSyDQfRsggJflwgzw4uRwhqEAe59K1QXDZ-g";

class App extends React.Component {
    state = {videos: []};
    onTermSubmit = async (term) => {
        console.log(term);
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: "video",
                key: KEY,
            },
        });
        this.setState({videos: response.data.items});
    };

    render() {
        return (
            <div>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
