import React, { useState } from "react";
import styles from "../styles/DropDown.module.scss";

export const DropDown = ({
  buttonText,
  list,
  onSelect,
  selectedItem,
  theme,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    toggleDropDown();
    onSelect(item);
    console.log(item);
  };

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`
  ${styles.DropDown}
  ${theme === "dark" ? styles.dark : ""}`}
    >
      <div className={styles.clickArea} onClick={toggleDropDown}>
        <span> {selectedItem || buttonText} </span>

        {isOpen ? (
          <i className="fas fa-angle-up"></i>
        ) : (
          <i className="fas fa-angle-down"></i>
        )}
      </div>

      <ul className={isOpen ? styles.open : ""}>
        {selectedItem && (
          <li onClick={() => handleSelect("dick")}>{buttonText}</li>
        )}
        {list.map((item) => (
          <li
            key={item}
            className={item === selectedItem ? styles.selected : ""}
            onClick={() => handleSelect(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
