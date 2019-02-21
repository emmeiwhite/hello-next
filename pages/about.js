import Layout from './../comps/MyLayout';

/*
export default ()=>(
    <Layout>
       
    </Layout>
)
*/

// Another way to use our Layout Component

const Page = ()=>(
    <p>This is the About Page</p>
)

export default ()=>(
    <Layout page={Page}/>
)