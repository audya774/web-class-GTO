import { useEffect } from "react";
import BorderStruktur from "../components/BorderStruktur";
import AOS from "aos";
import "aos/dist/aos.css";

const StrukturKelas = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const LineHorizontal = ({ extraClass = "" }) => (
    <img
      src="LineHorizontal.svg"
      alt="Garis horizontal"
      className={`relative ${extraClass}`}
      data-aos="fade-up"
      data-aos-duration="600"
    />
  );

  const LineVertical = ({ extraClass = "" }) => (
    <img
      src="LineVertikal.svg"
      alt="Garis vertikal"
      className={`relative ${extraClass}`}
      data-aos="fade-up"
      data-aos-duration="550"
    />
  );

  return (
    <div className="relative h-auto bg-blue-500">
      <div data-aos="fade-up" data-aos-duration="500" className="mt-14 md:mt-10">
        <BorderStruktur Jabatan="Wali Kelas" Nama="Heria Minarti, S.Pd" Width="150px" />
      </div>

      <div className="flex flex-col items-center">
        <LineVertical extraClass="mb-4" />
        <div className="lg:flex">
          <LineHorizontal extraClass="top-[-1rem]" />
          <LineHorizontal extraClass="top-[-1rem] hidden lg:flex" />
          <LineHorizontal extraClass="top-[-1rem] hidden lg:flex lg:w-[4.2rem]" />
        </div>

        <div className="flex gap-10 lg:gap-28 relative top-[-2rem]" data-aos="fade-up" data-aos-duration="800">
          <img src="LineKananKiri.svg" alt="" />
          <img src="LineKananKiri.svg" alt="" />
        </div>

        <div className="flex gap-10 lg:gap-28 relative top-[-3rem]" data-aos="fade-up" data-aos-duration="1000">
          <img src="Circle.svg" alt="" />
          <img src="Circle.svg" alt="" />
        </div>

        <div className="flex relative top-[-3rem]" data-aos="fade-up" data-aos-duration="1200">
          <BorderStruktur Jabatan="Ketua Kelas" Nama="Kiflan Alaiya" Width="120px" className="mr-4" />
          <LineHorizontal extraClass="top-3 hidden lg:flex" />
          <BorderStruktur Jabatan="Wakil Ketua" Nama="T. Miswar A. H" Width="120px" className="ml-4" />
        </div>

        <LineVertical extraClass="top-[-3.8rem]" />

        <div className="flex gap-10 lg:gap-28 relative top-[-7rem]" data-aos="fade-up" data-aos-duration="1200">
          <BorderStruktur Jabatan="Sekretaris" Nama="Maisi Ayustisi" Width="120px" />
          <BorderStruktur Jabatan="Bendahara" Nama="Nashirah Aliya S" Width="120px" />
        </div>

        <LineVertical extraClass="top-[-13rem]" />

        <div className="flex gap-10 lg:gap-20 relative top-[-16rem]" data-aos="fade-up" data-aos-duration="1100">
          <BorderStruktur Jabatan="Keamanan" Nama="Kiramul Misbah" Width="120px" />
          <BorderStruktur Jabatan="Kebersihan" Nama="Nazla Fatimah" Width="120px" />
        </div>

        <div className="absolute bottom-[10%] lg:bottom-[15%]" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex flex-col items-center">
            <LineVertical extraClass="lg:h-3" />
            <LineVertical extraClass="lg:-z-50 hidden lg:flex" />
            <LineVertical extraClass="lg:hidden" />
            <img src="Circle.svg" alt="" className="relative top-[-0.7rem]" />
            <BorderStruktur Jabatan="Anggota" Nama="Warga Kelas XII IPA 1" Width="150px" className="relative bottom-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrukturKelas;
