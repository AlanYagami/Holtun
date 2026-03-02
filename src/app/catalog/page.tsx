import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { categories } from '@/lib/data';

export default function CatalogPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-semibold">Nuestras Colecciones</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Explora nuestras colecciones seleccionadas, cada una diseñada para armonizar tu mente, cuerpo y espíritu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/catalog/${category.id}`} className="group">
              <Card className="overflow-hidden h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={category.image}
                    alt={category.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="font-headline text-2xl font-semibold">{category.name}</h2>
                  <p className="mt-2 text-foreground/70 flex-grow">{category.description}</p>
                  <span className="mt-4 text-primary font-semibold group-hover:underline flex items-center gap-2">
                    Comprar Ahora
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
