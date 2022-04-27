import React from "react";
import { Link, useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  console.log("history object!", history);

  return (
    // <div className="not-found">
    //     <h1>404 Error - Page Not Found!</h1>

    //     <div className="back-link">
    //         {/* // * Button Option 1 - Use a <Link /> to go back to the Home screen */}
    //         {/* <Link className="back-link" to="/">Back to Home</Link> */}

    //         {/* // * Button Option 2 - Go back one step to the previous URL */}
    //         <button onClick={history.goBack}>Go Back</button>
    //     </div>

    //</div>

    <div class="ui placeholder segment">
      <div class="ui icon header">
        <i aria-hidden="true" class="angle double left icon"></i>404 Error -
        Page Not Found!
      </div>
      <button class="ui primary button" onClick={history.goBack}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
