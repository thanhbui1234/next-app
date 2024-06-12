import { Fork, job } from '@/interface';
import style from '../Card/card.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import clsx from 'clsx';
import { checkImageBreak } from '@/lib/utils';
type Props = {
  data: any;
};

const Cards = (props: Props) => {
  const { data } = props;
  return (
    <div className={clsx('grid grid-cols-3 gap-10', style.cardContainer)}>
      {data.data?.map((item: Fork, index: number) => {      
        return (
          <Card
            className="hover:scale-105 duration-100 ease-in-out"
            key={`${index} + ${item.name}`}
          >
            <Link href={`/detail/${item.id}`}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className={style.content}>{item.price}</p>
                <Image
                className='rounded-lg max-h-[300px]'
                  src={item.image! ? item.image : '/public/empty.png'}
                  width={500}
                  height={300}
                  alt={item.name}
                />
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

export default Cards;
