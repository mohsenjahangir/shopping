import { ReactNode } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="">
        <div className=""> 
           <Header />
        </div>
        <div className="">
          {children}
        </div>
        <div>
          <Footer />
        </div>
        
      </div>
    </>
  );
}
