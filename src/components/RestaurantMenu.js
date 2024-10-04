import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [loadMenu, setLoadMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=485445&catalog_qa=undefined&submitAction=ENTER"
      
    );

    const json = await data.json();

    setLoadMenu(
      json.data
    );
    
  };

  if( loadMenu.length === 0 ) return
    <Shimmer />;
  
  //const {name,areaName,avgRating, costForTwoMessage} = loadMenu?.cards[2]?.card?.card?.info;
  const {itemCards} = loadMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return(
    <div className="restmenu">
        
        <h1> loaded</h1>
        <h2>{loadMenu?.cards[2]?.card?.card?.info?.name}</h2>
        <h2>{loadMenu.cards[2].card.card.info.areaName}</h2>
        <h2>{loadMenu.cards[2].card.card.info.avgRating}</h2>
        <h2>{loadMenu.cards[2].card.card.info.costForTwoMessage}</h2>
        <h2> Menu</h2>
        <ul>
        {itemCards.map((item)=> <li>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
        </ul>
    
        
    </div>
  );
};

export default RestaurantMenu;
