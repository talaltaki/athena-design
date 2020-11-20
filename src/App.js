import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SubscriptionForm from "./Components/Footer/SubscriptionForm/SubscriptionForm";
import Footer from "./Components/Footer/MainFooter/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <footer>
        <SubscriptionForm />
        <Footer />
      </footer>
    </div>
  );
}

export default App;
