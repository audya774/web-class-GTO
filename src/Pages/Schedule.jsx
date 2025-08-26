import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Senin = React.lazy(() => import("../components/Mapel/Senin"))
const Selasa = React.lazy(() => import("../components/Mapel/Selasa"))
const Rabu = React.lazy(() => import("../components/Mapel/Rabu"))
const Kamis = React.lazy(() => import("../components/Mapel/Kamis"))
const Jumat = React.lazy(() => import("../components/Mapel/Jumat"))
const Sabtu = React.lazy(() => import("../components/Mapel/Sabtu")) // 👈 tambahkan ini

const Schedule = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const currentDay = daysOfWeek[new Date().getDay()]

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    let piketGroup = [
        ["Ilsa Khusbah", "Mifta Adila", "Muhammad Khairuddin", "Muhammar Teja", "Nazla Fatimah"], // Senin
        ["Badria", "Kiramul Misbah", "M. Rifki Nanda", "Syifa Ulnadya", "Uswatun Husna Ramadani"], // Selasa
        ["Maisi Ayustisi", "Marzawan", "Muhammad Syafriadi", "Nashirah Aliya Safitri", "Nur Asnah"], // Rabu
        ["Arisma Dewi", "Kiflan Alaiya", "T. Miswar Andrian Hanafiah", "Yuli Salma Dewi"], // Kamis
        ["Ahmad Zaini", "Arifki", "Dinia Fitri", "Heliyati Fitri", "Nuri Farija"], // Jumat
        ["Alfiza Rusfan", "Muhammad Azwa", "Nazira Husnia", "Riska Amelia Ramadani"], // Sabtu
    ]

    const dayComponents = [
        null,   // Sunday
        Senin,  // Monday
        Selasa, // Tuesday
        Rabu,   // Wednesday
        Kamis,  // Thursday
        Jumat,  // Friday
        Sabtu,  // Saturday
    ]

    // Menampilkan komponen berdasarkan hari saat ini
    const TodayComponent = dayComponents[new Date().getDay()]

    // Menampilkan nama-nama piket sesuai dengan hari saat ini
    const currentPiketNames = piketGroup[new Date().getDay() - 1]

    return (
        <>
            {/* Jadwal Mapel */}
            <div className="lg:flex lg:justify-center lg:gap-32 lg:mb-10 lg:mt-16 ">
                <div className="text-white flex flex-col justify-center items-center mt-8 md:mt-3 overflow-y-hidden">
                    <div className="text-2xl font-medium mb-5" data-aos="fade-up" data-aos-duration="500">
                        {currentDay}
                    </div>
                    <div data-aos="fade-up" data-aos-duration="400">
                        {TodayComponent ? (
                            <React.Suspense fallback={<p>Loading...</p>}>
                                <TodayComponent />
                            </React.Suspense>
                        ) : (
                            <p className="opacity-50">Tidak Ada Jadwal Hari Ini</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Jadwal Piket */}
            <div className="text-white flex flex-col justify-center items-center mt-8 lg:mt-0 lg:mb-[10rem] mb-10 overflow-y-hidden">
                <div
                    className="text-2xl font-medium mb-5 text-center"
                    data-aos="fade-up"
                    data-aos-duration="500">
                    Piket
                </div>
                {currentPiketNames && currentPiketNames.length > 0 ? (
                    currentPiketNames.map((piketName, index) => (
                        <div
                            key={index}
                            className={` border-t-2 border-white flex justify-center py-[0.50rem] w-72 px-3 ${
                                index === currentPiketNames.length - 1 ? "border-b-2" : ""
                            }`}
                            data-aos="fade-up"
                            data-aos-duration={600 + index * 100}>
                            <div className="text-base font-medium">{piketName}</div>
                        </div>
                    ))
                ) : (
                    <p className="opacity-50">Tidak Ada Jadwal Hari Ini</p>
                )}
            </div>
        </>
    )
}

export default Schedule
