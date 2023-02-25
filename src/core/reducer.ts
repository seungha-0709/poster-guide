type State = {
  currentRoute: RoutePathType;
};

export const RoutePath = {
  MAIN: "MAIN",
  UI_PREVIEW: "UI_PREVIEW",
} as const;

type RoutePathType = (typeof RoutePath)[keyof typeof RoutePath];

type Route = { type: "router"; payload: RoutePathType };
type DefaultAction = { type: string; payload: any };

export type Action = Route | DefaultAction;

export const initState: State = {
  currentRoute: RoutePath.MAIN,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "router":
      return {
        ...state,
        currentRoute: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
