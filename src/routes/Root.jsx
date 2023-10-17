import {Outlet} from 'react-router-dom';
import {Header} from "../Components/Header/Header";
import {Main} from "../Components/Layout/Main/Main";
import {Footer} from "../Components/Footer/Footer";
import ScrollToTop from "../../inspired-react/src/ScrollTop";

export const Root = () => {
  return (
      <>
          <ScrollToTop />
          <Header />
          <Main>
              <Outlet />
          </Main>
          <Footer />
      </>
  )
}