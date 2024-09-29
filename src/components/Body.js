import Restocard from "./Restocard";
import resObj from "../Utils/MockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-container">
        {resObj.map((restaurant) => {
          return <Restocard key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
