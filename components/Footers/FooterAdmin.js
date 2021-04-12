import React from "react";
import Link from "next/link";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-gray-600 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=twnjs-footer-admin"
                  className="text-gray-600 hover:text-gray-800 text-sm font-semibold py-1"
                >
                  ecoechange.com
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
				  <Link href="/footer/about">
					  <a
						href="https://www.creative-tim.com/presentation?ref=twnjs-footer-admin"
						className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
					  >
						Qui sommes-nous
					  </a>
				  </Link>
                </li>
                <li>
				  <Link href="/footer/policy">
					  <a
						href="http://blog.creative-tim.com?ref=twnjs-footer-admin"
						className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
					  >
						Politique de confidentialité
					  </a>
				  </Link>
                </li>
                <li>
				  <Link href="/footer/data_personal">
					  <a
						href="https://github.com/creativetimofficial/tailwind-webapp-nextjs/blob/master/LICENSE.md?ref=twnjs-footer-admin"
						className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
					  >
						Données personnelles
					  </a>
				  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
