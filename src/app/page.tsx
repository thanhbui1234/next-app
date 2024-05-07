'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Button onClick={() => router.push('/dashboard')} >
    <Link href={'/dashboard'}>click me me may di</Link>
    </Button>
    </main>
  );
}
