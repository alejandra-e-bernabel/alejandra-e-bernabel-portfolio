'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface NavItem {
  name: string;
  icon: string;
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { name: "home", icon: "icons/home-icon-silhouette.svg", href: "/home", label: "Home" },
  { name: "terminal", icon: "icons/terminal.svg", href: "/projects", label: "Projects" },
  { name: "student", icon: "icons/student.svg", href: "/education", label: "Education" },
  { name: "briefcase", icon: "icons/suitcase.svg", href: "/work", label: "Work History" },
  { name: "quill", icon: "icons/writing.svg", href: "/testimonials", label: "Testimonials" },
  { name: "message", icon: "icons/message.svg", href: "/contact", label: "Contact Me" },
];

const NavMenu = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="right-0 top-0 h-screen flex items-center" style={{ backgroundColor: 'var(--background)' }}>
      <ul className="flex flex-col space-y-4 px-6 py-8">
        {navItems.map((item) => (
          <li key={item.name} className="relative">
            <Link
              href={item.href}
              className="block"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  hoveredItem === item.name
                    ? "bg-[#FFB400]"
                    : "bg-[#F0F0F6]"
                }`}
              >
                <div className="w-6 h-6 relative">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    fill
                    className={`object-contain transition-all duration-200 ${
                      hoveredItem === item.name
                        ? "brightness-0"
                        : "brightness-0 opacity-[0.46]"
                    }`}
                    style={{
                      filter: hoveredItem === item.name
                        ? "brightness(0)"
                        : "brightness(0) opacity(0.46)"
                    }}
                  />
                </div>
              </div>
              {hoveredItem === item.name && (
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1.5 rounded text-sm whitespace-nowrap">
                  {item.label}
                  <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800"></div>
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
