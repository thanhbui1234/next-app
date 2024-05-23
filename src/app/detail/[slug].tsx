type Props = {}
import { useRouter } from 'next/router'
const DetailProduct = (props: Props) => {
  const router = useRouter()
  return (
        <><h1>{router.query.slug}</h1></>
  )
}

export default DetailProduct