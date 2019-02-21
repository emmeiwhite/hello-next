import Header from './Header';

const styleLayout  = {
    padding:20,
    margin:20,
    border:'1px solid  #DDD'
}

const Layout = (props)=>(
    <div style={styleLayout}>
        <Header/>
        {/* <props.page/> */}
        {props.children}
    </div>
)

export default Layout;