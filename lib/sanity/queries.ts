// lib/sanity/queries.ts
import { groq } from 'next-sanity'

// Get all blog posts for a specific language
export const POSTS_QUERY = groq`*[_type == "post" && language == $language] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  author->{
    name,
    image
  },
  categories[]->{
    title,
    slug
  }
}`

// Get a single blog post by slug and language
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug && language == $language][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  body,
  author->{
    name,
    image,
    bio
  },
  categories[]->{
    title,
    slug
  }
}`

// Types
export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  author?: {
    name: string
    image?: any
    bio?: any
  }
  categories?: Array<{
    title: string
    slug: { current: string }
  }>
  body?: any
}