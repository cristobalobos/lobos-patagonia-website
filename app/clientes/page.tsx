import Image from "next/image";

// Estilos agrupados
const sectionContainer = "container mx-auto px-4 py-16 max-w-6xl";
const titleStyle = "text-4xl font-bold mb-8 text-center text-green-800";
const paragraphStyle = "text-lg text-center max-w-3xl mx-auto mb-12";
const gridContainer = "grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center";
const logoWrapper = "flex justify-center";
const logoStyle = "object-contain";

export default function ClientesPage() {
  return (
    <div className={sectionContainer}>
      <h1 className={titleStyle}>Clientes</h1>

      <p className={paragraphStyle}>
        Nos enorgullece haber establecido relaciones duraderas con diversas empresas e instituciones.
        A continuación, destacamos algunos de nuestros principales clientes que han confiado en nosotros de forma continua,
        valorando la puntualidad, seriedad y compromiso que nos distinguen como su socio confiable en transporte privado.
      </p>

      <div className={gridContainer}>
        <div className={logoWrapper}>
          <Image src="/img/clientes/dreams.png" alt="Dreams" width={150} height={150} className={logoStyle} />
        </div>
        <div className={logoWrapper}>
          <Image src="/img/clientes/colegio-puertovaras.jpg" alt="Colegio Puerto Varas" width={150} height={150} className={logoStyle} />
        </div>
        <div className={logoWrapper}>
          <Image src="/img/clientes/benchmark_genetics.jpg" alt="Benchmark Genetics" width={150} height={150} className={logoStyle} />
        </div>
        <div className={logoWrapper}>
          <Image src="/img/clientes/LSTRAVEL-CON-FONDO-.jpg" alt="LS Travel" width={150} height={150} className={logoStyle} />
        </div>

      </div>
    </div>
  );
}
