import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import "./styles.css";

export default function Home() {
  const {state} = useContext(Context);

  return (
    <div className="flex items-center justify-center">
      <Link to="/presentation" className="p-2 text-white bg-blue-400 rounded">
        Presentasi Sekarang
      </Link>
    </div>
  );
}
