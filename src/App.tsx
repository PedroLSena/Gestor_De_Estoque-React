import { RouterProvider } from "react-router-dom"
import router from "./router"
import { StockContextProvider } from "./context/Stockcontext"

function App() {

  return (
    <StockContextProvider>
      <RouterProvider router={router}/>
    </StockContextProvider>
  )
}
export default App
