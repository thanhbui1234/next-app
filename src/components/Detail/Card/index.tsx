import { BellRing, Check } from 'lucide-react';
import style from '@/components/Detail/Card/card.module.scss';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { JobSlice, job } from '@/interface';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchAllJob } from '@/lib/features/todo/todoSlice';
import { useAppDispatch } from '@/lib/hooks/hook';
import { useSelector } from 'react-redux';
const CardItem = ({ className, ...props }: any) => {
  const dispatch = useAppDispatch();
  const jobs = useSelector((state: JobSlice) => state.job.jobs);
  const [isOn, setisOn] = useState<boolean>(false);
  const { job } = props;
  const handleIsOn = () => {
    setisOn(!isOn);
    if(isOn) {
      dispatch(fetchAllJob())
    }
  };
   

  return (
    <Card  className={cn('w-[380px] mt-[150px] transition duration-150 ease-in-out', className)} {...props}>
      <CardHeader>
        <CardTitle>{job?.ingameLol}</CardTitle>
        <CardDescription>{`Your money is  ${job.wallet} $`}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Infomation another jobs
            </p>
            <p className="text-sm text-muted-foreground">Send jobs.</p>
          </div>
          <Switch checked={isOn} onCheckedChange={handleIsOn} aria-readonly />
        </div>
        {isOn && (
          <>
            <div className={style.jobNotification}>
              {jobs?.map((item: job, index: number) => (
                <div
                  key={`${index}-${item.id}`}
                  className="mb-4 grid grid-cols-[25px_1fr] hover:bg-slate-100 p-2 pb-4 items-start last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                <Link href={`${item.id}`}>
                    <p className="text-sm font-medium leading-none">
                      {item.name}
                    </p>
                </Link>

                    <p className="text-sm text-muted-foreground">
                      {item.addRes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
