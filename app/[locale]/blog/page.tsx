// app/[locale]/blog/page.tsx
import { getTranslations } from "next-intl/server"
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Hero from "@/components/Hero/Hero"

type Props = {
  params: Promise<{
    locale: string
  }>
}

// Define the BlogPost type
type BlogPost = {
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
  }
  categories?: Array<{
    title: string
  }>
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  // Fetch all blog posts for the current language
  const posts: BlogPost[] = await client.fetch(
    groq`*[_type == "post" && language == $language] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      author->{
        name
      },
      categories[]->{
        title
      }
    }`,
    { language: locale }
  )

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <Hero title={t('Hero.blogTitle')} description={t('Hero.blogDescription')}/>

      <section className="section-top">
        {posts.length === 0 ? (
          <p>{t('Blog.notFound')}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post._id}
                className="border-2 border-gray-400/40 hover:border-gray-200/70 px-4 py-10 rounded-xl animate-thing border-gray gray-back"
              >
                {post.mainImage && (
                  <Link
                    href={`/${locale}/blog/${post.slug.current}`}
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                )}

                <h3 className="mt-4 text-center text-gray-200 text-2xl">{post.title}</h3>
                <p className="text-gray-400 mt-6">{post.excerpt}</p>
                
                <div className="flex items-center justify-between mt-4 text-gray-400">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString(locale)}
                  </time>
                  <p>{post.author?.name}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}