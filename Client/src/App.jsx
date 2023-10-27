import Routes from "./routes/Routes";
import { StateContext } from "./config/Store";
export default function App() {
  return(
    <StateContext>
<Routes />
    </StateContext>
  )
   
}
