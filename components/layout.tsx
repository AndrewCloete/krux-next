import type { ReactNode } from "react";

import Navbar from "./navbar2";
import Footer from "./footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
