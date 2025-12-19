import AllProducts from '@/components/AllProducts'
import PopularProducts from '@/components/PopularProducts'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] lg:grid-cols-[minmax(220px,2fr)_1fr] gap-5 m-0 py-5 md:py-6">
        <AllProducts
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
        />
        <div>
          <h2 className="py-3 text-xl">Popular Products</h2>
          <PopularProducts posts={posts} layout={'1fr'} initialDisplayPosts={'4'} />
        </div>
      </div>
    </div>
  )
}
