"use client";

import Image from "next/image";
import { useState } from "react";
import { BarChart3, Clock3, MessageCircle, Star, Users } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: "Build Digital Asset",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    price: 25,
    position: "left-[0px] top-[140px] z-10",
  },
  {
    title: "the Power of Big Data",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    price: 25,
    position: "left-[90px] top-[95px] z-20",
  },
];

const avatars = [
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=47",
  "https://i.pravatar.cc/64?img=33",
  "https://i.pravatar.cc/64?img=5",
];

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  return (
    <article
      className={`absolute w-70 rounded-[14px] border border-gray-200 bg-white p-2 shadow-sm ${course.position}`}
    >
      <div className="relative h-40 overflow-hidden rounded-lg">
        <Image
          src={course.image}
          alt={course.title}
          fill
          unoptimized
          sizes="242px"
          className="object-cover"
        />

        <div className="absolute inset-x-2 bottom-2 flex justify-between gap-1">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((text) => (
            <span
              key={text}
              className="rounded-full bg-white/80 px-1.5 py-1 text-[7px] text-gray-700 backdrop-blur"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between gap-1">
        <h3 className="truncate text-xl font-bold text-gray-900">
          {course.title}
        </h3>

        <span className="flex items-center gap-0.5 text-lg text-gray-500">
          4.5
          <Star size={18} fill="#d1d5db" strokeWidth={0} />
        </span>
      </div>

      <p className="text-[8px] text-blue-600">by peruper studio</p>

      <div className="mt-2 flex items-center justify-between">
        <span className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-[8px] text-gray-600">
          <BarChart3 size={10} />
          Beginner
        </span>

        <div className="flex items-center">
          {avatars.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Student ${index + 1}`}
              width={24}
              height={24}
              unoptimized
              className={`h-6 w-6 rounded-full border border-white object-cover ${
                index ? "-ml-2" : ""
              }`}
            />
          ))}

          <span className="-ml-1 grid h-6 w-6 place-items-center rounded-full border border-white bg-lime-400 text-[7px] font-bold">
            26+
          </span>
        </div>
      </div>

      <p className="mt-2 text-xl font-bold text-blue-600">
        ${course.price}
        <span className="text-[7px] font-normal text-gray-400">/lifetime</span>
      </p>
    </article>
  );
}

function Decorations() {
  return (
    <>
      {/* Lime ring */}
      <div className="absolute left-12.5 top-43.75 z-30 h-14 w-14 animate-[spin_12s_linear_infinite] rounded-full border-12 border-lime-400 transform-[rotateX(20deg)]" />

      {/* Triangle */}
      <div className="absolute bottom-7.5 left-3.75 z-30 h-0 w-0 rotate-12 border-b-72 border-l-36 border-r-36 border-b-lime-300 border-l-transparent border-r-transparent" />

      {/* White squiggle */}
      <div className="absolute bottom-20 right-35 z-10 w-17.5 rotate-[-30deg] text-white">
        <svg viewBox="0 0 100 120" fill="none">
          <path
            d="M15 15 C85 -5 90 20 20 40 S15 65 80 60 S85 85 25 105"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Connect your registration API here.
    console.log({ fullName, email, password });
  }

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#0739e9] text-gray-900">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="mainContainer">
        <div className=" py-10">
          <Link href="/">
            <Image
              src="/assets/Vector.png"
              alt="ByteSpace Logo"
              width={29}
              height={48}
            />
          </Link>
        </div>

        <div className="relative mx-auto grid  w-full  grid-cols-1  gap-10  py-12 lg:grid-cols-2  xl:gap-20">
          {/* Left side */}
          <section className="relative mx-auto min-h-125 w-full max-w-142.5 text-white lg:min-h-162.5">
            <div className="absolute left-0 top-0 z-30 max-w-120">
              <h1 className="text-xl font-bold">Sign up and come in</h1>

              <p className="mt-3 text-lg leading-6 text-blue-100/90">
                The registration process is straightforward, uncomplicated, and
                efficient, allowing users to sign up quickly, easily, and at no
                cost.
              </p>
            </div>

            <div className="absolute left-0 top-46.25 h-120 w-full ">
              {courses.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}

              <div className="absolute -bottom-3.75 left-31.25 z-40 w-43.75 rounded-xl bg-lime-300 p-3 text-gray-900 shadow-lg">
                <p className="text-[10px] font-medium">Happy Students</p>

                <p className="mt-1 text-[8px] text-gray-600">4.8/5 ⭐</p>

                <div className="mt-2 flex items-center">
                  {avatars.map((src, index) => (
                    <Image
                      key={src}
                      src={src}
                      alt="Student avatar"
                      width={28}
                      height={28}
                      unoptimized
                      className={`h-7 w-7 rounded-full border border-white object-cover ${
                        index ? "-ml-2" : ""
                      }`}
                    />
                  ))}

                  <span className="-ml-1 grid h-7 w-7 place-items-center rounded-full bg-black text-[7px] text-white">
                    26+
                  </span>
                </div>
              </div>

              <Decorations />
            </div>
          </section>

          {/* Right side: sign-up form */}
          <section className="mx-auto w-full max-w-145 rounded-[26px] bg-white px-7 py-9 shadow-xl sm:px-12 sm:py-12 lg:px-14 lg:py-14">
            <div className="mb-8">
              <p className="text-sm text-blue-600">Create an Account</p>

              <h2 className="mt-1 text-5xl font-extrabold leading-tight tracking-tight sm:text-4xl font-poppins">
                Welcome to
                <br />
                ByteSpace
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="form-control w-full gap-2">
                <span className="label-text text-sm font-medium">
                  Full Name
                </span>

                <input
                  type="text"
                  placeholder="Jamie Davis"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="input input-bordered h-12 w-full rounded-xl border-gray-200 bg-white text-sm outline-none focus:border-blue-500"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="form-control w-full gap-2">
                <span className="label-text text-sm font-medium">Email</span>

                <input
                  type="email"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered h-12 w-full rounded-xl border-gray-200 bg-white text-sm outline-none focus:border-blue-500"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="form-control w-full gap-2">
                <span className="label-text text-sm font-medium">Password</span>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered h-12 w-full rounded-xl border-gray-200 bg-white text-sm outline-none focus:border-blue-500"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </label>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="btn min-h-0 h-11 rounded-full border-0 bg-lime-400 px-8 text-sm font-medium text-gray-900 shadow-none hover:bg-lime-300"
                >
                  Continue
                </button>
              </div>
            </form>

            <p className="mt-16 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a href="/signin" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
