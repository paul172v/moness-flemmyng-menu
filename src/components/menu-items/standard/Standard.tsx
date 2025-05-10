import React from "react";

import classes from "./Standard.module.scss";

type Options =
  | "GF"
  | "DF"
  | "GF/DF"
  | "GF available"
  | "DF available"
  | "GF/DF available";

type Allergens =
  | "Ce"
  | "Cr"
  | "E"
  | "F"
  | "G"
  | "Lu"
  | "Mi"
  | "Mo"
  | "Mu"
  | "N"
  | "Pnut"
  | "Se"
  | "So"
  | "Sd"
  | "V"
  | "Vg";

interface IProps {
  name: string;
  price: number;
  allergens?: Allergens[] | null;
  description?: string | null;
  options?: Options | null;
}

const WhileYouWait = (props: IProps) => {
  const allergens = props.allergens?.join(",");

  return (
    <div className={classes.container}>
      <div className={classes["u-row"]}>
        {props.name}
        {props.options ? ` - ${props.options}` : ""}
      </div>
      <div className={classes["u-row"]}>
        <div className={classes.description}>{props.description}</div>
      </div>
      <div className={classes["u-row"]}>
        <div className={classes.price}>£{props.price}</div>
        <div className={props.allergens ? classes.allergens : ""}>
          {props.allergens ? `(${allergens})` : null}
        </div>
      </div>
    </div>
  );
};

export default WhileYouWait;
