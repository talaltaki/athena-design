import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SubscriptionForm from "./Components/Footer/SubscriptionForm/SubscriptionForm";
import Footer from "./Components/Footer/MainFooter/Footer";
function App() {
  return (
    <div>
      <footer>
        <SubscriptionForm />
        <Footer />
      </footer>
    </div>
  );
}

export default App;
