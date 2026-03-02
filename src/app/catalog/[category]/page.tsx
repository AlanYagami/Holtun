import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { categories, products } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryId } = await params;
  
  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = products.filter(p => p.category === categoryId);

  if (!category || categoryProducts.length === 0) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-semibold">{category.name}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          {category.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categoryProducts.map((product) => (
          <Link key={product.id} href={`/catalog/${product.category}/${product.id}`} className="group">
            <Card className="overflow-hidden h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[3/4] w-full bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4 flex-grow flex flex-col justify-between">
                <h3 className="font-headline text-lg font-semibold">{product.name}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
       <div className="text-center mt-16">
        <Button asChild variant="outline">
          <Link href="/catalog">
            &larr; Volver a todas las colecciones
          </Link>
        </Button>
      </div>
    </div>
  );
}
