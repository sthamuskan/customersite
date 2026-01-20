import "./Profile.css";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import AddressCard from "../components/AddressCard";
import OrdersTable from "../components/OrdersTable";
import Footer from "../components/Footer";

export default function Profile() {
  return (
    <>
      <Navbar />

      <div className="profile-wrapper">
        <h2>Profile</h2>

        <div className="grid-two">
          <ProfileCard />
          <AddressCard />
        </div>

        <OrdersTable />
      </div>

      <Footer />
    </>
  );
}
