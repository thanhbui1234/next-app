import { job } from '@/interface';
import style from '../Card/card.module.scss';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import clsx from 'clsx';
type Props = {
  data: job[];
};

const Cards = ({ data }: Props) => {
  return (
    <div className={clsx('grid grid-cols-3 gap-5', style.cardContainer)}>
      {data.map((item, index) => {
        return (
          <Card
            className="hover:scale-105 duration-100 ease-in-out"
            key={`${index} + ${item.addRes}`}
          >
            <Link href={`/detail/${item.id}`}>
              <CardHeader>
                <CardTitle>{item.ingameLol}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p className={style.content}>Card Content</p>
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
