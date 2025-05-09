import Image from "next/image";

// Estilos agrupados optimizados
const sectionContainer = "container mx-auto px-4 py-4 max-w-4xl";
const titleStyle = "text-4xl font-bold mb-6 text-center text-green-800";
const paragraphStyle = "text-base text-center max-w-3xl mx-auto mb-8";
const gridContainer = "grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center";
const logoWrapper = "flex justify-center";
const logoStyle = "object-contain h-auto";

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
          <Image
            src="/img/clientes/dreams_preview.png"
            alt="Dreams"
            width={130}
            height={80}
            className={logoStyle}
          />
        </div>
        <div className={logoWrapper}>
          <Image
            src="/img/clientes/colegio-puertovaras_preview.png"
            alt="Colegio Puerto Varas"
            width={130}
            height={80}
            className={logoStyle}
          />
        </div>
        <div className={logoWrapper}>
          <Image
            src="/img/clientes/benchmark_preview.png"
            alt="Benchmark Genetics"
            width={130}
            height={80}
            className={logoStyle}
          />
        </div>
      </div>

      {/* Línea final opcional para cerrar visualmente */}
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-500">
        Clientes destacados – Transfer Lobos
      </div>
    </div>
  );
}
