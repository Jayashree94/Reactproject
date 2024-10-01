import Restocard from "./Restocard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setlistofRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="top-filter"
          onClick={() => {
            const filteredList = listofRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );

            setlistofRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resto-container">
        {listofRestaurant.map((restaurant) => {
          return <Restocard key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
