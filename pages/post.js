import {withRouter} from 'next/router';
import Layout from '../comps/MyLayout';



const Post = (props)=>(
    <Layout>
        <h1>{props.router.query.title}</h1>
        <p>This is the Post Content</p>
    </Layout>
)

export default withRouter(Post); // withRouter is a HOC