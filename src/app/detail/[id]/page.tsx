"use client"
import LoadingSpin from "@/components/ui/Loadings/LoadingSpin";
import { fetchJob } from "@/lib/features/todo/todoSlice";
import { AppDispatch, RootState } from "@/lib/store";
import {  useSearchParams  } from 'next/navigation'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const page = ({ params }: { params: { id: string } }) => {
  const dispatch  = useDispatch<AppDispatch>();
  const job = useSelector((state: RootState) => state.job.job);
  const loading = useSelector((state: RootState) => state.job.loading);
  
  useEffect(()=>{
    dispatch(fetchJob(params.id));
  },[params.id])
  
  if (loading === 'pending') return <div className="top-[30%] relative translate-x-[50%] translate-y-[50%]"><LoadingSpin></LoadingSpin></div>
  return <div>cc</div>;
};

export default page;
