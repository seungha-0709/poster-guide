import { PropsWithChildren } from "react";

const Main = (props: PropsWithChildren) => {
  return <main id="absolute-main">{props.children}</main>;
};

export default Main;
