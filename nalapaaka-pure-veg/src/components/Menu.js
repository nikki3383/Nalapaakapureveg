import React, { useState } from "react";
import Modal from "./Modal";
import "../styles/Styles.css";

import startersImage from "../menu-images/Starters-menu.jpg";
import curriesImage from "../menu-images/Curries-menu.jpg";
import rotiImage from "../menu-images/Roti-menu.jpg";
import riceImage from "../menu-images/Rice-menu.jpg";
import noodlesImage from "../menu-images/Noodles-menu.jpg";
import coldbeveragesImage from "../menu-images/Coldbeverages-menu.jpg";
import lassibuttermilk from "../menu-images/lassi-buttermil-menu.jpg";

const menuItems = {
  starters: {
    name: "Starters",
    image: startersImage,
  },
  curries: {
    name: "Curries",
    image: curriesImage,
  },
  roti: {
    name: "Roti",
    image: rotiImage,
  },
  rice: {
    name: "Rice",
    image: riceImage,
  },
  noodles: {
    name: "Noodles",
    image: noodlesImage,
  },
  soup: {
    name: "Soup",
    image: noodlesImage,
  },
  coldbeverages: {
    name: "Cold Beverages",
    image: coldbeveragesImage,
  },
  soda: {
    name: "Soda",
    image: coldbeveragesImage,
  },
  lassi: {
    name: "Lassi/Buttermilk",
    image: lassibuttermilk,
  },
  hotbeverages: {
    name: "Hot Beverages",
    image: lassibuttermilk,
  },
};

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (category) => {
    setSelectedItem(menuItems[category]);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <h1 className="Menu-heading">Our Menu</h1>
      <p style={{ color: "white" }}>Check out our delicious offerings!</p>

      <div className="menu-categories">
        {Object.keys(menuItems).map((category, index) => (
          <div
            key={index}
            className="menu-category"
            onClick={() => handleItemClick(category)}
          >
            <p>{menuItems[category].name}</p>
          </div>
        ))}
      </div>
      <Modal
        show={!!selectedItem}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </div>
  );
};

export default Menu;
