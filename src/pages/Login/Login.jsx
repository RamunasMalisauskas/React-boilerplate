import React, { useState } from "react";
import { Button, Section } from "../../components/";

function Home() {
  let [set, clickUp] = useState(0);

  return (
    <>
      <Section>
          login
        <Button color="primary" handleClick={() => clickUp(set + 1)}>
          {set}
        </Button>
      </Section>
    </>
  );
}

export default Home;
