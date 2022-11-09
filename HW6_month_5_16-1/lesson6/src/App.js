import {Route, Routes} from "react-router-dom";
import CrudPizza from "./pages/CRUDPizza/CRUDPizza";
import MainComponent from "./components/mainComponent";
import OrderPizza from "./pages/orderPizza/OrderPizza";

function App() {
  return (
      <>
          <MainComponent/>
          <Routes>
              <Route path="/dishes" element={<CrudPizza/>}/>
              <Route path="/orders" element={<OrderPizza/>}/>
          </Routes>
      </>
  );
}

export default App;
