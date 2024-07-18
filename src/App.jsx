import "./App.css";
import "./index.css";

import { About, Main, ContactUs, Features } from "./containers";

function App() {
  return (
    <section className="bg_main">
      {/* <Navbar /> */}
      <Main />
      <Features />
      <About />
      <ContactUs />
    </section>
  );
}

export default App;
