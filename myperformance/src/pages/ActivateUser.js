import React, { useEffect } from "react";

function ActivateUser() {
  const [activateStatus, setActivateStatus] = React.useState("");

  useEffect(() => {
    console.log("Activating user");
    // Simulating successful activation
    setTimeout(() => {
      setActivateStatus("User activated");
      window.location.href = "/login";
    }, 2000); // Simulating a delay of 2 seconds
  }, []);

  return (
    <>
      <div className="container">
        <p>{activateStatus}</p>
      </div>
    </>
  );
}

export default ActivateUser;