import Image from 'next/image';
import Link from 'next/link';
import { products, categories } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle } from 'lucide-react';

export async function generateStaticParams() {
  return products.map(product => ({
    category: product.category,
    product: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ product: string; category: string }> }) {
  const { product: productId, category: categoryId } = await params;
  
  const product = products.find(p => p.id === productId && p.category === categoryId);
  const category = categories.find(c => c.id === categoryId);

  if (!product || !category) {
    notFound();
  }
  
  const details = [
    { title: 'Descripción', content: product.descripcion },
    { title: 'Propiedades', content: product.propiedades },
    { title: 'Usos', content: product.usos },
    { title: 'Mezcla', content: product.mezcla },
    { title: 'Presentación', content: product.presentacion },
    { title: 'Chakra Principal', content: product.chakra_principal },
    { title: 'Función de los Aceites', content: product.aceites_funcion },
    { title: 'Apoya', content: product.apoya },
    { title: 'Desbloquea', content: product.desbloquea },
  ].filter(item => item.content);

  const listFields = ['Propiedades', 'Usos', 'Mezcla'];

  return (
    <div className="bg-background">
      <div className="container py-12 md:py-20">
        <div className="mb-8">
           <Link href={`/catalog/${categoryId}`} className="text-foreground/70 hover:text-primary transition-colors text-sm">
            &larr; Volver a {category.name}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">{product.name}</h1>
            
            <div className="mt-12">
              <Accordion type="single" collapsible defaultValue={details[0]?.title} className="w-full">
                 {details.map(item => (
                  <AccordionItem value={item.title} key={item.title}>
                    <AccordionTrigger className="font-headline text-lg font-semibold text-left">{item.title}</AccordionTrigger>
                    <AccordionContent>
                      {listFields.includes(item.title) ? (
                        <ul className="space-y-2 text-foreground/80 pl-2">
                          {item.content!.split(/, y |,| y/).map(point => point.trim()).filter(Boolean).map((point, idx) => (
                            <li key={`${item.title}-${idx}`} className="flex items-start gap-3">
                              <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <span>{point.charAt(0).toUpperCase() + point.slice(1)}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                         <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{item.content}</p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
