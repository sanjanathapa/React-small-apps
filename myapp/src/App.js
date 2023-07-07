import "bulma/css/bulma.css";
import React from "react";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants!</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-2">
              <ProfileCard
                title="Alexa"
                handle="@Sanjana"
                image={AlexaImage}
                description="Alexa was created by Amazon and helps you to buy things"
              />
            </div>
            <div className="column is-2">
              <ProfileCard
                title="Cortona"
                handle="@Shashi"
                image={CortanaImage}
                description="Cortona was made by Microsoft. Who knows what it does"
              />
            </div>
            <div className="column is-2">
              <ProfileCard
                title="Siri"
                handle="@Ujjwal"
                image={SiriImage}
                description="Siri was made by Apple and is being phased out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
