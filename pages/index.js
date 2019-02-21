import Layout from '../comps/MyLayout';

/*
const Index = ()=>{
    return (
        <Layout>
            <p>Hello Next.js</p>
        </Layout>
    )
}
*/

const Index = ()=>(
    <div>
        <p>Index Page...</p>
    </div>
)
export default ()=>(
    <Layout page={Index}/>
);