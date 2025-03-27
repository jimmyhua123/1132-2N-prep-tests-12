import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header_12 from "@/components/Header_12";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The Wild Oasis - 12",
  description: "This is description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin}antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header_12 />

        <div className="flex-1 px-8 py-12 ">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
