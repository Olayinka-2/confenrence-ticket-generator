import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GenerateTicket from "./component/ticket-generated";
import MainContent from "./component/HomeContent";
import App from "./App";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <MainContent />
         },
         {
            path: "success",
            element: <GenerateTicket />
         }
      ],
   }
]);

export default router;