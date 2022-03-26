import {FC} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Maine from "../components/Maine";

const Layout: FC = () => {

    return (
        <div className="Layout">
            <Header/>
            <Maine/>
            <Footer/>
        </div>
    )
}
export default Layout;