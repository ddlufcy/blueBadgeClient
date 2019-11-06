import React from "react";

const Home = () => {

    const listStyles={
        height: "20px",
        marginLeft: "1em",
        borderRadius: "10px"
    }

    // const borderStyle={
    //     borderRadius: "10px",
    // }

    return(
        <div className="welcome">
            <div className="main">
                <div className="mainDiv">
                    <h2>Welcome</h2>
                    <p>This site contains 300+ mountain bike trails located all over Indiana</p>    
                    <p>Trails are sorted by difficulty ranging from Beginner to Expert so there is sure to be something for everyone.</p>
                    <hr />
                    <h3>How To Use:</h3>
                    <ol>
                        <li>Select a difficulty on the sidebar.</li>
                        <li>Press "add" button to add to your favorites</li>
                        <li>Go to "My favorites" on the sidebar to view and edit your trails.</li>
                    </ol>
                    <h3>Difficulty Explained:</h3>
                        <ul style={{listStyle: "none"}}>
                            <li>"B" Beginner Trails<img style={listStyles} src="https://cdn.apstatic.com/img/diff/green.svg"></img></li>
                            <li>"BI" Beginner/Intermediate Trails<img style={listStyles} src="https://cdn.apstatic.com/img/diff/greenBlue.svg"></img></li>
                            <li>"I" Intermediate Trails<img style={listStyles} src="https://cdn.apstatic.com/img/diff/blue.svg"></img></li>
                            <li>"IA" Intermediate/Advanced Trails<img style={listStyles} src="https://cdn.apstatic.com/img/diff/blueBlack.svg"></img></li>
                            <li>"A" Advanced Trails<img style={listStyles}  src="https://cdn.apstatic.com/img/diff/blueBlack.svg"></img></li>
                            <li>"AE" Advanced/Expert Trails <img style={listStyles} src="https://cdn.apstatic.com/img/diff/black.svg"></img></li>
                            <li>"E" Expert Trails <img style={listStyles} src="https://cdn.apstatic.com/img/diff/dblack.svg"></img></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;