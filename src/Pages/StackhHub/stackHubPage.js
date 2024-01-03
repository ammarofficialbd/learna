import React from "react";
import stackHub from './../../features/StackHub/Books/stackHub';

function stackHubPage() {
  return (
    <div>
      <Navbar>
        <stackHub />
      </Navbar>
      <Footer />
    </div>
  );
}

export default stackHubPage;
