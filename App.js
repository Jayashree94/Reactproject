import React from "react";
import ReactDOM from "react-dom/client";


const Header =() =>{
    return (
    <div className="header">
        <div className="logo">
        <img className="logo-img"src="https://img.freepik.com/free-vector/food-delivery-logo-with-bike-man-courier_1308-48914.jpg?t=st=1723423810~exp=1723427410~hmac=e80bc0b3b683460e77d51c9e34f4880fc6cf970cfe984b667c226539b78dcfb7&w=996" alt="food logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Contact Us</li>
                <li>Cart</li>
                
            </ul>
        </div>
    </div>
    )

};

const Body = () =>{
    return(
    <div className="body">
        <div className="search">
            Search
        </div>
        <div className="resto-container">
            <Restocard name="Thalapakatti" cuisine ="South Indian, Biryani, Chinese"/>
            <Restocard name="Adyar Ananda Bhavan" cuisine = "Snacks, Sweets"/>
            

        </div>
    </div>
    )
}

const Restocard = (props) => {
    const {name, cuisine} = props;
    return (<div className="restocard">
        <h3> {name}</h3>
        <img className="res-img" src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1290/https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-12-1290x1934.jpg" alt = "logo-img" />
        <h4> {cuisine}</h4>
        <h4>Star Rating ****</h4>
        <h4> 32 mins</h4>
    </div>)
    
}




const AppLayout =() => {
    return (
        <div id="App">
         <Header />   
         <Body />

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
