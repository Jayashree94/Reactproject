import useRestMenu from "../Utils/useRestMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const loadMenu = useRestMenu(resId);
  if (loadMenu === null) return;
  <Shimmer />;

  //const {name,areaName,avgRating, costForTwoMessage} = loadMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    loadMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="restmenu">
      <h2>{loadMenu?.cards[2]?.card?.card?.info?.name}</h2>
      <h2>{loadMenu.cards[2].card.card.info.areaName}</h2>
      <h2>{loadMenu.cards[2].card.card.info.avgRating}</h2>
      <h2>{loadMenu.cards[2].card.card.info.costForTwoMessage}</h2>
      <h2> Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
