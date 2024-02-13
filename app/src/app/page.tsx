'use client';
import Image from 'next/image';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';
import Checkbox from '@/components/common/checkbox/Checkbox';
// import Button from '@/components/button/Button';

export default function Home() {
  return (
    <main>
      <Button>버튼</Button>
      <Input />
      <Checkbox id='1' label='가나다라' />
    </main>
  );
}
