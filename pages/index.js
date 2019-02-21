import Layout from '../comps/MyLayout';
import Link from 'next/link';

// Planning to create one small blog site now. 
// We'll be learning Dynamic Page Load based on the query string.

// I'll use Layout component and send all the page HTML (data) which will be accessed as props.children
// So I am again keeping the Layout code in that way.Let me change that to old condition. I mean in MYLayout.js


// Let's create PostLink component for each post link

const PostLink = (props)=>(
    <li>
        <Link href={`/post?title=${props.title}`}>
          <a>{props.title}</a>
        </Link>
    </li>
)

const Index = ()=>{
    return (
        <Layout>
            <h1>BLOG POST</h1>

            <ul>    
                <PostLink title="Vue js"/>
                <PostLink title="Angular js"/>
                <PostLink title="React js"/>
            </ul>
           
        </Layout>
    )
}


/*
const Index = ()=>(
    <div>
        <p>Index Page...</p>
    </div>
)
export default ()=>(
    <Layout page={Index}/>
);

*/


export default Index;