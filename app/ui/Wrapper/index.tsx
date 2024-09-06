import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-full">
      <div>Sider</div>
      <div className="flex grow flex-col">
        <Header />
        <Content>{children}</Content>
        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;
