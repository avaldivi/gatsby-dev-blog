import React from "react";
import { Image } from "../Image";
import * as styles from "./Coffee.module.scss";

const Coffee = ({ buyMeACoffeeLogo }) => {
  return (
    <div className={styles.coffee}>
      <a
        className={styles.link}
        href={"https://www.buymeacoffee.com/adriannavaldivia"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt="Buy me a coffee"
          path={buyMeACoffeeLogo}
          className={styles.photo}
        />
      </a>
    </div>
  );
};

export default Coffee;
