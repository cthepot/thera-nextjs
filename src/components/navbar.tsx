import React, { useState } from "react";
import Image from 'next/image';

function HeaderLink(props: { href: string; children: React.ReactNode }) {

  return (
    <a
      href={props.href}
      className={"test-base hover:text-gray-500"}
    >
      {props.children}
    </a>
  );
}

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a
          href="/"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/thera.svg"
            alt="Thera Logo"
            width={60}
            height={20}
            priority
          />
        </a>
        <nav className="flex hidden sm:flex items-center space-x-4">
          <HeaderLink href="#certification">Certification</HeaderLink>
          <HeaderLink href="#how-it-works">How it works</HeaderLink>
          <HeaderLink href="#health-supplements">Health supplements</HeaderLink>
        </nav>
      </div>
    </header>
  );
}
