import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  console.log(router.query.slug);
  
  return <p>Post: {router.query.slug}</p>
}