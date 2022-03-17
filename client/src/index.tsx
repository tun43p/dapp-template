import { StrictMode } from "react";
import { render } from "react-dom";

import Providers from "./utils/providers";
import GlobalRoutes from "./utils/routes";
import GlobalStyle from "./utils/style";

render(
  <StrictMode>
    <GlobalStyle />
    <Providers>
      <GlobalRoutes />
    </Providers>
  </StrictMode>,
  document.getElementById("app"),
);
