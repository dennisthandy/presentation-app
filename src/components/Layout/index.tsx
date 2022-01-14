import React from "react";
import SideMenu from "../SideMenu";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-grow w-full">
      <SideMenu />
      <div className="flex-1">{children}</div>
    </div>
  );
}
