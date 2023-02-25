import useRouter from "@/core/useRouter";
import { RoutePath } from "@/core/router";
import { PropsWithChildren } from "react";

const Home = (props: any) => {
  const { router } = props;

  return (
    <div>
      첫 화면
      <div>
        <p>라우트 실험</p>
        <div onClick={() => router(RoutePath.UI_PREVIEW)}>
          클릭하면 라우트가 변할까?
        </div>
      </div>
    </div>
  );
};

export default Home;
