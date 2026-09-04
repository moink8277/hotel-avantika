import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "../common/WhatsAppButton";
import HotelSchema from "../../seo/HotelSchema";

/**
 * Layout
 * Persistent shell (Header + Footer) wrapping every route via <Outlet />.
 */
export default function Layout() {
  return (
    <>
      <HotelSchema />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}