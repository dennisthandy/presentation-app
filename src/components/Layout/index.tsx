import React from "react";
import SideMenu from "../SideMenu";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex w-full overflow-hidden">
      <SideMenu />
      <div className="flex-1 min-h-screen bg-slate-400">{children}</div>
    </div>
  );
}
