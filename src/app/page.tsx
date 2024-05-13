'use client'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className="mt-20">
    <Button onClick={()=>router.push(`/dashboard`)}>Click </Button>
    </main>
  );
}
