import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(['posts'], fetchPosts, {
    staleTime: 1000 * 60,      // data fresh for 1 min
    cacheTime: 1000 * 60 * 5,  // keep in cache 5 mins after unmount
    refetchOnWindowFocus: false,
  })

  if (isLoading) return <p>Loading posts...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div style={{ marginTop: 12 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={() => refetch()}>Refetch Posts</button>
        {isFetching && <span>Fetching…</span>}
      </div>
      <ul>
        {data.slice(0, 10).map(p => (
          <li key={p.id}><strong>{p.title}</strong></li>
        ))}
      </ul>
      <small>Tip: Click “Hide Posts” then “Show Posts” to see instant cached data.</small>
    </div>
  )
}
