import Cards from '@/components/Card';
import { job } from '@/interface';
import { fetchJobs } from '@/lib/services';
import { AxiosResponse } from 'axios';
import { Sidebar } from 'lucide-react';
export default async function Home() {

  // i don't know why i'm in error type ;
  const data = await fetchJobs();
  return (
    <main className="mt-20">
      <Sidebar></Sidebar>
      <Cards data={data}></Cards>
    </main>
  );
}
