import { ReactNode } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

const noLayoutRoutes = ["/login", "/logout"];

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const noLayout = noLayoutRoutes.includes(router.pathname);
  return (
    <>
      <div className="">
        {!noLayout && <Header />}
        <div className="">{children}</div>
        {!noLayout && <Footer />}
      </div>
    </>
  );
}
