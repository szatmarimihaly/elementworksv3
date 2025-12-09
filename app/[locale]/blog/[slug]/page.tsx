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
    <main className="">
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