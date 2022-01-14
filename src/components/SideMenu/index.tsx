import React, { useContext, useState } from "react";
import { Context } from "../../context";
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

  return (
    <div className="w-64">
      <ul className="menu">
        {data.map((item, index) => {
          return (
            <li className="menu-item" key={index}>
              <button
                className={showSubmenu[index] ? "active" : ""}
                type="button"
                onClick={() => handleShowSubmenu(index)}
              >
                {item.name}
              </button>
              {item.children && (
                <ul className={`${showSubmenu[index] ? "open" : ""} submenu`}>
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
