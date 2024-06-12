'use client';
import { SiCoderwall } from 'react-icons/si';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { useState } from 'react';
import { ModeToggle } from '../toggle-mode';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <nav className=" bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href={'/'}>
            <SiCoderwall className="cursor-pointer" />
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              Services
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle></ModeToggle>
            <DropdownMenu>
              <DropdownMenuTrigger>
              <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Loading...</AvatarFallback>
            </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='cursor-pointer'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Login</DropdownMenuItem>
                <DropdownMenuItem>Register</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
           
          </div>
        </div>
      </div>
    </nav>
  );
}
