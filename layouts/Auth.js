import React, { useEffect } from "react";

// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";


export default function Auth({ children }) {
  return (
    <>
      <IndexNavbar fixed />
      <main>
        <section className="relative w-full h-full py-20 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-green-500 bg-no-repeat bg-full"
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
