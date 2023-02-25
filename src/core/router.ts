import {
  lazy,
  LazyExoticComponent,
  PropsWithChildren,
  ReactElement,
} from "react";

export const RoutePath = {
  MAIN: "Home",
  UI_PREVIEW: "UiPreview",
} as const;

export type RoutePath = (typeof RoutePath)[keyof typeof RoutePath];

type RouteState = {
  path: RoutePath;
  component: LazyExoticComponent<
    (props: PropsWithChildren | any) => ReactElement
  >;
};

type RouteAction = {
  type: "router";
  path: (typeof RoutePath)[keyof typeof RoutePath];
};

export const initRouteState: RouteState = {
  path: RoutePath.MAIN,
  component: lazy(() => import("../pages/Home")),
};

const routeReducer = (state: RouteState, action: RouteAction): RouteState => {
  return {
    ...state,
    path: action.path,
    component: lazy(async () => await import(`../pages/${action.path}.tsx`)),
  };
};

export default routeReducer;
