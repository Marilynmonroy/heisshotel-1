"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "/app/css/pagination.css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css";
import 'photoswipe/dist/photoswipe.css';
import "./navigation.css"
import Image from "next/image";
import { CalendarWidget } from "../CalendarWidget";
import { Button } from "../ui/button";

import { register } from "swiper/element/bundle";
register();
import {
  Mousewheel,
  Pagination,
  EffectFade,
  Keyboard,
  FreeMode,
  Navigation,
} from "swiper/modules";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

const SliderHabLarge = () => {
  const galleryImages = [
    "/images/habitacionLarge/all/suite_1.jpg",
    "/images/habitacionLarge/all/suite_2.jpg",
    "/images/habitacionLarge/all/suite_3.jpg",
    "/images/habitacionLarge/all/suite_4.jpg",
    "/images/habitacionLarge/all/suite_5.jpg",
    "/images/habitacionLarge/all/suite_6.jpg",
    "/images/habitacionLarge/all/suite_7.jpg",
    "/images/habitacionLarge/all/suite_8.jpg",
    "/images/habitacionLarge/all/suite_9.jpg",
    "/images/habitacionLarge/all/suite_10.jpg",
    "/images/habitacionLarge/all/suite_11.jpg",
  ];

  return (
		<section className="overflow-y-auto">
			<div className="relative w-full h-screen">
				<div className="absolute inset-0 bg-black opacity-25 z-10"></div>
				<Image
					src="/images/habitacionLarge/largeprincipal.webp"
					alt="Piscina Image"
					layout="fill"
					objectFit="cover"
					priority
				/>
				<div className="items-center justify-center mb-20 text-center flex flex-col gap-3 text-white z-20 absolute inset-0">
					<span className="p-light-16 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center">
						HOTEL HEISS MEDELLÍN
					</span>
					<h2 className="h3">JUNIOR SUITE</h2>
					<div className="mt-5">
						<CalendarWidget />
					</div>
				</div>
			</div>
			{/* carrousel 1 */}
			<div className="text-white h-3/4 text-center flex items-center w-full">
				<Swiper
					slidesPerView={1}
					className="w-full h-[70%]"
					pagination={{
						clickable: true,
						bulletActiveClass: 'swiper-pagination-bullet-active',
						bulletClass: 'swiper-pagination-bullet',
						modifierClass: 'swiper-pagination',
					}}
					modules={[Pagination, Navigation]}
					lazy={true} // Lazy loading
				>
					<SwiperSlide>
						<div className="absolute inset-0 bg-black opacity-25 z-10"></div>
						<Image
							src="/images/habitacionLarge/largecarrousel1.webp"
							alt="Piscina Image"
							layout="fill"
							objectFit="cover"
							priority
						/>
					</SwiperSlide>
					<SwiperSlide>
						<div className="absolute inset-0 bg-black opacity-25 z-10"></div>
						<Image
							src="/images/habitacionLarge/largecarrousel2.webp"
							alt="Piscina Image"
							layout="fill"
							objectFit="cover"
							priority
						/>
					</SwiperSlide>
					<SwiperSlide>
						<div className="absolute inset-0 bg-black opacity-25 z-10"></div>
						<Image
							src="/images/habitacionLarge/largecarrousel3.webp"
							alt="Piscina Image"
							layout="fill"
							objectFit="cover"
							priority
						/>
					</SwiperSlide>
				</Swiper>
			</div>

			{/* carrousel 2 */}
			<div className="text-white text-center flex flex-col md:flex-row items-center w-full">
				<Gallery>
					<Swiper
						slidesPerView={1}
						className="w-[100%] md:w-[55%] h-[50vh] md:h-screen"
						pagination={{
							clickable: true,
							bulletActiveClass: 'swiper-pagination-bullet-active',
							bulletClass: 'swiper-pagination-bullet',
							modifierClass: 'swiper-pagination',
						}}
						modules={[Pagination, Navigation]}
						navigation
						lazy={true} // Lazy loading
					>
						{galleryImages.map(image => (
							<SwiperSlide key={image}>
								<Item
									original={image}
									thumbnail={image}
									width="1621"
									height="1081"
								>
									{({ ref, open }) => (
										<div ref={ref} onClick={open} role="button">
                      <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 1244.000000 1280.000000"
                        preserveAspectRatio="xMidYMid meet"
                        className="zoom_icon"
                      >
                        <metadata>
                          Created by potrace 1.15, written by Peter Selinger 2001-2017
                        </metadata>
                        <g
                          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                          fill="#ffffff"
                          stroke="none"
                        >
                          <path
                            d="M4025 12789 c-1029 -79 -1969 -501 -2704 -1214 -985 -955 -1456
                            -2292 -1285 -3650 156 -1244 849 -2360 1899 -3059 193 -129 272 -175 470 -274
                            452 -227 906 -362 1445 -429 207 -25 763 -25 970 0 404 50 752 138 1115 281
                            251 98 600 283 819 433 l80 54 1075 -1073 c3835 -3827 3770 -3762 3828 -3795
                            189 -105 411 -75 563 77 148 148 180 359 84 553 -21 43 -462 488 -2432 2459
                            -2212 2213 -2404 2408 -2392 2425 8 10 40 47 70 83 714 836 1088 1927 1031
                            3011 -32 610 -165 1136 -420 1664 -169 349 -340 615 -592 920 -106 128 -395
                            417 -524 524 -687 569 -1463 900 -2336 996 -174 19 -598 27 -764 14z m780
                            -949 c777 -118 1453 -463 1982 -1014 516 -536 829 -1194 930 -1951 24 -186 24
                            -618 0 -810 -54 -416 -158 -758 -342 -1125 -297 -593 -779 -1101 -1360 -1432
                            -964 -549 -2153 -590 -3152 -108 -975 470 -1667 1364 -1873 2420 -37 192 -51
                            323 -57 555 -6 258 4 423 42 651 161 971 742 1831 1588 2348 453 278 935 434
                            1512 490 22 2 164 3 315 1 217 -3 304 -8 415 -25z"
                          />
                        </g>
                      </svg>
											<div className="absolute inset-0 bg-black opacity-25 z-10"></div>
											<Image
												src={image}
												alt="Piscina Image"
												layout="fill"
												objectFit="cover"
												loading="lazy"
											/>
										</div>
									)}
								</Item>
							</SwiperSlide>
						))}
					</Swiper>
				</Gallery>
				<div className="flex flex-col md:w-[45%] gap-10 h-full p-8 pb-32 md:p-16 md:w-[45%] items-end justify-end text-right">
					{/* ICONOS */}
					<div className="">
						<h2 className="h2 py-8">JUNIOR SUITE</h2>
						<p className="p-light-16 pl-12">
							Descubre la elegancia y el confort de nuestra <b>Junior Suite,</b>
							una espaciosa habitación de 20 mt2 con un balcón privado de 10
							mt2. Perfecta para aquellos que buscan un poco más de lujo durante
							su estancia. Esta Junior Suite combina espacios interiores y
							exteriores generosos con detalles elegantes
						</p>
					</div>

					<div className="flex gap-5 md:gap-9 lg:gap-10 xl:gap-10 justify-end">
						<Image
							src="/icons/camas.svg"
							alt="Camas Queen"
							width={40}
							height={29.1}
							className="md:w-[40px] lg:w-[50px]"
						/>
						<Image
							src="/icons/wifi.svg"
							alt="Wifi"
							width={40}
							height={29.1}
							className="md:w-[40px] lg:w-[50px]"
						/>

						<Image
							src="/icons/armario.svg"
							alt="Armario"
							width={40}
							height={29.1}
							className="md:w-[40px] lg:w-[50px]"
						/>

						<Image
							src="/icons/ducha.svg"
							alt="Ducha"
							width={40}
							height={62.42}
							className="md:w-[40px] lg:w-[50px]"
						/>
					</div>
					<Button as child>
						<Link
							href="https://hotels.cloudbeds.com/es/reservation/lLxxdq"
							target="_blank"
						>
							BOOK NOW
						</Link>
					</Button>
				</div>
			</div>
		</section>
	)
};

export default SliderHabLarge;
