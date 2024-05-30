'use client';
import Cards from '@/components/Card';
import { LoadingCart } from '@/components/ui/Loadings/LoadingCart';
import LoadingSpin from '@/components/ui/Loadings/LoadingSpin';
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

  if (loading === 'pending') return <div className="top-[30%] relative translate-x-[50%] translate-y-[50%]"><LoadingSpin></LoadingSpin></div>
  return (
    <main className="mt-20">
      <Cards data={data}></Cards>
    </main>
  );
}
