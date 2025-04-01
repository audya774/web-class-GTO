import { useEffect } from "react";
import BorderStruktur from "../components/BorderStruktur";
import AOS from "aos";
import "aos/dist/aos.css";

const StrukturKelas = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <div className="relative h-auto lg:overflow-hidden mb-6 bg-blue-500">
            {/* Wali Kelas */}
            <div data-aos="fade-up" data-aos-duration="500" className="mt-14 md:mt-10">
                <BorderStruktur Jabatan="Wali Kelas" Nama="Heria Minarti, S.Pd" Width="150px" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src="LineVertikal.svg" alt="Garis Vertikal" data-aos="fade-up" data-aos-duration="550" className="mb-6" />
                
                {/* Struktur Ketua dan Wakil */}
                <StrukturDuaBaris
                    posisiKiri={{ Jabatan: "Ketua Kelas", Nama: "Kiflan Alaiya" }}
                    posisiKanan={{ Jabatan: "Wakil Ketua", Nama: "T. Miswar A. H" }}
                />
                
                {/* Struktur Sekretaris dan Bendahara */}
                <StrukturDuaBaris
                    posisiKiri={{ Jabatan: "Sekretaris", Nama: "Maisi Ayustisi" }}
                    posisiKanan={{ Jabatan: "Bendahara", Nama: "Nashirah Aliya S" }}
                />
                
                {/* Struktur Keamanan dan Kebersihan */}
                <StrukturDuaBaris
                    posisiKiri={{ Jabatan: "Keamanan", Nama: "Kiramul Misbah" }}
                    posisiKanan={{ Jabatan: "Kebersihan", Nama: "Nazla Fatimah" }}
                />
                
                {/* Anggota */}
                <div className="flex justify-center items-center flex-col" data-aos="fade-up" data-aos-duration="1000">
                    <img src="LineVertikal2.svg" alt="Garis Vertikal" className="lg:h-3" />
                    <img src="Circle.svg" alt="Lingkaran" className="relative top-[-0.7rem]" />
                    <BorderStruktur Jabatan="Anggota" Nama="Warga Kelas XII IPA 1" Width="150px" className="!mb-0" />
                </div>
            </div>
        </div>
    );
};

const StrukturDuaBaris = ({ posisiKiri, posisiKanan }) => {
    return (
        <div className="flex relative top-[-3rem]" data-aos="fade-up" data-aos-duration="1200">
            <div className="relative left-[0.2rem]">
                <BorderStruktur {...posisiKiri} Width="120px" />
            </div>
            <img src="LineHorizontalPendek.svg" alt="Garis Horizontal" className="relative top-3 hidden lg:flex" />
            <div className="relative right-[0.2rem]">
                <BorderStruktur {...posisiKanan} Width="120px" />
            </div>
        </div>
    );
};

export default StrukturKelas;
				
