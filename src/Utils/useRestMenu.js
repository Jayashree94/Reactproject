import { useEffect, useState } from "react";
const useRestMenu = (resId) => {
  const [loadMenu, setloadMenu] = useState(null);

  useEffect(() => { 
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log("inside customhook" + json);

    setloadMenu(json.data);
  };
  return loadMenu;
};

export default useRestMenu;
