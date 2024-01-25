import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import "./main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Amplify } from "aws-amplify";
import config from "./utils/amplify-config.ts";

Amplify.configure(config);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
