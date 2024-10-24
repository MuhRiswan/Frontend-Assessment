import { Button } from "@/components/ui/button";
import React from "react";

const Location = () => {
  return (
    <section className="w-full h-full my-16 px-2 container  mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 justify-between items-center p-4 lg:p-8">
        {/* Kolom Kiri - Google Maps dan Tombol Lokasi */}
        <div className="lg:w-1/2 w-full h-[500px] mb-4 lg:mb-0 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.317477575742!2d106.84075477462744!3d-6.221802093766231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c89e5bb3f7%3A0xf94eba3a38ef8f3b!2sPAKUWON%20TOWER%20JAKARTA!5e0!3m2!1sen!2sid!4v1729698393351!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <Button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 rounded-none hover:bg-yellow-600 text-gray-950 font-medium py-2 px-6 w-1/3  shadow-lg">
            Lokasi
          </Button>
        </div>

        {/* Kolom Kanan - Form Kritik & Saran */}
        <div className="lg:w-1/2 w-full bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-center font-medium text-gray-800 mb-6">
            Kritik & Saran
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nomor Handphone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Pesan Anda"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 h-32"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-1/3 text-center mx-auto bg-yellow-500 rounded-none hover:bg-yellow-600 text-gray-950 font-medium py-3 shadow-lg"
              >
                Kirim Pesan
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Location;
