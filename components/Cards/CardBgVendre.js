import React from "react";

export default function CardBgVendre() {
  return (
    <>
        <section className="relative block h-350-px">
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co/NKM0X4Y/bg-vendre.jpg')",
                }}
            >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-50 bg-black"
                    ></span>
            </div>

            <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                style={{transform: "translateZ(0)"}}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-gray-300 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
        </section>
    </>
  );
}

