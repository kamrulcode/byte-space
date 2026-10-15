import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import { InputGroupInlineStart } from "@/components/ui/search";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-300  bg-[url('/assets/Hero_Frame.png')] bg-cover bg-center bg-no-repeat">
      <Header />

      <div className="max-w-230 mx-auto text-center">
        <h1 className="font-poppins text-7xl font-semibold text-white leading-21.5 tracking-tighter">
          Get Access to Hundreds Courses Available
        </h1>
        <p className=" text-lg leading-7 text-white mt-6 mb-8">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="flex items-center justify-center h-13 gap-2">
          <InputGroupInlineStart />
          <Button
            variant="secondary"
            className=" bg-amber-300 rounded-full h-13 text-lg w-32"
          >
            Search
          </Button>
        </div>
      </div>
      <div className="absolute  bottom-0 left-1/3 ">
        <Image
          src="/assets/hero-img.png"
          alt="Hero Image"
          width={700}
          height={541}
        />
      </div>

      <div className="absolute top-70 right-0">
        <Image
          src="/assets/3d_icons/Cone1.png"
          alt="Hero Image"
          width={260}
          height={260}
        />
      </div>
      <div className="absolute top-140 right-50 banner-float-3d banner-float-3d-b">
        <Image
          src="/assets/3d_icons/Cone.png"
          alt="Hero Image"
          width={188}
          height={188}
        />
      </div>
      <div className="absolute top-210 right-25 banner-float-3d banner-float-3d-c">
        <Image
          src="/assets/3d_icons/Frame2.png"
          alt="Hero Image"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute top-210 left-25 banner-float-3d banner-float-3d-d">
        <Image
          src="/assets/3d_icons/Cone2.png"
          alt="Hero Image"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute top-70 left-0 ">
        <Image
          src="/assets/3d_icons/Frame1.png"
          alt="Hero Image"
          width={260}
          height={260}
        />
      </div>
      <div className="absolute top-140 left-50 banner-float-3d banner-float-3d-f">
        <Image
          src="/assets/3d_icons/Frame.png"
          alt="Hero Image"
          width={188}
          height={188}
        />
      </div>
      <div className="absolute bottom-90 left-160 banner-float-card banner-float-card-a">
        <Image
          src="/assets/hero_card_title.png"
          alt="Hero Image"
          width={188}
          height={188}
        />
      </div>
      <div className="absolute bottom-80 right-150 banner-float-card banner-float-card-b">
        <Image
          src="/assets/hero_card.png"
          alt="Hero Image"
          width={188}
          height={188}
        />
      </div>
      <div className="absolute bottom-20 left-140 banner-float-card banner-float-card-c">
        <Image
          src="/assets/hero_card_group.png"
          alt="Hero Image"
          width={230}
          height={188}
        />
      </div>
    </div>
  );
}
