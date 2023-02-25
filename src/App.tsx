import { PropsWithChildren, Suspense, useReducer } from "react";
import Layout from "@/component/Layout/Layout";
import "./index.css";
import routeReducer, { initRouteState, RoutePath } from "./core/router";

const App = (props: PropsWithChildren) => {
  const [routeState, routeDispatch] = useReducer(routeReducer, initRouteState);

  const router = (pathName: RoutePath) => {
    routeDispatch({ type: "router", path: pathName });
  };
  const Component = routeState.component;

  return (
    <Suspense fallback={<div>로딩 중</div>}>
      <Layout>
        <Component router={router} />
      </Layout>
    </Suspense>
  );
};

export default App;
