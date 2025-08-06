import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Senin = React.lazy(() => import("../components/Mapel/Senin"))
const Selasa = React.lazy(() => import("../components/Mapel/Selasa"))
const Rabu = React.lazy(() => import("../components/Mapel/Rabu"))
const Kamis = React.lazy(() => import("../components/Mapel/Kamis"))
const Jumat = React.lazy(() => import("../components/Mapel/Jumat"))
const Sabtu = React.lazy(() => import("../components/Mapel/Sabtu")) 

const Schedule = () => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const currentDayIndex = new Date().getDay()
  const currentDay = daysOfWeek[currentDayIndex]

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  //  Kelompok piket untuk Senin–Sabtu
  const piketGroup = [
    ["Ilsa Khusbah", "Mifta Adila", "Muhammad Khairuddin", "Muhammar Teja", "Nazla Fatimah"], // Senin (1)
    ["Badria", "Kiramul Misbah", "M. Rifki Nanda", "Syifa Ulnadya", "Uswatun Husna Ramadani"], // Selasa (2)
    ["Maisi Ayustisi", "Marzawan", "Muhammad Syafriadi", "Nashirah Aliya Safitri", "Nur Asnah"], // Rabu (3)
    ["Arisma Dewi", "Kiflan Alaiya", "T. Miswar Andrian Hanafiah", "Yuli Salma Dewi"], // Kamis (4)
    ["Ahmad Zaini", "Arifki", "Dinia Fitri", "Heliyati Fitri", "Nuri Farija"], // Jumat (5)
    ["Alfiza Rusfan", "Muhammad Azwa", "Nazira Husnia", "Riska Amelia Ramadani"], // Sabtu (6)
  ]

  //  Komponen jadwal berdasarkan hari (indeks 0 = Sunday = null)
  const dayComponents = [
    null,   // Kosongan indeks 0
    Senin,  
    Selasa, 
    Rabu,   
    Kamis,  
    Jumat,  
    Sabtu,   
  ]

  const TodayComponent = dayComponents[currentDayIndex]
  const currentPiketNames = piketGroup[currentDayIndex - 1] // karena index 0 (Sunday) tidak ada

  return (
    <>
      {/* Jadwal Mapel */}
      <div className="lg:flex lg:justify-center lg:gap-32 lg:mb-10 lg:mt-16">
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
              className={`border-t-2 border-white flex justify-center py-[0.50rem] w-72 px-3 ${
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
