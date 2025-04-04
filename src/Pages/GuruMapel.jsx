import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const daftarGuru = [
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
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-red-500">
            {/* Konten Utama */}
            <div className="flex-1 w-full max-w-3xl mx-auto py-8 px-4 sm:px-6">
                <h2 className="text-white mb-8 text-2xl font-bold font-[Poppins]">
                    Daftar Guru Mata Pelajaran
                </h2>

                <div className="space-y-4">
                    {daftarGuru.map((guru, index) => (
                        <div 
                            key={index}
                            className="border-b border-white/30 pb-3 text-white flex justify-between items-end"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <span className="text-lg font-medium">{guru.nama}</span>
                            <span className="text-sm opacity-90">{guru.mapel}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Spacer untuk footer - sesuaikan tinggi dengan footer Anda */}
            <div className="h-24"></div>
        </div>
    );
};

export default GuruMapel;
