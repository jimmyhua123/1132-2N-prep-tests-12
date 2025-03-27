import { getBlogs } from '@/lib/db-blog';
import Blogs_12 from '@/components/demo/blogs_12/Blogs_12';
export default async function P3Page_12(){
  const blogs = await getBlogs();
  console.log('blogs', JSON.stringify(blogs));

  return (
    <Blogs_12 blogs={blogs}>

    </Blogs_12>
  )
}

 
