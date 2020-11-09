import React, { useState } from "react";
import { Button, Section } from "../../components/";

function Home() {
  let [set, clickUp] = useState(0);

  return (
    <>
      <Section background="#ff7f50">welcome to React BoilerPlate</Section>
      <Section>click it</Section>
      <Section border={true}>
        <Button color="primary" handleClick={() => clickUp(set + 1)}>
          {set}
        </Button>
      </Section>
    </>
  );
}

export default Home;
