import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "hsl(195deg, 20%, 86%)",
          position: "fixed",
          height: "40%",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      ></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
