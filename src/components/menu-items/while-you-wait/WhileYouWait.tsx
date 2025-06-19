import React from "react";

import classes from "./WhileYouWait.module.scss";

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
}

const WhileYouWait = (props: IProps) => {
  return (
    <div className={classes.container}>
      {props.name}
      {props.allergens && props.allergens.length > 0
        ? ` (${props.allergens}) `
        : ""}{" "}
      <div className={classes.price}>£{props.price.toFixed(2)}</div>
    </div>
  );
};

export default WhileYouWait;
