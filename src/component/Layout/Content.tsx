import { useReducer } from "react";
import reducer, { initState, RoutePath } from "@/core/reducer";
import useRouter from "@/core/useRouter";

const Content = () => {
  const router = useRouter();
  return <div>일단 빈 화면</div>;
};

export default Content;
