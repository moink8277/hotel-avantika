import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Dining from "./pages/Dining";
import Facilities from "./pages/Facilities";
import Explore from "./pages/Explore";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import HotelPolicies from "./pages/HotelPolicies";
import NotFound from "./pages/NotFound";

/**
 * App
 * Route table. NOTE: intentionally no "/banquets" route, per project
 * requirements — do not add one.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="rooms/:slug" element={<RoomDetails />} />
        <Route path="dining" element={<Dining />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="explore" element={<Explore />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="hotel-policies" element={<HotelPolicies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}