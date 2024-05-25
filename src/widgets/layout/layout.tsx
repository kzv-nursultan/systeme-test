import { ReactNode } from "react";
import Header from "./header";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="m-3">{children}</div>
    </>
  );
}
