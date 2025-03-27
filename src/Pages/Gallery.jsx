import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonSend from "../components/ButtonSend";
import ButtonRequest from "../components/ButtonRequest";
import Modal from "@mui/material/Modal";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSpring, animated } from "@react-spring/web";

const Carousel = () => {
	const [images] = useState([
		"/gallery/image01.jpg",
		"/gallery/image02.jpg",
		"/gallery/image03.jpg",
		"/gallery/image04.jpg",
		"/gallery/image05.jpg",
		"/gallery/image06.jpg",
		"/gallery/image07.jpg",
		"/gallery/image08.jpg",
		"/gallery/image09.jpg",
		"/gallery/image10.jpg",
		"/gallery/image11.jpg",
		"/gallery/image12.jpg",
		"/gallery/image13.jpg",
		"/gallery/image14.jpg",
		"/gallery/image15.jpg",
		"/gallery/image16.jpg",
		"/gallery/image17.jpg",
		"/gallery/image18.jpg",
		"/gallery/image19.jpg",
		"/gallery/image20.jpg",
		"/gallery/image21.jpg",
		"/gallery/image22.jpg",
		"/gallery/image23.jpg",
		"/gallery/image24.jpg",
		"/gallery/image25.jpg",
		"/gallery/image26.jpg",
		"/gallery/image27.jpg",
	]);
	const [open, setOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const modalFade = useSpring({
		opacity: open ? 1 : 0,
		config: { duration: 300 },
	});

	const settings = {
		centerMode: true,
		centerPadding: "30px",
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "50px",
					slidesToShow: 1,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "70px",
					slidesToShow: 1,
					dots: false,
				},
			},
		],
	};

	const handleImageClick = (imageUrl) => {
		setSelectedImage(imageUrl);
		setOpen(true);
	};

	const handleCloseModal = () => {
		setOpen(false);
		setSelectedImage(null);
	};

	return (
		<>
			<div
				className="text-white mb-4 mx-[10%] self-start lg:mb-16 text-[1.5rem] font-medium font-[Poppins] mt-10 lg:text-center lg:text-3xl lg:mb-8"
				id="Gallery"
			>
				Class Gallery
			</div>

			<div id="Carousel">
				<Slider {...settings}>
					{images.map((imageUrl, index) => (
						<img
							key={index}
							src={imageUrl}
							alt={`Image ${index}`}
							onClick={() => handleImageClick(imageUrl)}
							style={{ cursor: "pointer" }}
						/>
					))}
				</Slider>
			</div>

			<div className="flex justify-center items-center gap-6 text-base mt-5 lg:mt-8">
				<ButtonSend />
				<ButtonRequest />
			</div>

			<Modal
				open={open}
				onClose={handleCloseModal}
				aria-labelledby="image-modal"
				aria-describedby="image-modal-description"
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
			>
				<animated.div
					style={{
						...modalFade,
						maxWidth: "90vw",
						maxHeight: "auto",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						position: "relative",
						backgroundColor: "white",
						padding: "16px",
						borderRadius: "10px",
					}}
				>
					<IconButton
						edge="end"
						color="inherit"
						onClick={handleCloseModal}
						aria-label="close"
						sx={{
							position: "absolute",
							top: "12px",
							right: "23px",
							backgroundColor: "white",
							borderRadius: "50%",
						}}
					>
						<CloseIcon />
					</IconButton>
					<div className="w-full">
						<img
							src={selectedImage}
							alt="Selected Image"
							style={{ maxWidth: "100%", maxHeight: "100vh" }}
						/>
					</div>
				</animated.div>
			</Modal>
		</>
	);
};

export default Carousel;
