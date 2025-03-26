import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GuruMapel = () => {
    return (
        <>
            <div className="border-t-2 border-b-2 border-white bg-yellow-500 text-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="600">
                <div className="w-[50%] text-base font-medium">Dewi Andriyani, S.Pd</div>
                <div className="flex justify-center items-center text-sm">B. Indonesia</div>
            </div>
            <div className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="700">
                <div className="w-[50%] text-base font-medium">Rasimah, S.Pd</div>
                <div className="flex justify-center items-center text-sm">Kimia</div>
            </div>
            <div className="flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="800">
                <div className="w-[50%] text-base font-medium">Narmuli, S.Pd</div>
                <div className="flex justify-center items-center text-sm">Matematika (Wajib)</div>
            </div>
            <div className="border-t-2 border-b-2 border-white bg-blue-500 text-white flex justify-between py-[0.50rem] w-72 px-3 opacity-60" data-aos="fade-up" data-aos-duration="900">
                <div className="w-[50%] text-base font-medium">Jarlina, S.Pd</div>
                <div className="flex justify-center items-center text-sm">Mulok</div>
            </div>
            <div className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1000">
                <div className="w-[50%] text-base font-medium">Hj. Samsidar, S.Pd</div>
                <div className="flex justify-center items-center text-sm">PPKN</div>
            </div>
            <div className="flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1100">
                <div className="w-[50%] text-base font-medium">Jaswadi, S.Si</div>
                <div className="flex justify-center items-center text-sm">Prakarya</div>
            </div>
            <div className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1200">
                <div className="w-[50%] text-base font-medium">Heria Minarti, S.Pd</div>
                <div className="flex justify-center items-center text-sm">Matematika (Peminatan)</div>
            </div>
            <div className="flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1300">
                <div className="w-[50%] text-base font-medium">Ariesmen Rahmat Y, S.Pd</div>
                <div className="flex justify-center items-center text-sm">Ekonomi</div>
            </div>
            <div className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1400">
                <div className="w-[50%] text-base font-medium">Devi Hariyanti, S.Pd</div>
                <div className="flex justify-center items-center text-sm">Bahasa Inggris</div>
            </div>
            <div className="flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1500">
                <div className="w-[50%] text-base font-medium">Irfandi Rahmat, S.Pd</div>
                <div className="flex justify-center items-center text-sm">Fisika</div>
            </div>
            <div className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1600">
                <div className="w-[50%] text-base font-medium">Bakrijas, S.Si</div>
                <div className="flex justify-center items-center text-sm">Biologi</div>
            </div>
            <div className="flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1700">
                <div className="w-[50%] text-base font-medium">M. Syuhada Fahmi, S.Pd</div>
                <div className="flex justify-center items-center text-sm">PJOK</div>
            </div>
            <div className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1800">
                <div className="w-[50%] text-base font-medium">Cut Lismayanti, S.Pd.I</div>
                <div className="flex justify-center items-center text-sm">PAI</div>
            </div>
            <div className="flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1900">
                <div className="w-[50%] text-base font-medium">Aniar, S.Pd</div>
                <div className="flex justify-center items-center text-sm">Seni Budaya</div>
            </div>
            <div className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="2000">
                <div className="w-[50%] text-base font-medium">Asma Aini, S.Pd</div>
                <div className="flex justify-center items-center text-sm">Sejarah (Wajib)</div>
            </div>
        </>
    );
}

export default GuruMapel;
