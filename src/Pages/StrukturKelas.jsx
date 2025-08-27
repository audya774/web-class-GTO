import { useEffect, useState } from "react";
import BorderStruktur from "../components/BorderStruktur";
import AOS from "aos";
import "aos/dist/aos.css";

const StrukturKelas = () => {
  const [aosLoaded, setAosLoaded] = useState(false);

  useEffect(() => {
    if (!aosLoaded) {
      AOS.init();
      AOS.refresh();
      setAosLoaded(true);
    }
  }, [aosLoaded]);

  return (
    <div className="z-1 relative h-auto lg:overflow-hidden">
      {/* wali kelas */}
      <div data-aos="fade-up" data-aos-duration="500" className="mt-14 md:mt-10">
        <BorderStruktur Jabatan="Wali Kelas" Nama="Heria Minarti, S.Pd" Width="150px" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src="LineVertikal.svg" alt="LineVertikal" data-aos="fade-up" data-aos-duration="550" className="mb-1,65" />

        <div className="lg:flex">
          <img src="LineHorizontal.svg" alt="Line" className="relative top-[-1rem]" data-aos="fade-up" data-aos-duration="600" />
          <img src="LineHorizontal.svg" alt="Line" className="relative top-[-1rem] hidden lg:flex" data-aos="fade-up" data-aos-duration="600" />
          <img src="LineHorizontal.svg" alt="Line" className="relative top-[-1rem] hidden lg:flex lg:w-[4.2rem]" data-aos="fade-up" data-aos-duration="600" />
        </div>

        <div className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-1.93rem]" data-aos="fade-up" data-aos-duration="800">
          <img src="LineKananKiri.svg" alt="LineKananKiri" />
          <img src="LineKananKiri.svg" alt="LineKananKiri" />
        </div>

        <div className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-3rem]" data-aos="fade-up" data-aos-duration="1000">
          <img src="Circle.svg" alt="Circle" />
          <img src="Circle.svg" alt="Circle" />
        </div>

        {/* wakil dan ketua */}
        <div className="flex relative top-[-3rem]" data-aos="fade-up" data-aos-duration="1200">
          <div className="relative left-[0.2rem]">
            <BorderStruktur Jabatan="Ketua Kelas" Nama="Kiflan Alaiya" Width="120px" />
          </div>
          <img src="LineHorizontalPendek.svg" alt="LinePendek" className="relative top-3" />
          <img src="LineHorizontalPendek.svg" alt="LinePendek" className="relative top-3 hidden lg:flex" />
          <img src="LineHorizontalPendek.svg" alt="LinePendek" className="relative top-3 hidden lg:flex" />
          <img src="LineHorizontalPendek.svg" alt="LinePendek" className="relative top-3 hidden lg:flex" />
          <div className="relative right-[0.2rem]">
            <BorderStruktur Jabatan="Wakil Ketua" Nama="T. Miswar A. H" Width="120px" />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="120">
          <img src="LineVertikal2.svg" alt="LineVertikal2" className="relative top-[-3.8rem]" />
        </div>

        {/* Sekretaris dan bendahara */}
        <div className="lg:flex">
          <img src="LineHorizontal.svg" alt="Line" className="relative top-[-5.5rem]" data-aos="fade-up" data-aos-duration="600" />
          <img src="LineHorizontal.svg" alt="Line" className="relative top-[-5.5rem] hidden lg:flex" data-aos="fade-up" data-aos-duration="600" />
          <img src="LineHorizontal.svg" alt="Line" className="relative top-[-5.5rem] hidden lg:flex lg:w-[4.2rem]" data-aos="fade-up" data-aos-duration="600" />
        </div>

        <div className="flex gap-[10.6rem] relative top-[-6.45rem] lg:gap-[27.4rem]" data-aos="fade-up" data-aos-duration="800">
          <img src="LineKananKiri.svg" alt="LineKananKiri" />
          <img src="LineKananKiri.svg" alt="LineKananKiri" />
        </div>

        <div className="flex gap-[10.6rem] relative top-[-7.2rem] lg:gap-[27.4rem]" data-aos="fade-up" data-aos-duration="1000">
          <img src="Circle.svg" alt="Circle" />
          <img src="Circle.svg" alt="Circle" />
        </div>

        <div className="flex gap-[5rem] relative top-[-7.3rem] lg:gap-[22rem]" data-aos="fade-up" data-aos-duration="1200">
          <BorderStruktur Jabatan="Sekertaris" Nama="Maisi Ayustisi" Width="120px" />
          <BorderStruktur Jabatan="Bendahara" Nama="Nashirah Aliya S" Width="120px" />
        </div>

        <div className="relative top-[-15rem]" data-aos="fade-up" data-aos-duration="900">
          <img src="LineVertikal3.svg" alt="LineVertikal3" />
        </div>

        {/* Keamanan dan Kebersihan */}
        <div className="lg:flex">
          {Array(4).fill(0).map((_, i) => (
            <img key={i} src="LineHorizontal.svg" alt="Line" className="relative top-[-16.5rem] hidden lg:flex" data-aos="fade-up" data-aos-duration="600" />
          ))}
        </div>

        <div className="flex gap-[10.6rem] lg:gap-[23.1rem] relative top-[-18.35rem]" data-aos="fade-up" data-aos-duration="800">
          <img src="LineKananKiri.svg" alt="LineKananKiri" />
          <img src="LineKananKiri.svg" alt="LineKananKiri" />
          <img src="LineKananKiri.svg" alt="LineKananKiri" className="hidden lg:flex" />
        </div>

        <div className="flex gap-[10.6rem] relative top-[-18.3rem] lg:gap-[23.1rem]" data-aos="fade-up" data-aos-duration="1000">
          <img src="Circle.svg" alt="Circle" />
          <img src="Circle.svg" alt="Circle" />
          <img src="Circle.svg" alt="Circle" className="hidden lg:flex" />
        </div>

        <div className="flex gap-[5rem] relative top-[-18.5rem] lg:gap-[17.5rem]" data-aos="fade-up" data-aos-duration="1100">
          <BorderStruktur Jabatan="Keamanan" Nama="Kiramul Misbah" Width="120px" />
          <BorderStruktur Jabatan="Kebersihan" Nama="Nazla Fatimah" Width="120px" />
        </div>

        {/* Anggota */}
        <div className="absolute bottom-[15%] lg:bottom-[20%]" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex justify-center items-center mb-0 flex-col">
            <img src="LineVertikal2.svg" alt="LineVertikal2" className="lg:h-3" />
            <img src="LineVertikal2.svg" alt="LineVertikal2" className="lg:-z-50" />
            <img src="LineVertikal2.svg" alt="LineVertikal2" className="lg:hidden" />
            <img src="Circle.svg" alt="Circle" className="relative top-[-0.7rem]" />
            <div className="relative bottom-3">
              <BorderStruktur Jabatan="Anggota" Nama="Warga Kelas XII IPA 1" Width="150px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrukturKelas;
	      
