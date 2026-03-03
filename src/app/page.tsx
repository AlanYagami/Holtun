import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Droplets, Sun, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: 'Ingredientes 100% Naturales',
    description:
      'Nuestros aceites se obtienen de los mejores botánicos, asegurando una calidad pura y sin adulterar.',
  },
  {
    icon: <Droplets className="h-8 w-8 text-primary" />,
    title: 'Grado Terapéutico',
    description:
      'Experimenta todo el potencial de la aromaterapia con aceites lo suficientemente potentes para uso terapéutico.',
  },
  {
    icon: <Sun className="h-8 w-8 text-primary" />,
    title: 'Lo mejor para ti',
    description:
      'Cada aceite está pensado para abrazar tus sentidos, reconectar contigo mismo y llenar tu espacio de armonía, luz y bienestar natural.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://cdn.pixabay.com/photo/2019/03/22/22/04/essential-oils-4074315_1280.jpg"
          alt="Aceites esenciales y elementos naturales"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 p-4 max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl font-semibold !leading-tight">
            Abraza la Armonía de la Naturaleza
          </h1>
          <p className="mt-4 font-body text-lg md:text-xl max-w-xl mx-auto text-white/90">
            Descubre nuestra colección de aceites esenciales puros y potentes,
            diseñados para elevar tu bienestar.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            <Link href="/catalog">Explora Nuestra Colección</Link>
          </Button>
        </div>
      </section>

      {/* Sobre Nosotros Section */}
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
              Sobre Nosotros
            </h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              HOLTÚN es un centro holístico que nace con el propósito de
              restaurar el equilibrio y la paz que la vida ajetreada quita a
              nuestra comunidad. Con ayuda de la naturaleza y técnicas
              ancestrales, ofrecemos la oportunidad de llevar un estilo de vida
              balanceado mediante aceites esenciales, mieles infusionadas,
              masajes, acupuntura y más.
            </p>
            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
              Holtún está listo para recibirte y acompañarte en tu día a día,
              brindándote un espacio donde el mundo moderno y la sabiduría
              ancestral se encuentran.
            </p>
          </div>

          <div className="order-1 md:order-2 h-[400px] md:h-[500px] relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://cdn.pixabay.com/photo/2023/10/24/16/57/plant-8338691_1280.jpg"
              alt="Ambiente relajante natural"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Misión y Visión Section */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
              Nuestra Esencia
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              El propósito que guía cada paso que damos.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">

            {/* Misión */}
            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-headline text-2xl font-semibold text-foreground">
                  Misión
                </h3>
              </div>

              <p className="mt-6 text-foreground/80 leading-relaxed">
                Restaurar el balance del ajetreado estilo de vida que llevamos,
                ofreciendo servicios y productos de calidad. Ya sea que reserves
                una cita en nuestro centro holístico o consumas nuestros productos,
                Holtún traerá de vuelta el equilibrio que necesitabas.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-headline text-2xl font-semibold text-foreground">
                  Visión
                </h3>
              </div>

              <p className="mt-6 text-foreground/80 leading-relaxed">
                Convertirnos en un centro holístico referente del equilibrio
                entre el mundo moderno y la sabiduría ancestral, acompañando
                cada vez a más personas a recuperar el balance vital que les
                pertenece.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            Nuestra Promesa para Ti
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Nos exigimos los más altos estándares para ofrecerte productos que
            no solo son efectivos, sino también éticos y seguros.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="bg-card border shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  {benefit.icon}
                  <CardTitle className="font-headline text-xl font-semibold">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}