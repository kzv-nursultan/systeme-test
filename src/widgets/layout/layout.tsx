import { ReactNode } from "react";
import { Header } from "../../features";

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
