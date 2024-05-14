"use client";
import vazirFont from "@/constants/localFonts";
import "./globals.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const metadata = {
  title: "Next Trade",
  description: "Next.js Trade App",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans bg-[#717171]`}
      >
        <div className="bg-[#182122]">
          <div className="grid grid-cols-5 grid-flow-row ">
            <div className="p-5 text-center border-r border-gray-600 hidden lg:flex row-start-1 row-end-4">
              {" "}
              <Sidebar />
            </div>
            <div className="p-5 text-center col-start-1  lg:col-start-2 col-end-6">
              <Header />
            </div>

            <div className="col-start-1 lg:col-start-2 col-end-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
