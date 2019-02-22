import {withRouter} from 'next/router';
import Layout from '../comps/MyLayout';



const Content = (
    (props)=>(
        <Layout>
             <h1>{props.router.query.title}</h1>
             <p>This is the Post Content</p>
        </Layout>
           
    )
)


// const Page = (props)=>{
//     <Layout>
//         <Content/>
//     </Layout>
// }

export default withRouter(Content);