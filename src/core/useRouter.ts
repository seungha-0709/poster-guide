import { useReducer } from "react";
import router, { RoutePath, initRouteState } from "./router";

const useRouter = () => {
  const [state, dispatch] = useReducer(router, initRouteState);
  const route = (pathName: RoutePath) => {
    console.log("함수 실행!");
    console.log(pathName);
    dispatch({ type: "router", path: pathName });
  };
  console.log("!!", state);

  return {
    routeState: state,
    router: route,
  };
};

export default useRouter;
