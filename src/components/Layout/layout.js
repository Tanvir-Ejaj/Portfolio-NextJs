import Menubar from "./Menubar/Menubar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Menubar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
