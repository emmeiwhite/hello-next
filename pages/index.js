import Layout from '../comps/MyLayout';
import Link from 'next/link';

// Planning to create one small blog site now. 
// We'll be learning Dynamic Page Load based on the query string.

// I'll use Layout component and send all the page HTML (data) which will be accessed as props.children
// So I am again keeping the Layout code in that way.Let me change that to old condition. I mean in MYLayout.js


// Let's create PostLink component for each post link

// It's 22nd February... Let's learn ROUTE MASKING... To display our URL as other title ... Kind of mask the stuff

//  ROUTE MASKING Zabardast

const PostLink = (props)=>(
    <li>
        <Link as={`/imran/${props.id}`} href={`/post?title=${props.title}`}>
          <a>{props.title}</a>
        </Link>
    </li>
)

const Index = ()=>{
    return (
        <Layout>
            <h1>BLOG POST</h1>

            <ul>    
                <PostLink id="Vue-js" title="Vue js ki toh baat hi kuch oor hai"/>
                <PostLink id="Angular-js" title="Angular js kabhi alwadi na kehna "/>
                <PostLink id="React-js" title="React js ... Kal ho na Ho ..."/>
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