import { Skeleton } from '@/components/ui/skeleton';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function LoadingCart() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <Card className="h-[225px] w-[301px]">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-4 w-[250px]"></Skeleton>
          </CardTitle>
          <CardDescription className="h-10 w-[250px]">
            <Skeleton></Skeleton>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-[250px]"></Skeleton>
        </CardContent>
        <CardFooter>
          <Skeleton className="h-4 w-[250px]"></Skeleton>
        </CardFooter>
      </Card>
    </div>
  );
}
