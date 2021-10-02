
// Example get static props that executes a 308 redirect.
// Note: no actual default func required here.
export async function getStaticProps() {
    return {
        // notFound: true, // Triggers a 404 not found.
        redirect: {
            destination: '/',
            permanent: true // Triggers a 308 redirect.
        }
    }
}