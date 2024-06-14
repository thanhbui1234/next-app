'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hook';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signUp } from '@/interface/auth';
import {  loginSchema } from '@/lib/schema/auth';

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const {
    formState: { errors },
    reset,
  } = useForm<signUp>();
  const dispact = useAppDispatch();
//   const loading = useAppSelector(state => state.job.loading);
//   const respone: any = useAppSelector(state => state.job.response);
  const onSubmit: SubmitHandler<signUp> = data => {
    };
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-10 py-16"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button type="submit">
          {/* {loading === 'pending' ? 'Loading' : 'Send'} */}

          Send
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
