import { Footer, Header } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="dark:bg-[rgb(3,3,51)] dark:text-gray-200 pt-5">
        <AllRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
