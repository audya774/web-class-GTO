import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";

const guruList = [
    { nama: "Dewi Ariyani, S.Pd", mapel: "Bahasa Indonesia" },
    { nama: "Rasimah, S.Pd", mapel: "Kimia" },
    { nama: "Narmuli, S.Pd", mapel: "Matematika (Wajib)" },
    { nama: "Hj. Samsidar, S.Pd", mapel: "PPKN" },
    { nama: "Jaswadi, S.Si", mapel: "Prakarya" },
    { nama: "Heria Minarti, S.Pd", mapel: "Matematika (Peminatan)" },
    { nama: "Ariesmen Rahmat Y, S.Pd", mapel: "Ekonomi" },
    { nama: "Devi Hariyanti, S.Pd", mapel: "Bahasa Inggris" },
    { nama: "Irfandi Rahmat, S.Pd", mapel: "Fisika" },
    { nama: "Bakrijas, S.Si", mapel: "Biologi" },
    { nama: "M. Syuhada Fahmi, S.Pd", mapel: "PJOK" },
    { nama: "Cut Lismayanti, S.Pd.I", mapel: "PAI" },
    { nama: "Aniar, S.Pd", mapel: "Seni Budaya" },
    { nama: "Asma Aini, S.Pd", mapel: "Sejarah (Wajib)" }
];

const GuruMapel = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="GuruMapel" className="flex flex-col items-center mb-35 bg-red-500">
            {/* Judul "Guru Mapel" */}
            <h2 
                className="text-white mb-3 mx-[10%] self-start lg:mb-12 text-[1.5rem] font-medium font-[Poppins]"
            >
                Guru Mapel
            </h2>

            {/* Daftar Guru */}
            {guruList.map((guru, index) => (
                <div key={index} className="w-72">
                    <div 
                        className="border-b border-white text-white flex flex-col py-1 px-3"
                        data-aos="fade-up" 
                        data-aos-duration={600 + index * 100}
                    >
                        <span className="text-base font-medium">{guru.nama}</span>
                        <span className="text-sm text-right">{guru.mapel}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GuruMapel;
    
