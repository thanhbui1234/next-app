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
import Link from 'next/link'
import Image from 'next/image'
const CardItem = ({ className, ...props }: any) => {
  const { job } = props;


  return (
    <Card  className={cn('w-[380px] mt-[150px] transition duration-150 ease-in-out', className)} {...props}>
      <CardHeader>
        <CardTitle>{job?.name}</CardTitle>
        <CardDescription>{`Your money is  ${job.price} $`}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
            {job?.description}
            </p>
            <p className="text-sm text-muted-foreground">Send jobs.</p>
          </div>
        </div>
          <Image src={job.image} width={500} height={500} alt={job.name}
      />
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> 
          <Link href='cc'>Edit</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
