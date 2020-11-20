import React from "react";
import "./Team.css";

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
    <div className="container mt-5">
      <h1 className="text-center font-weight-bolder">
        Choose Your Dedicated Team
      </h1>

      <div className="d-flex justify-content-around mt-5">
        {teamCard.map((team) => (
          <div
            className="card card-border border-0 shadow py-4"
            style={{ width: "20rem" }}
          >
            <div className="card-body text-center">
              <h1 className="font-weight-bolder" style={{ fontSize: "50px" }}>
                {team.price}
              </h1>
              <h5 className="text-secondary pb-3">{team.type}</h5>
              <hr className="w-75 bg-primary" />
              <p className="h5 pt-3">{team.feature1}</p>
              <p className="h5 pt-3">{team.feature2}</p>
              <p className="h5 pt-3">{team.feature3}</p>
              <p className="h5 pt-3">{team.feature4}</p>
              <p className="h5 pt-3">{team.feature5}</p>
              <p className="h5 pt-3">{team.feature6}</p>
              <p className="h5 pt-3">{team.feature7}</p>

              <button className="mt-5">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
