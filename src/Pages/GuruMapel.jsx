import Navbar from "../components/Navbar";

const guruList = [
    { nama: "Dewi Ariyani, S.Pd", mapel: "B. Indonesia" },
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
    return (
        <div className="flex flex-col items-center mt-10">
            {/* Guru Mapel tetap di kiri dengan font Poppins, ukuran 1.5rem, dan font medium */}
            <div 
                className="text-white mb-4 mx-[10%] self-start lg:mb-16"
                id="GuruMapel"
                style={{ 
                    fontFamily: '"Poppins", sans-serif', 
                    fontSize: "1.5rem",
                    fontWeight: "500"
                }}
            >
                Guru Mapel
            </div>

            {guruList.map((guru, index) => (
                <div key={index} className="w-72">
                    {/* Tambahkan border atas hanya untuk guru pertama */}
                    {index === 0 && <div className="border-t border-white w-72"></div>}
                    
                    {/* Informasi Guru */}
                    <div 
                        className="border-b border-white text-white flex justify-between py-2 px-3"
                        data-aos="fade-up" 
                        data-aos-duration={600 + index * 100}
                    >
                        <div className="w-[50%] text-base font-medium">{guru.nama}</div>
                        <div className="flex justify-center items-center text-sm">{guru.mapel}</div>
                    </div>                                  
                </div>
            ))}
        </div>
    );
};

export default GuruMapel;
