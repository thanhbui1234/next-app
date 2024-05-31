'use client';
import React, { Fragment, useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hook';
import { useSelector } from 'react-redux';
import { JobSlice } from '@/interface';
import { fetchAllJob } from '@/lib/features/todo/todoSlice';
import { Button } from '@/components/ui/button';
import LoadingSpin from '@/components/ui/Loadings/LoadingSpin';
import ModalConfirm from '@/components/ui/alert';

const page = () => {
  const dispatch = useAppDispatch();
  const data = useSelector((state: JobSlice) => state.job.jobs);
  const loading = useAppSelector(state => state.job.loading);
  const [show,setShow] = useState(false);
  const handleShow = () =>{
    setShow(!show);
  }
  useEffect(() => {
    dispatch(fetchAllJob());
  }, []);

  if (loading === 'pending') return <div className="top-[30%] relative translate-x-[50%] translate-y-[50%]"><LoadingSpin></LoadingSpin></div>
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Index</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>ingameLol</TableHead>
            <TableHead>wallet</TableHead>
            <TableHead>image</TableHead>
            <TableHead>id</TableHead>
            <TableHead>TodoId</TableHead>
            <TableHead>Function</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item : any, index) => {
            return (
              <Fragment key={`${index}-${item.id}`}>
                <TableRow key={`${index}-${item.id}`}>
                  <TableCell className="font-medium">{index+1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.addRes}</TableCell>
                  <TableCell>{item.ingameLol}</TableCell>
                  <TableCell>{item.wallet}</TableCell>
                  <TableCell>{item.image}</TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.todoId}</TableCell>
                  <TableCell className='flex gap-2'>
                    <Button >Update</Button>
                    <Button onClick={handleShow}>Delete</Button>
                  </TableCell>
                </TableRow>
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
      <ModalConfirm show={show} handleShow={handleShow}></ModalConfirm>
    </>
  );
};

export default page;
