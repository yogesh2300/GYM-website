import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Join our expert-led workout sessions designed to build strength, improve endurance, and transform your body. Whether you're a beginner or a pro, we’ve got the perfect plan to push you past your limits and help you achieve your fitness goals.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Explore our intense bootcamp sessions designed to push your limits, boost your strength, and elevate your fitness journey. Perfect for all levels, guided by certified trainers.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning</h4>
            <p>
              Build muscle, improve stamina, and develop explosive power with our high-intensity strength workouts led by expert coaches.
            </p>
          </div>
          <div>
    <h4>Fat Burn HIIT</h4>
    <p>
      Burn calories fast with our fat-blasting HIIT sessions. Designed to increase your heart rate and keep the fat melting away.
    </p>
  </div>
  <div>
    <h4>Endurance Training</h4>
    <p>
      Improve your cardiovascular health and endurance with dynamic full-body workouts that challenge your limits every time.
    </p>
  </div>
  <div>
    <h4>Core & Flexibility</h4>
    <p>
      Strengthen your core, improve posture, and increase flexibility through focused movement and mobility routines.
    </p>
  </div>
</div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
