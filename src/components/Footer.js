import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; all Right reserved</span>
        <Link href={'/'}>CodeBucks</Link>
        <Link href={'/'}>Say Hello</Link>
      </Layout>
    </footer>
  );
}
