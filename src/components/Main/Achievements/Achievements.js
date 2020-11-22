import React from "react";

const Achievements = () => {
  const achievementCards = [
    {
      image: "https://i.ibb.co/801sq7W/output-onlinepngtools.png",
      number: "700+",
      title: "Happy Clients",
      radius: "0 50px",
    },
    {
      image: "https://i.ibb.co/5YXhzdN/marketing-2x.png",
      number: "140+",
      title: "Projects Completed",
      radius: "50px 0",
    },
    {
      image: "https://i.ibb.co/LgGPFNL/surface1-2x.png",
      number: "25+",
      title: "Crazy Minds",
      radius: "50px 0",
    },
    {
      image: "https://i.ibb.co/wCfz0D3/transportation-2x.png",
      number: "75+",
      title: "Running Projects",
      radius: "0 50px",
    },
  ];

  return (
    <div className="row">
      <div className="container d-flex mt-5">
        <div className="col-md-4 align-self-center">
          <h1>Our Achievements</h1>
          <small>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letter.
          </small>
        </div>
        <div className="col-md-8">
          <div className="row">
            {achievementCards.map((achievement) => (
              <div className="col-md-6">
                <div
                  className="card mt-4 py-2 shadow"
                  style={{
                    borderRadius: `${achievement.radius}`,
                    border: "none",
                  }}
                >
                  <div className="card-body align-self-center">
                    <div className="d-flex">
                      <img
                        src={achievement.image}
                        alt=""
                        className="img-fluid align-self-center"
                        style={{ height: "55px" }}
                      />
                      <div className="ml-5 mt-2 text-secondary">
                        <h2 className="font-weight-bolder">
                          {achievement.number}
                        </h2>
                        <p className="h5 font-weight-light">
                          {achievement.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
