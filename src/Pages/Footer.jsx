import Rating from "../components/Rating";

const Footer = () => {
	return (
		<footer class="" id="Footer">
			<div class="mx-auto w-full max-w-screen-xl px-8 py-6 lg:py-8">
				<div class="md:flex md:justify-between">
					<div class="mb-6 md:mb-0">
						<a href="#" class="flex items-center">
							<img
								src="/LogoMIPA1.png"
								alt=""
								className="h-[7.6rem] w-[7.6rem] right-2 relative rounded-full brightness-200"
							/>
							<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
						</a>
					</div>
					<div class="grid grid-cols-2 sm:grid-cols-3">
						<div className=" ">
							<h2 class="mb-4 text-sm font-semibold uppercase text-white">CREATED BY</h2>
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
								<li class="mb-2">
									<a href="https://www.instagram.com/khairul2507__?igsh=id" class="hover:underline">
										KHAIRUL 
									</a>
								</li>
								
							</ul>
						</div>
						<div className="">
							<h2 class="mb-4 text-sm font-semibold uppercase text-white">Follow us</h2>
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
								<li class="mb-2">
									<a href="https://www.instagram.com/gen.twelveone?igsh=id" class="hover:underline ">
										Instagram
									</a>
								</li>
								<li>
									<a href="https://www.you.com/@113" class="hover:underline">
										Youtube
									</a>
								</li>
							</ul>
						</div>
						<div className="hidden md:block">
							<Rating />
						</div>
					</div>
				        
					<div className="flex items-center justify-center mt-8  md:hidden">
						{/* RATING */}
						<Rating />
					</div>
				</div>
				<hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div class="sm:flex sm:items-center sm:justify-between">
					<div class="flex mt-4 justify-center sm:mt-0">
						<p className="text-[0.7rem] text-white opacity-70">
							© {new Date().getFullYear()} Kelas XII IPA 1 | Di Kelola Oleh Siswa MIPA 1
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
