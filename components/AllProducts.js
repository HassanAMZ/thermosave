'use client'
import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/components/ui/input'

export default function ListLayout({ posts, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')

  const filteredProductsPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredProductsPosts

  return (
    <div className="container mx-auto max-w-7xl px-4">
      <h2 className="text-xl py-3">All Products</h2>
      <div className="py-5 md:py-6">
        <div className="relative">
          <Input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="Search Products"
            placeholder="Search Products"
            className="border-red-500 bg-white text-red-600 font-bold pr-10"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Search className="h-5 w-5 text-red-500" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {!filteredProductsPosts.length && 'No posts found.'}
        {displayPosts.map((frontMatter, index) => {
          const { slug, date, title, summary, tags, coverImage, price, unit } = frontMatter
          return (
            <ProductCard
              slug={slug}
              date={date}
              title={title}
              summary={summary}
              tags={tags}
              coverImage={coverImage}
              price={price}
              unit={unit}
              key={index}
            />
          )
        })}
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  )
}
