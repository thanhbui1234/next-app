import CardItem from "@/components/Detail/Card";
import LoadingSpin from "@/components/ui/Loadings/LoadingSpin";
import { fetchJob } from "@/lib/features/todo/todoSlice";
import { featchJobDetail } from "@/lib/services";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 async function  getData  (id : any)  {
  const data  = await featchJobDetail(id) 
  return data.data;
};


export default async function page (context : any){
  const { id } = context.params;
  const forks = await getData(id);
  return <div className="flex items-center justify-center m-auto"><CardItem job={forks} ></CardItem></div>;

}


