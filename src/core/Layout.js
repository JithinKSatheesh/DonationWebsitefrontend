import Menu from './Menu'
import Footer from "./Footer";

const Layout = ({
    className,
    children
})=>(
    <div>
        <div className="space-20"/>
        <Menu/>        
        <div className={className}>
            {children}
        </div>
        <Footer/>
    </div>
)

export default Layout