import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import StrukturKelas from "./StrukturKelas";
import Schedule from "./Schedule";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function TabPanel(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);
  const swiperRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // sinkronkan Swiper saat tab diklik
    if (swiperRef.current) swiperRef.current.slideTo(newValue);
  };

  return (
    <div
      className="md:px-[10%] md:mt-5 mt-8"
      id="Tabs"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div
        className="font-medium text-[1.6rem] md:text-[1.8rem] relative md:top-[2.8rem] top-[2.7rem] text-center text-white"
        id="Glow"
      >
        &
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          sx={{ bgcolor: "transparent", boxShadow: "none" }}
          className="px-[10%]"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="inherit"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              margin: "0 auto",
              "& .MuiTabs-indicator": {
                borderBottom: "2px solid white",
              },
            }}
            className="font-medium text-white text-2xl text-center mt-16"
            id="Glow"
          >
            <Tab
              label="Structure"
              {...a11yProps(0)}
              sx={{
                fontWeight: "medium",
                color: "white",
                fontSize: ["1.5rem"],
                textTransform: "capitalize",
                fontFamily: '"Poppins", sans-serif',
                padding: "0.5rem",
                marginRight: "0.7rem",
              }}
              className="font-medium text-white text-2xl text-center mt-16"
              id="Glow"
            />
            <Tab
              label="Schedule"
              {...a11yProps(1)}
              sx={{
                fontWeight: "medium",
                color: "white",
                fontSize: ["1.5rem"],
                textTransform: "capitalize",
                fontFamily: '"Poppins", sans-serif',
                padding: "0.5rem",
                marginLeft: "0.7rem",
              }}
              className="font-medium text-white text-2xl text-center mt-16"
              id="Glow"
            />
          </Tabs>
        </AppBar>

        <Swiper
          // simpan instance untuk sinkronisasi
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          // saat diswipe, update tab aktif
          onSlideChange={(swiper) => setValue(swiper.activeIndex)}
          spaceBetween={50}
        >
          <SwiperSlide>
            <TabPanel value={value} index={0}>
              <div style={{ marginBottom: "10px" }}>
                <StrukturKelas />
              </div>
            </TabPanel>
          </SwiperSlide>

          <SwiperSlide>
            <TabPanel value={value} index={1}>
              <div>
                <Schedule />
              </div>
            </TabPanel>
          </SwiperSlide>
        </Swiper>
      </Box>
    </div>
  );
}
