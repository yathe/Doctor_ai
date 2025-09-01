"use client";

import { motion } from "motion/react";
import { FeatureBentoGrid } from "./_components/FeatureBentoGrid";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSectionOne() {
  return (
    <div className="relative my-10 flex flex-col items-center justify-center">
      <Navbar />

      {/* Decorative side gradients */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-blue-400/60 to-transparent" />
      <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-teal-400/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

      <div className="px-4 py-10 md:py-20">
        {/* Animated Heading */}
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-6xl dark:text-slate-200">
          {"Patient Care with AI Voice Agent"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-slate-600 dark:text-slate-400"
        >
          Accurate medical assistance through natural voice conversations.
          Automate appointment scheduling, symptom triage, and care — 24/7.
        </motion.p>

        {/* CTA */}
        <Link href={"/sign-in"}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            
          </motion.div>
        </Link>

        {/* Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-20 rounded-3xl border border-blue-100 bg-blue-50/40 p-4 shadow-xl dark:border-teal-800/40 dark:bg-slate-900/60"
        >
          <div className="w-full overflow-hidden rounded-xl border border-blue-200 dark:border-teal-700">
            <img
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
              alt="AI Doctor demo"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>

      {/* Features */}
      <FeatureBentoGrid />
    </div>
  );
}

const Navbar = () => {
  const { user } = useUser();
  return (
    <nav className="flex w-full items-center justify-between border-b border-slate-200 bg-white/70 px-4 py-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-500" />
        <h1 className="text-base font-bold text-slate-700 md:text-2xl dark:text-slate-200">
          AI Doctor
        </h1>
      </div>

      {!user ? (
        <Link href={"/sign-in"}>
          <button className="w-24 transform rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 px-6 py-2 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:w-32">
            Login
          </button>
        </Link>
      ) : (
        <div className="flex items-center gap-5">
          <UserButton />
          <Button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md hover:shadow-lg">
            <Link href={"/dashboard"}>Dashboard</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};
