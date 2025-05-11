import React, { Suspense, Fragment, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { routes } from "src/routes";
import { createBrowserHistory } from "history";
import AuthContext from "src/context/Auth";
import PageLoading from "src/component/PageLoading";
import AuthGuard from "src/component/AuthGuard";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "src/theme";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const history = createBrowserHistory();
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);
  return null;
};


function App() {
  // const theme = createTheme();

  const theme = createTheme({
    typography: {
      fontFamily: "Playfair Display, sans-serif !important", // Specify Playfair Display as the font family
    },
  });
  console.log(theme);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Toaster position="top-right" reverseOrder={false} gutter={8} />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <AuthContext>
            <Router history={history}>
              <ScrollToTop />
              <RenderRoutes data={routes} />
            </Router>
          </AuthContext>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

function RenderRoutes(props) {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {props.data.map((route, i) => {
          const Component = route.component;
          const Guard = route.guard ? AuthGuard : Fragment;
          const Layout = route.layout || Fragment;
          return (
            <Route
              exact={route.exact}
              key={i}
              path={route.path}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      <RenderRoutes data={route.routes} />
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}
