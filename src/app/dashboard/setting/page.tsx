import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
const setting = () => {
  return (
    <div>
      <Button variant={'destructive'}>
        <Link href="/dashboard#settingss">Settings</Link>
      </Button>
      <Button>
        {' '}
        <a href="/dashboard#settingss">Settings</a>
      </Button>
    </div>
  );
};

export default setting;
