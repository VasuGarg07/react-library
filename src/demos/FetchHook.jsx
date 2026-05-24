import { useFetch } from '../hooks/useFetch';

const FetchHook = () => {
    const { isLoading, data, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data && data.map(post => (
                <div key={post.id} style={{ marginBottom: 12, padding: 12, border: '1px solid #d2d2d7', borderRadius: 8 }}>
                    <strong>{post.title}</strong>
                    <p style={{ margin: '4px 0 0', fontSize: 13, color: '#6e6e73' }}>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default FetchHook
