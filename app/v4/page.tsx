"use client";

/*bass44*/
import { useState } from "react";
import {
  Menu,
  X,
  Zap,
  ArrowRight,
  Play,
  Star,
  FileText,
  Mic,
  Brain,
  Eye,
  MessageSquare,
  BarChart2,
  Upload,
  Cpu,
  Video,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

export default function InterviewAIPage() {
  const [open, setOpen] = useState(false);

  const features = [
    {
      icon: FileText,
      color: "from-[#6366f1] to-[#818cf8]",
      title: "Resume-Based Questions",
      desc: "Upload your resume and get personalized interview questions.",
    },
    {
      icon: Mic,
      color: "from-[#a855f7] to-[#c084fc]",
      title: "Speech Analysis",
      desc: "AI analyzes clarity, pace, and filler words in real time.",
    },
    {
      icon: Brain,
      color: "from-[#ec4899] to-[#f472b6]",
      title: "Confidence Scoring",
      desc: "Track your confidence level and communication strength.",
    },
    {
      icon: Eye,
      color: "from-[#f97316] to-[#fb923c]",
      title: "Eye Contact Analysis",
      desc: "AI checks your engagement and eye contact.",
    },
    {
      icon: MessageSquare,
      color: "from-[#10b981] to-[#34d399]",
      title: "Detailed AI Feedback",
      desc: "Get instant suggestions to improve your interview answers.",
    },
    {
      icon: BarChart2,
      color: "from-[#3b82f6] to-[#60a5fa]",
      title: "Progress Dashboard",
      desc: "Track interview progress across sessions.",
    },
  ];

  const steps = [
    {
      icon: Upload,
      step: "01",
      title: "Upload Resume",
      desc: "Upload your resume and let AI understand your experience.",
    },
    {
      icon: Cpu,
      step: "02",
      title: "AI Generates Questions",
      desc: "Get personalized interview questions instantly.",
    },
    {
      icon: Video,
      step: "03",
      title: "Record Answers",
      desc: "Practice on webcam like a real interview.",
    },
    {
      icon: Star,
      step: "04",
      title: "Receive Feedback",
      desc: "Get analytics and improvement suggestions.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0e1a] text-white overflow-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>

            <span className="text-xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              InterviewAI
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>

            <a href="#how" className="hover:text-white transition">
              How It Works
            </a>

            <a href="#cta" className="hover:text-white transition">
              Start
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-white/70 hover:text-white px-4 py-2">
              Sign In
            </button>

            <button className="text-sm bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white px-5 py-2 rounded-full font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-6 py-4 bg-[#0d1124] border-t border-white/10 flex flex-col gap-4 text-sm text-white/70">
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <a href="#cta">Start</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/70 mb-8"
          >
            <Star className="w-3.5 h-3.5 text-[#a855f7]" />
            AI-Powered Interview Coaching
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Ace Your Next
            <br />

            <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              Interview With AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10"
          >
            Practice interviews with AI-generated questions,
            speech analysis, eye contact tracking,
            and personalized feedback.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition">
              Start Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>

            <button className="flex items-center gap-2 border border-white/20 px-8 py-4 rounded-full font-medium text-lg hover:bg-white/5 transition">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <div className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-1 text-sm text-[#a855f7] mb-4">
              Features
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need
            </h2>

            <p className="text-white/50 text-lg">
              AI-powered tools for smarter interview preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#6366f1]/50 transition"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}
                >
                  <f.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {f.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how"
        className="py-24 px-6 bg-white/[0.02] border-y border-white/10"
      >
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <div className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-1 text-sm text-[#6366f1] mb-4">
              Workflow
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>

            <p className="text-white/50 text-lg">
              From resume upload to AI feedback in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-[#0d1124] border border-white/10 mb-6 mx-auto">
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center text-xs font-bold">
                    {s.step}
                  </div>

                  <s.icon className="w-9 h-9 text-[#a855f7]" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {s.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#1a1f35] to-[#0d1124] border border-white/10 rounded-3xl p-12 text-center overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#6366f1]/20 blur-[80px]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-[#a855f7] mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Start Today — It's Free
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Your Dream Job Is One
                <span className="block bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                  Practice Away
                </span>
              </h2>

              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
                Practice smarter with AI-powered mock interviews.
              </p>

              <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition">
                Start Interview
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-lg flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>

            <span className="font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              InterviewAI
            </span>
          </div>

          <div className="flex gap-6 text-sm text-white/40">
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <a href="#cta">Start</a>
          </div>

          <p className="text-sm text-white/30">
            © 2026 InterviewAI
          </p>
        </div>
      </footer>
    </main>
  );
}