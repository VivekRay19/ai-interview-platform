"use client";

import React from "react";
import {
  Play,
  Camera,
  Brain,
  BarChart3,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white overflow-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>

            <span className="text-2xl font-bold tracking-tight">
              PrepLens
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="hover:text-violet-400 transition"
            >
              Features
            </a>

            <a
              href="#how"
              className="hover:text-violet-400 transition"
            >
              How it Works
            </a>

            <a
              href="#demo"
              className="hover:text-violet-400 transition"
            >
              Demo
            </a>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-full border border-zinc-700 hover:bg-zinc-800 transition">
              Sign in
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("get-started")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 rounded-full font-medium transition flex items-center gap-2"
            >
              Start Free Practice
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            {/* BETA BADGE */}
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-1.5 mb-6">
              <span className="text-emerald-400 text-sm font-medium">
                ✦ Now in Beta
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Master Interviews with
              <br />

              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                AI That Sees You
              </span>
            </h1>

            {/* DESC */}
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              Realistic webcam mock interviews with
              real-time eye contact, emotion,
              speech, and confidence analysis.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button
                onClick={() =>
                  document
                    .getElementById("get-started")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="px-8 py-4 bg-white text-black rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:scale-105 transition"
              >
                Start Mock Interview Now

                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="px-8 py-4 border border-zinc-700 rounded-2xl font-medium text-lg flex items-center justify-center gap-3 hover:bg-zinc-900 transition">
                <Play className="w-5 h-5" />

                Watch Demo
              </button>
            </div>

            <p className="text-sm text-zinc-500 mt-6">
              No credit card required • Works in browser
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-t border-b border-zinc-800 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-70">
          
          <div className="text-lg font-medium">
            Google
          </div>

          <div className="text-lg font-medium">
            Microsoft
          </div>

          <div className="text-lg font-medium">
            Amazon
          </div>

          <div className="text-lg font-medium">
            Goldman Sachs
          </div>

          <div className="text-lg font-medium">
            TCS • Infosys
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section
        id="features"
        className="py-24 px-6 bg-zinc-950"
      >
        <div className="max-w-6xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Everything You Need to Crush Interviews
            </h2>

            <p className="text-zinc-400 text-xl">
              Built for students, by students
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                icon: (
                  <Camera className="w-8 h-8" />
                ),
                title:
                  "Webcam Interview Simulation",
                desc:
                  "Practice like you're sitting in front of the recruiter.",
              },

              {
                icon: (
                  <Brain className="w-8 h-8" />
                ),
                title:
                  "Resume-Based Questions",
                desc:
                  "AI asks role-specific intelligent questions.",
              },

              {
                icon: (
                  <BarChart3 className="w-8 h-8" />
                ),
                title:
                  "Multimodal Analysis",
                desc:
                  "Eye contact • Speech • Emotion • Confidence",
              },

              {
                icon: (
                  <Users className="w-8 h-8" />
                ),
                title:
                  "Detailed Feedback Report",
                desc:
                  "Timestamped highlights and improvement tips.",
              },

              {
                icon: (
                  <Star className="w-8 h-8" />
                ),
                title:
                  "Progress Tracking",
                desc:
                  "Track interview performance over time.",
              },

              {
                icon: (
                  <Play className="w-8 h-8" />
                ),
                title:
                  "Multiple Interview Modes",
                desc:
                  "Behavioral, Technical, HR, Stress interviews.",
              },
            ].map((feature, i) => (
              
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-violet-500/50 transition"
              >
                
                <div className="mb-6 text-violet-400">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        className="py-24 px-6"
      >
        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-16">
            How PrepLens Works
          </h2>

          <div className="space-y-16">

            {[
              [
                "Upload Resume",
                "AI understands your experience instantly.",
              ],

              [
                "Choose Interview Type",
                "Behavioral, Technical, or HR round.",
              ],

              [
                "Face the AI Interviewer",
                "Live webcam mock interview.",
              ],

              [
                "Get Pro-Level Report",
                "Analytics and improvement suggestions.",
              ],
            ].map(([step, desc], index) => (
              
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-3xl font-bold">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-3xl font-semibold mb-2">
                    {step}
                  </h3>

                  <p className="text-zinc-400 text-lg">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="get-started"
        className="py-24 px-6 bg-gradient-to-b from-transparent via-violet-950/30 to-transparent"
      >
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Become Interview-Ready?
          </h2>

          <p className="text-2xl text-zinc-400 mb-10">
            Practice smarter with AI.
          </p>

          <button className="px-10 py-5 text-xl bg-white text-black rounded-2xl font-semibold hover:bg-zinc-100 transition flex items-center gap-3 mx-auto">
            Start Your First Mock Interview
          </button>

          <p className="text-sm text-zinc-500 mt-6">
            Takes less than 30 seconds to begin
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-zinc-500">

          <p>
            Built by Vivek • Student Project
          </p>

          <p className="mt-2">
            Made with ❤️ for students cracking dream jobs
          </p>
        </div>
      </footer>
    </div>
  );
}
