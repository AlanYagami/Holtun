import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61573087637224&locale=es_LA' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/holtun.holistico/' },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="group flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo Holtun"
              width={40}
              height={40}
              className="object-contain transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:drop-shadow-lg"
            />
            <span className="font-headline text-2xl font-bold tracking-wider text-foreground transition-colors duration-300 group-hover:text-primary">
              HOLTUN
            </span>
          </Link>
          <p className="mt-4 text-foreground/70 text-base max-w-xs">
            Descubre la esencia de la naturaleza, embotellada con cuidado para tu bienestar.
          </p>
          <div className="flex space-x-6 mt-6">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} className="text-foreground/60 hover:text-primary transition-colors">
                <span className="sr-only">{social.name}</span>
                <social.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-base text-foreground/60 text-center">&copy; {new Date().getFullYear()} Esencia Holtun. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
