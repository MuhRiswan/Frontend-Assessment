import Image from "next/image";
import React from "react";

const Mitra = () => {
  const mitra = [
    {
      id: 1,
      name: "Mitra 1",
      image: "/img/mitra/mitra-1.png",
    },
    {
      id: 2,
      name: "Mitra 2",
      image: "/img/mitra/mitra-2.png",
    },
    {
      id: 3,
      name: "Mitra 3",
      image: "/img/mitra/mitra-3.png",
    },
  ];
  return (
    <section className="w-full h-full my-16 px-2 container  mx-auto">
      {/* Informasi 1 */}
      <div className="w-full md:max-w-2xl h-full mx-auto">
        <h4 className="text-center font-semibold text-4xl text-green-500">
          Mitra Kami
        </h4>
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {mitra.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                className="w-3/4 h-auto md:w-full md:h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mitra;
