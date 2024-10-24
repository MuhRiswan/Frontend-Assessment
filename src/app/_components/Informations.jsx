import Image from "next/image";
import React from "react";

const Informations = () => {
  const informationSecond = [
    {
      id: 1,
      img: "/img/info-6.svg",
      title: "Pembiayaan",
      text: "Eratani menyalurkan dukungan dan edukasi finansial berbasis teknologi bagi para petani yang mengalami kesulitan permodalan untuk meningkatkan produktivitas pertanian.",
    },
    {
      id: 2,
      img: "/img/info-7.svg",
      title: "Manajemen Rantai Pasok",
      text: "Eratani memfasilitasi akses kebutuhan petani melalui mitra penyedia sarana kebutuhan di bidang pertanian secara transparan dan terstandarisasi.",
    },
    {
      id: 3,
      img: "/img/info-8.svg",
      title: "Distribusi & Penjualan",
      text: "Eratani memfasilitasi petani untuk menjual dan mendistribusikan hasil panen secara langsung dan mudah dengan harga yang terstandarisasi.",
    },
  ];
  return (
    <section className="w-full h-full my-14 px-2 container  mx-auto">
      {/* Informasi 1 */}
      <div className="w-full md:max-w-2xl h-full mx-auto">
        <h4 className="text-center font-semibold text-4xl text-green-500">
          Menuju Ekosistem yang Lebih Kuat Bersama Eratani
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center py-10">
          <div className="flex flex-col items-center">
            <Image
              src="/img/info-1.svg"
              alt="Informasi 1"
              width={100}
              height={100}
              className="w-24 h-auto mb-1"
            />
            <p className="text-2xl font-bold text-green-600">500+</p>
            <p className="text-amber-300 font-light">Petani Binaan</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/img/info-2.svg"
              alt="Informasi 2"
              width={100}
              height={100}
              className="w-24 h-auto mb-1"
            />
            <p className="text-2xl font-bold text-green-600">
              &gt; Rp 5 Miliar
            </p>
            <p className="text-amber-300 font-light">Pendanaan Tersalurkan</p>
          </div>
        </div>

        {/* Row Kedua */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Image
              src="/img/info-3.svg"
              alt="Informasi 3"
              width={100}
              height={100}
              className="w-24 h-auto mb-1"
            />
            <p className="text-2xl font-bold text-green-600">&gt; 15%</p>
            <p className="text-amber-300 font-light">Peningkatan Pendapatan</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/img/info-4.svg"
              alt="Informasi 4"
              width={100}
              height={100}
              className="w-24 h-auto mb-1"
            />
            <p className="text-2xl font-bold text-green-600">750 Ha +</p>
            <p className="text-amber-300 font-light">Luas Wilayah Binaan</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/img/info-5.svg"
              alt="Informasi 5"
              width={100}
              height={100}
              className="w-24 h-auto mb-1"
            />
            <p className="text-2xl font-bold text-green-600">&gt; 20%</p>
            <p className="text-amber-300 font-light">
              Peningkatan Produktivitas
            </p>
          </div>
        </div>
      </div>

      <div className="w-full my-10 py-10">
        <h4 className="text-center font-semibold text-4xl text-green-500">
          Peduli Petani Bersama Eratani
        </h4>
        <div className="mt-10 grid grid-cols-1 gap-4 justify-items-center">
          {informationSecond.map((info) => (
            <div
              key={info.id}
              className="w-full bg-[#F3F3F3] md:max-w-[78.125rem]  py-4 px-10 md:px-24 text-center md:text-start shadow-[0_2px_30px_rgb(112,112,112,0.1)] flex flex-col md:flex-row gap-4 items-center"
            >
              <Image
                src={info.img}
                alt="Informasi 4"
                width={100}
                height={100}
                className="w-32 h-auto mb-1"
              />
              <div className="flex flex-col gap-1">
                <h5 className="text-green-500 text-2xl font-semibold">
                  {info.title}
                </h5>
                <p className="text-gray-950 text-base tracking-wider leading-loose">
                  {info.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Informations;
