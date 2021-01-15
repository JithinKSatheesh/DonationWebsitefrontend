import Menu from './Menu'

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
    </div>
)

export default Layout