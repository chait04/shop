import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeSceen";

function App() {
  return (
    <>
      <Header />
      <main className="mt-2">
        <Container>
          <h1>proshop</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
