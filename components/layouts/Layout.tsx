import { ReactNode } from "react";
import {Header} from "./header/Header";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className=" 2xl:mx-10  lg:mx-3 mt-12">
          <Header />
      </div>
    
      <div className="">{children}</div>
    </div>
  );
}
