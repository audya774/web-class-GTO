import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Senin  = React.lazy(() => import("../components/Mapel/Senin"))
const Selasa = React.lazy(() => import("../components/Mapel/Selasa"))
const Rabu   = React.lazy(() => import("../components/Mapel/Rabu"))
const Kamis  = React.lazy(() => import("../components/Mapel/Kamis"))
const Jumat  = React.lazy(() => import("../components/Mapel/Jumat"))
const Sabtu  = React.lazy(() => import("../components/Mapel/Sabtu"))

const Schedule = () => {
  const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const dayIndex = new Date().getDay()
  const currentDay = daysOfWeek[dayIndex]

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  // 0..6 => Minggu..Sabtu
  const componentsByDay = {
    0: null,   // Minggu: kosong
    1: Senin,
    2: Selasa,
    3: Rabu,
    4: Kamis,
    5: Jumat,
    6: Sabtu,
  }

  const piketByDay = {
    0: [], // Minggu kosong
    1: ["Ilsa Khusbah", "Mifta Adila", "Muhammad Khairuddin", "Muhammar Teja", "Nazla Fatimah"],
    2: ["Badria", "Kiramul Misbah", "M. Rifki Nanda", "Syifa Ulnadya", "Uswatun Husna Ramadani"],
    3: ["Maisi Ayustisi", "Marzawan", "Muhammad Syafriadi", "Nashirah Aliya Safitri", "Nur Asnah"],
    4: ["Arisma Dewi", "Kiflan Alaiya", "T. Miswar Andrian Hanafiah", "Yuli Salma Dewi"],
    5: ["Ahmad Zaini", "Arifki", "Dinia Fitri", "Heliyati Fitri", "Nuri Farija"],
    6: ["Alfiza Rusfan", "Muhammad Azwa", "Nazira Husnia", "Riska Amelia Ramadani"],
  }

  const TodayComponent = componentsByDay[dayIndex] ?? null
  const currentPiketNames = piketByDay[dayIndex] ?? []

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

        {Array.isArray(currentPiketNames) && currentPiketNames.length > 0 ? (
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
