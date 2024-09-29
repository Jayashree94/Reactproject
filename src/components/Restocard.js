const Restocard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRatingString, costForTwo, cuisines } =
    resData?.info;
  console.log();
  return (
    <div className="restocard">
      <h3> {name}</h3>
      <img
        className="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="logo-img"
      />
      <h4> {cuisines.join(",")}</h4>
      <h4> {avgRatingString}</h4>
      <h4> {costForTwo}</h4>
    </div>
  );
};

export default Restocard;
