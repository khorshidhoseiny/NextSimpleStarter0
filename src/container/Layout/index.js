import Header from "./Header";
import Footer from "./Footer"
const Layout = ({children}) => {
    return (<div className="bg-gray-100 w-full h-screen flex flex-col">
        <Header/>
        {children}
        <Footer/>
    </div>
   

    );
}
 
export default Layout;