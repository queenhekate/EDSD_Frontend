import React from "react";

function VolunteerTraining() {
  return (
    <main style={{ fontFamily: "'Oswald', Arial, sans-serif", padding: "1rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
        Volunteer Training Videos
      </h1>

      <p>These videos provide helpful insights and guidance for supporting people experiencing homelessness.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>1. Volunteer Orientation (Degage Ministries)</h2>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/sGkjGuAGP9A"
          title="Volunteer Day Center Training"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <h2 style={{ marginTop: "2rem" }}>2. Before You Volunteer</h2>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/VLqirmGDrVE"
          title="Volunteer Etiquette and Expectations"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <h2 style={{ marginTop: "2rem" }}>3. De-escalation Basics</h2>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/SVsc52NWuLM"
          title="De-escalation Training"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}

export default VolunteerTraining;
