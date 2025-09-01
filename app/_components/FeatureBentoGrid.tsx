"use client";
import { cn } from "@/lib/utils";
import React from "react";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function FeatureBentoGrid() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[22rem] gap-6">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn(
            "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all",
            item.className
          )}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-4 space-y-3"
    >
      <motion.div className="flex items-center space-x-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-teal-400" />
        <div className="w-full bg-blue-100 h-4 rounded-md dark:bg-slate-700" />
      </motion.div>
      <motion.div className="flex items-center justify-end space-x-3">
        <div className="w-2/3 bg-blue-100 h-4 rounded-md dark:bg-slate-700" />
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-teal-400" />
      </motion.div>
      <motion.div className="flex items-center space-x-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-teal-400" />
        <div className="w-full bg-blue-100 h-4 rounded-md dark:bg-slate-700" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  return (
    <motion.div className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-3 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-full h-4 bg-teal-100 dark:bg-slate-700 rounded-md"
          style={{ maxWidth: `${Math.random() * (100 - 50) + 50}%` }}
        />
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  return (
    <motion.div
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 dark:from-blue-800 dark:via-teal-800 dark:to-green-800"
    />
  );
};

const SkeletonFour = () => {
  return (
    <motion.div className="flex flex-1 w-full h-full min-h-[6rem] space-x-3 p-4 bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-800 dark:to-slate-900 rounded-xl">
      {["Caring", "Expert", "Trusted"].map((label, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center w-1/3 bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 rounded-xl p-4 shadow-sm"
        >
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 to-teal-400" />
          <p className="mt-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
            {label}
          </p>
          <p className="mt-2 text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            Health First
          </p>
        </div>
      ))}
    </motion.div>
  );
};

const SkeletonFive = () => {
  return (
    <motion.div className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-3 bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-4">
      <div className="flex items-start space-x-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-teal-400 to-blue-400" />
        <p className="text-sm text-slate-600 dark:text-slate-300">
          “Quick checkups and reliable guidance for your health needs.”
        </p>
      </div>
      <div className="flex items-center justify-end space-x-3">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Stay Healthy
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-400 to-green-400" />
      </div>
    </motion.div>
  );
};

const items = [
  {
    title: "AI Symptom Checker",
    description: (
      <span className="text-sm text-slate-600 dark:text-slate-300">
        Get quick insights into your symptoms powered by AI.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Medical Proofreading",
    description: (
      <span className="text-sm text-slate-600 dark:text-slate-300">
        Ensure accuracy in medical reports with AI review.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-5 w-5 text-teal-500" />,
  },
  {
    title: "Context-Aware Advice",
    description: (
      <span className="text-sm text-slate-600 dark:text-slate-300">
        Receive recommendations tailored to your health context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-5 w-5 text-green-500" />,
  },
  {
    title: "Patient Sentiment Analysis",
    description: (
      <span className="text-sm text-slate-600 dark:text-slate-300">
        Understand patient emotions for better care delivery.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-5 w-5 text-blue-600" />,
  },
  {
    title: "AI Health Summarization",
    description: (
      <span className="text-sm text-slate-600 dark:text-slate-300">
        Summarize long reports into actionable health notes.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-5 w-5 text-teal-600" />,
  },
];
