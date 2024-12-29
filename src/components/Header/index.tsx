"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-1.5 p-1.5 transition-all duration-300 hover:scale-105"
          >
            <span className="sr-only">Thiago Morgado Dev</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Thiago Morgado
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-blue-400 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      {/* Mobile menu */}
      <div
        className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-all duration-300"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0A0F1C] px-6 py-6 sm:max-w-sm border-l border-blue-500/10 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <a
              href="/"
              className="-m-1.5 p-1.5 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Thiago Morgado Dev</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Thiago Morgado
              </span>
            </a>
            <Button
              variant="ghost"
              className="-m-2.5 rounded-full p-2.5 text-gray-300 hover:text-gray-100 hover:bg-gray-800/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-2 flow-root">
            <div className="-my-6">
              <div className="space-y-3 py-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-gray-300 hover:text-white hover:bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-transparent hover:border-blue-500/20 transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
