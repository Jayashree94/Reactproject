import React from "react";
class Userclass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    }

    

    render() {
        const {name, location} = this.props;
        const {count} = this.state;

        return (
            <div className="user">
                <h2> {name}</h2>
                <h3> Count : {count}</h3>
                <button onClick={()=> {
                    this.setState({
                        count : this.state.count + 1,
                    })
                }}> Count btn</button>
                <h3> Name: Jayashree</h3>
                <h3> Locaion: {location}</h3>
                <h3> Mailto: jayashree@react.com</h3>
            </div>
        )

    }
}

export default Userclass;