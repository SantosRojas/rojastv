'use client'
import {
  UserGroupIcon,
  HomeIcon,
  FilmIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Nacionales', href: '/?category=nacionales', icon: HomeIcon },
  {
    name: 'Peliculas',
    href: '/?category=peliculas',
    icon: FilmIcon ,
  },
  { name: 'Dibujos', href: '/?category=dibujos', icon: UserGroupIcon },
  { name: 'Cable', href: '/?category=cable', icon: SparklesIcon }
];

export default function NavLinks() {
  const params = useSearchParams()
  const category = params.get("category")|| "nacionales"
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 
            text-sm font-medium hover:bg-violet-200 hover:text-violet-600 md:flex-none md:justify-start md:p-2 md:px-3
            ${category ===link.href.split("=")[1] ? " bg-violet-200 text-violet-700": ""} 
            `}
            onClick={(e)=> console.log(link.href.split("=")[1],category)}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
