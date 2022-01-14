import React, { useContext } from "react";
import { Context } from "../../context";
import "./styles.css";

export default function Home() {
  const {state} = useContext(Context);

  return (
    <div>
      <h1 className="heading">Home</h1>
      <p>{JSON.stringify(state.menu)}</p>
    </div>
  );
}
