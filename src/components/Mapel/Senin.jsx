const Senin = () => {
    return (
        <>
            {/* Kepala Tabel */}
            <div className="border-t-2 border-b-2 border-white flex justify-between font-bold py-[0.50rem] w-72 px-3 bg-gray-800 text-white" data-aos="fade-up" data-aos-duration="500">
                <div className="w-[20%] text-center">Jam</div>
                <div className="w-[30%] text-center">Pukul</div>
                <div className="w-[30%] text-center">Jadwal</div>
                <div className="w-[20%] text-center">Guru</div>
            </div>

            {/* Data Jadwal */}
            <div className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="600">
                <div className="w-[20%] text-center">1</div>
                <div className="w-[30%] text-center">07.45-08.25</div>
                <div className="w-[30%] text-center">Upacara</div>
                <div className="w-[20%] text-center">-</div>
            </div>

            <div className="flex justify-between py-[0.50rem] w-72 px-3 opacity-60 border-b-2 border-white" data-aos="fade-up" data-aos-duration="600">
                <div className="w-[20%] text-center">2</div>
                <div className="w-[30%] text-center">08.25-09.45</div>
                <div className="w-[30%] text-center">B. Indonesia</div>
                <div className="w-[20%] text-center">Bu Emi</div>
            </div>

            <div className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="700">
                <div className="w-[20%] text-center">3</div>
                <div className="w-[30%] text-center">09.45-10.25</div>
                <div className="w-[30%] text-center">Biologi</div>
                <div className="w-[20%] text-center">Pak Sumar</div>
            </div>

            {/* Istirahat */}
            <div className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3 bg-gray-700 text-white" data-aos="fade-up" data-aos-duration="800">
                <div className="w-[20%] text-center">-</div>
                <div className="w-[30%] text-center">10.25-10.45</div>
                <div className="w-[30%] text-center">Istirahat</div>
                <div className="w-[20%] text-center">-</div>
            </div>

            <div className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3 opacity-60" data-aos="fade-up" data-aos-duration="900">
                <div className="w-[20%] text-center">4</div>
                <div className="w-[30%] text-center">10.45-11.25</div>
                <div className="w-[30%] text-center">Biologi</div>
                <div className="w-[20%] text-center">Pak Sumar</div>
            </div>

            <div className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1000">
                <div className="w-[20%] text-center">5</div>
                <div className="w-[30%] text-center">11.25-12.45</div>
                <div className="w-[30%] text-center">B. Inggris</div>
                <div className="w-[20%] text-center">Bu Diah</div>
            </div>

            <div className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1000">
                <div className="w-[20%] text-center">6</div>
                <div className="w-[30%] text-center">12.45-14.05</div>
                <div className="w-[30%] text-center">Mulok</div>
                <div className="w-[20%] text-center">Pak Agus</div>
            </div>
        </>
    )
} 

export default Senin;
