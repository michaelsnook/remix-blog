import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import { getPost } from '~/types/post'

export const loader: LoaderFunction = async ({ params }) => {
  return getPost(params.slug)
}

export default function PostSlug() {
  const post = useLoaderData()
  return (
    <>
      <h1 className="h1 font-semibold uppercase">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  )
}
