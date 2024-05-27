'use client';
import Cards from '@/components/Card';
import { LoadingCart } from '@/components/ui/Loadings/LoadingCart';
import { JobSlice } from '@/interface';
import { fetchAllJob } from '@/lib/features/todo/todoSlice';
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hooks/hook';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
export default function Home() {
  const dispatch = useAppDispatch();
  const data = useSelector((state: JobSlice) => state.job.jobs);
  const loading = useAppSelector(state => state.job.loading);

  useEffect(() => {
    dispatch(fetchAllJob());
  }, []);

  if (loading === 'pending') return <LoadingCart></LoadingCart>;
  return (
    <main className="mt-20">
      <Cards data={data}></Cards>
    </main>
  );
}
