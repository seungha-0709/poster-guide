import { PropsWithChildren } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
