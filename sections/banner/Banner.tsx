import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";
import { InputGroupInlineStart } from "@/components/ui/search";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative w-full h-[1200px]  bg-[url('/assets/hero_frame.png')] bg-cover bg-center bg-no-repeat">
      <Header />

      <div className="max-w-230 mx-auto text-center">
        <h1 className="font-poppins text-7xl font-semibold text-white leading-21.5 tracking-tighter">
          Get Access to Hundreds Courses Available
        </h1>
        <p className=" text-lg leading-7 text-white mt-6 mb-8">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="flex items-center justify-center h-13 gap-4">
          <InputGroupInlineStart />
          <Button variant="secondary" className=" bg-amber-300 rounded-full">
            Search
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Image
          src="/assets/hero-img.png"
          alt="Hero Image"
          width={700}
          height={541}
        />
      </div>

      <div className="absolute top-70 right-0 ">
        <Image
          src="/assets/3d_icons/Cone1.png"
          alt="Hero Image"
          width={260}
          height={260}
        />
      </div>
      <div className="absolute top-140 right-50 ">
        <Image
          src="/assets/3d_icons/Cone.png"
          alt="Hero Image"
          width={188}
          height={188}
        />
      </div>
      <div className="absolute top-210 right-25 ">
        <Image
          src="/assets/3d_icons/Frame2.png"
          alt="Hero Image"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute top-210 left-25 ">
        <Image
          src="/assets/3d_icons/Cone2.png"
          alt="Hero Image"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute top-70 left-0  animate-[rotateX_8s_linear_infinite] transform-3d ">
        <Image
          src="/assets/3d_icons/Frame1.png"
          alt="Hero Image"
          width={260}
          height={260}
        />
      </div>
      <div className="absolute top-140 left-50 ">
        <Image
          src="/assets/3d_icons/Frame.png"
          alt="Hero Image"
          width={188}
          height={188}
        />
      </div>
    </div>
  );
}
