import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import InitialPage from "./initialPage";
import Mondrian from "./mondrian";
import {Provider} from "react-redux";
import store from "./stores/store"; 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/mondrian" element={<Mondrian />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;