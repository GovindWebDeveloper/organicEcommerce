/* eslint-disable react/prop-types */
import { Drawer, Divider } from "antd";
import {
  MdOutlinePets,
  MdWash,
  FaShoppingBag,
  MdHealthAndSafety,
  FaBaby,
  GiHotSpices,
  FaGlassCheers,
  GiChipsBag,
  MdFreeBreakfast,
  FaBowlRice,
  RiFridgeLine,
  GiFruitBowl,
  CiPillsBottle1,
  GiMilkCarton,
  GiChickenOven,
  IoFishSharp,
  FaBreadSlice,
} from "../../Icon/Icon";

const DrawerComponent = ({ visible, onClose }) => {
  const listStyle = {
    listStyle: "none",
    color: "black",
    fontSize: "16px",
  };
  const iconStyle = {
    fontSize: "25px",
    marginRight: "10px",
    marginTop: "10px",
  };

  return (
    <>
      <Drawer title="MENU" placement="left" onClose={onClose} open={visible}>
        <a href="/">
          <li style={listStyle}>
            <GiFruitBowl style={iconStyle} />
            Fruits & Vegitables
          </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <GiMilkCarton style={iconStyle} />
          Dairy & Eggs
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <GiChickenOven style={iconStyle} />
          Meat & Poultry
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <IoFishSharp style={iconStyle} />
          Seafood
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <FaBreadSlice style={iconStyle} />
          Bakery & Bread
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <CiPillsBottle1 style={iconStyle} />
          Canned & Goods
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <RiFridgeLine style={iconStyle} />
          Frozen Foods
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <FaBowlRice style={iconStyle} />
          Paste & Rice
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <MdFreeBreakfast style={iconStyle} />
          Breakfast Foods
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <GiChipsBag style={iconStyle} />
          Snacks & Chips
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <FaGlassCheers style={iconStyle} />
          Beaverages
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <GiHotSpices style={iconStyle} />
          Spices & Seasonings
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <FaBaby style={iconStyle} />
          Babyfood & Formula
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <MdHealthAndSafety style={iconStyle} />
          Health & Wellness
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <FaShoppingBag style={iconStyle} />
          Household Supplies
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <MdWash style={iconStyle} />
          Personal Care{" "}
        </li>
        </a>
        <Divider />
        <a href="/">
        <li style={listStyle}>
          <MdOutlinePets style={iconStyle} />
          Pet Food & Supplies
        </li>
        </a>
      </Drawer>
    </>
  );
};
export default DrawerComponent;
