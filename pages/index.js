import Layout from '../comps/MyLayout';

// Planning to create one small blog site now. 
// We'll be learning Dynamic Page Load based on the query string.

// I'll use Layout component and send all the page HTML (data) which will be accessed as props.children
// So I am again keeping the Layout code in that way.Let me change that to old condition
const Index = ()=>{
    return (
        <Layout>
            <p>Hello Next.js</p>
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