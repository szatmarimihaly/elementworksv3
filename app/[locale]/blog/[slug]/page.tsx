import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "next-sanity"
import groq from "groq"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"
import Hero from "@/components/Hero/Hero"
import Line from "@/components/Visual/Line"
import { Metadata } from "next"

type Props = {
  params : Promise<{
    locale : string,
    slug : string
  }>
}

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
    image?: any
    bio?: any
  }
  categories?: Array<{
    title: string
    slug: { current: string }
  }>
  body?: any
}

function BlogStructuredData({ post, locale }: { post: BlogPost, locale: string }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.mainImage ? urlFor(post.mainImage).url() : undefined,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'Unknown',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Elementworks',
      logo: {
        '@type': 'ImageObject',
        url: 'https://elementworks.eu/2.svg',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export async function generateMetadata({ params } : Props): Promise<Metadata> {
  
  const { locale, slug } = await params;

  const post: BlogPost | null = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug && language == $language][0] {
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
    { slug, language: locale }
  )

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined;

  return{
    title : post.title,
    description : post.excerpt,
    authors : post.author?.name ? [{ name: post.author.name }] : undefined, 
    openGraph : {
      title : post.title,
      description : post.excerpt,
      publishedTime : post.publishedAt,
      authors : post.author?.name ? [post.author.name] : undefined,
      images : imageUrl ? [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.mainImage?.alt || post.title 
        }
      ] : undefined,
    },
    twitter : {
      card : "summary_large_image",
      title : post.title,
      description : post.excerpt,
      images : imageUrl ? [imageUrl] : undefined
    },
    alternates: {
      canonical: `https://elementworks.eu/${locale}/blog/${slug}`,
      languages: {
        'hu': `https://elementworks.eu/hu/blog/${slug}`,
        'en': `https://elementworks.eu/en/blog/${slug}`,
      },
    },
  }
}

export default async function Page({ params } : Props) {

  const { locale, slug } = await params
  const t = await getTranslations({ locale })

  const post: BlogPost | null = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug && language == $language][0] {
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
    }`,
    { slug, language: locale }
  )

  if(!post) {
    notFound()
  }

  return(
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 lg:mt-10">
      <BlogStructuredData post={post} locale={locale} />
      <Hero title={post.title} description={post.excerpt}/>
      <Line />
      <article className="flex flex-col items-center max-w-4xl mx-auto w-full mt-10">

        {/* IMAGE */}
        {post.mainImage && (
          <Image 
            src={urlFor(post.mainImage).url()}
            alt={post.mainImage.alt || post.title}
            width={600}
            height={400}
            className="rounded mb-10"
          />            
        )}

        {/* BLOG CONTENT */}
        {post.body && (
          <section className="w-full prose prose-lg prose-invert max-w-none">
            <PortableText
              value={post.body}
              components={{
                types : {
                   image: ({ value }) => (
                    <div className="my-8 w-full">
                      <Image
                        src={urlFor(value).width(800).url()}
                        alt={value.alt || ''}
                        width={800}
                        height={600}
                        className="rounded-lg w-full h-auto"
                      />
                      {value.alt && (
                        <p className="text-sm text-gray-400 text-center mt-2 italic">
                          {value.alt}
                        </p>
                      )}
                    </div>
                  ),
                },
                block : {
                  h3: ({ children }) => (
                    <h2 className="text-4xl sm:text-2xl font-semibold text-gray-100 mt-6 mb-3 leading-snug">
                      {children}
                    </h2>
                  ),
                  h4: ({ children }) => (
                    <h2 className="text-4xl sm:text-2xl font-semibold text-gray-100 mt-6 mb-3 leading-snug">
                      {children}
                    </h2>
                  ),
                  normal: ({ children }) => (
                    <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed text-justify">
                      {children}
                    </p>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 sm:pl-6 py-2 my-6 italic text-gray-300 text-base sm:text-lg bg-gray-800/30 rounded-r">
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc list-outside ml-6 sm:ml-8 text-gray-400 mb-6 space-y-2 text-base sm:text-lg">
                      {children}
                    </ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal list-outside ml-6 sm:ml-8 text-gray-200 mb-6 space-y-2 text-base sm:text-lg">
                      {children}
                    </ol>
                  ),
                }
              }}
            ></PortableText>
          </section>
        )}        

        {/* DESCRIPTION */}
        <div className="w-full mx-auto flex flex-row items-center justify-between text-gray-200 mt-10">
          <h5 className="font-bold">{post.author?.name}</h5>
          <time dateTime={post.publishedAt} className="font-bold">
            {new Date(post.publishedAt).toLocaleDateString(locale, {
              year : 'numeric',
              month : 'long',
              day : 'numeric'
            })}
          </time>
        </div>
      </article>
    </main>
  )
}