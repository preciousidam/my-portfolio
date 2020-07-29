import Sidebar from '../components/Sidebar/sidebar';
import Header from '../components/Header/header';
import Footer from '../components/Footer';

export default function Main({children, toogle}){
    return(
        <div className="layout container-fluid">
            
            <Sidebar toogle={toogle}></Sidebar>
            <Header />
            <section className="mainContent">
                {children}
            </section>
            <Footer />
        </div>
    );
}