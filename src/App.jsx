import "./App.css";
import "./index.css";

import { About, Main, ContactUs, Features } from "./containers";

function App() {
  return (
    <section>
      {/* <Navbar /> */}
      <Main />
      <Features />
      <About />
      <ContactUs />
    </section>
  );
}

export default App;
