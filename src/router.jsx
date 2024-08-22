import { createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home";
import ExerciseDetail from "./pages/Exercisedetail";
const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/exercise',
      element: <ExerciseDetail />,
    },
  ])
   export default router;