import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link"
import Image from "next/image"
import Author from './_child/author'
import fetcher from "../lib/fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/error"

export default function section3() {
  const { data, isLoading, isError} = fetcher('/api/posts');

  if(isLoading) return  <Spinner></Spinner>
  if(isError) return <Error></Error>

  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

        {/* swiper */}
        <Swiper
            slidesPerView={2}
        >
             {
                    data.map((value, index) => (
                        <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
                    ))
            }
        </Swiper>

    </section>
  )
}


function Post({ data }){
      const { id, title, category, img, description, published, author } = data;

    return (
        <div className="grid">
            <div className="images">
                <Link href={"/"}><Image src={img || ""} width={600} height={400} /></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">{category || "No Category"}</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- {published || ""}</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</Link>
                </div>
                <p className="text-gray-500 py-3">
                   {description || "No Description"}
                </p>
                { author ? <Author></Author> : <></>}
            </div>
        </div>
    )
}