import { useState } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from './PostsComponent'

const queryClient = new QueryClient()

export default function App() {
  const [showPosts, setShowPosts] = useState(true)

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 16 }}>
        <h1>React Query Demo</h1>
        <button onClick={() => setShowPosts(p => !p)}>
          {showPosts ? 'Hide' : 'Show'} Posts
        </button>
        <p>(Unmount/mount to see cache behavior)</p>
        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  )
}

