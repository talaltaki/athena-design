import React from "react";
import { Row } from "react-bootstrap";
import "./Team.css";
import TeamCard from "./TeamCard";

const Team = () => {
  const teamCard = [
    {
      price: "$199",
      type: "For Basic",
      feature1: "Homepage",
      feature2: "No Inner Page",
      feature3: "Asset File",
      feature4: "Source File",
      feature5: "Free Stock Photos",
      feature6: "10 Days Free Support",
      feature7: "24/7 Support",
    },
    {
      price: "$399",
      type: "For Preferred",
      feature1: "Homepage",
      feature2: "4 Inner Pages",
      feature3: "Asset File",
      feature4: "Source File",
      feature5: "Free Stock Photos",
      feature6: "20 Days Free Support",
      feature7: "24/7 Support",
    },
    {
      price: "$599",
      type: "For Elite",
      feature1: "Homepage",
      feature2: "8 Inner Pages",
      feature3: "Asset File",
      feature4: "Source File",
      feature5: "Free Stock Photos",
      feature6: "30 Days Free Support",
      feature7: "24/7 Support",
    },
  ];

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center title font-weight-bolder">
        Choose Your Dedicated Team
      </h1>

      <Row className="m-0">
        {
          teamCard.map(team => <TeamCard team={team} key={team.price} />)
        }
      </Row>

      {/* <div className="row">
        {teamCard.map((team) => (
          // <div
          //   className="card col-12 col-md-6 col-lg-4 card-border border-0 shadow py-4"
          //   style={{ width: "100%" }}
          // >
          //   <div className="card-body text-center">
          //     <h1 className="font-weight-bolder" style={{ fontSize: "50px" }}>
          //       {team.price}
          //     </h1>
          //     <h5 className="text-secondary pb-3">{team.type}</h5>
          //     <hr className="w-75 bg-primary" />
          //     <p className="h5 pt-3">{team.feature1}</p>
          //     <p className="h5 pt-3">{team.feature2}</p>
          //     <p className="h5 pt-3">{team.feature3}</p>
          //     <p className="h5 pt-3">{team.feature4}</p>
          //     <p className="h5 pt-3">{team.feature5}</p>
          //     <p className="h5 pt-3">{team.feature6}</p>
          //     <p className="h5 pt-3">{team.feature7}</p>
          //     <button className="mt-5 btn-common">Order Now</button>
          //   </div>
          // </div>
          <TeamCard
        ))} */}
      {/* </div> */}
    </div>
  );
};

export default Team;
