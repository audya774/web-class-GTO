import Navbar from "../components/Navbar";

const guruList = [
    { nama: "Dewi Andriyani, S.Pd", mapel: "B. Indonesia" },
    { nama: "Rasimah, S.Pd", mapel: "Kimia" },
    { nama: "Narmuli, S.Pd", mapel: "Matematika" },
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
        <div className="flex flex-col items-center mt-10"> {/* Wrapper utama agar semua elemen di tengah */}
            <div className="text-white text-xl font-bold mb-4 mx-[10%] lg:text-left lg:text-4xl lg:mb-16" id="GuruMapel">
                Guru Mapel
            </div>

            {guruList.map((guru, index) => (
                <div 
                    key={index} 
                    className={`border-white text-white flex justify-between py-2 w-72 px-3 
                        ${index === 0 ? "border-t-2 border-b-2" : ""}
                        ${index === guruList.length - 2 ? "border-b" : "border-b-2"} 
                        ${index === guruList.length - 1 ? "border-t-2 border-b-2" : ""}`}
                    data-aos="fade-up" 
                    data-aos-duration={600 + index * 100}
                >
                    <div className="w-[50%] text-base font-medium">{guru.nama}</div>
                    <div className="flex justify-center items-center text-sm">{guru.mapel}</div>
                </div>
            ))}
        </div>
    );
};

export default GuruMapel;
