import React, { useContext, useState } from "react";
import { Context } from "../../context";
import { DropdownStyle } from "../../helper/types";
import "./styles.css";

export default function SideMenu() {
  const { state, dispatch } = useContext(Context);

  const { data } = state.menu;

  const [showSubmenu, setShowSubmenu] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  const [selectedItem, setSelectedItem] = useState<string>("");

  function handleShowSubmenu(index: number) {
    const temp: boolean[] = [...showSubmenu];
    temp[index] = !temp[index];
    setShowSubmenu(temp);
  }

  function isFloatStyle(style: DropdownStyle) {
    return style === "float";
  }

  function isFloatFirst(menu: typeof data, index: number) {
    const position = menu.findIndex((item) => item.style === "float");
    console.log(position);
    return position === 0 && index === 0;
  }

  return (
    <div className="w-56">
      <ul className="menu">
        {data.map((item, index) => {
          const isFloating = isFloatStyle(item.style as DropdownStyle);
          return (
            <li
              className={`menu-item ${isFloating ? "relative" : ""}`}
              key={index}
            >
              <button
                className={showSubmenu[index] ? "active" : ""}
                type="button"
                onClick={() => handleShowSubmenu(index)}
              >
                {item.name}
              </button>
              {item.children && (
                <ul
                  className={`
                  ${showSubmenu[index] ? "open" : ""} 
                  ${isFloating ? "submenu--float" : "submenu"}
                  ${isFloatFirst(data, index) ? "first" : ""}`}
                >
                  {item.children.map((child, idx) => {
                    const key: string =
                      item.name.toLowerCase().replace(" ", "") +
                      child.name.toLowerCase().replace(" ", "");

                    return (
                      <li className="submenu-item" key={idx}>
                        <button
                          className={
                            showSubmenu[index] && key === selectedItem
                              ? "active"
                              : ""
                          }
                          onClick={() => {
                            setSelectedItem(key);
                            dispatch({
                              type: "SET_SELECTED_ITEM",
                              payload:
                                item.name.toLowerCase().replace(" ", "") +
                                child.name.toLowerCase().replace(" ", ""),
                            });
                          }}
                        >
                          {child.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
        {/* <li className="menu-item menu-item--add">
          <button type="button" onClick={() => null}>
            Tambah Menu
          </button>
        </li> */}
      </ul>
    </div>
  );
}
