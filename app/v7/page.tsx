"use client";

export default function Home() {
  const features = [
    {
      title: "Resume-Based Questions",
      desc: "AI reads your resume and generates role-specific interview questions tailored to your experience and projects.",
      icon: "📄",
    },
    {
      title: "Webcam Interview Room",
      desc: "Practice interviews with webcam simulation, microphone recording, and realistic recruiter-style sessions.",
      icon: "📹",
    },
    {
      title: "Speech Analysis",
      desc: "Track filler words, speaking pace, pauses, confidence, and communication quality in real time.",
      icon: "🎤",
    },
    {
      title: "Confidence Insights",
      desc: "Get AI-powered eye contact and emotion analysis with a recruiter-style performance score.",
      icon: "🧠",
    },
  ];

  const workflow = [
    "Upload Resume",
    "Choose Interview Role",
    "Start AI Mock Interview",
    "Answer with Webcam & Voice",
    "Receive AI Feedback Report",
  ];

  const metrics = [
    ["10K+", "Practice Sessions"],
    ["92%", "Confidence Improvement"],
    ["24/7", "AI Interview Access"],
  ];

  return (
    <main className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      
      {/* ========================= NAVBAR ========================= */}

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e1a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#top" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-lg">
              AI
            </div>

            <span className="text-xl font-bold">
              InterviewMock AI
            </span>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>

            <a href="#workflow" className="hover:text-white transition">
              Workflow
            </a>

            <a href="#dashboard" className="hover:text-white transition">
              Dashboard
            </a>
          </div>

          {/* CTA */}
          <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition">
            Start Free
          </button>
        </div>
      </nav>

      {/* ========================= HERO ========================= */}

      <section
        id="top"
        className="relative min-h-screen grid lg:grid-cols-2 gap-12 items-center px-6 py-20 max-w-7xl mx-auto"
      >
        
        {/* LEFT */}
        <div>
          
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white/70 mb-8">
            🚀 AI-Powered Mock Interview Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Practice Interviews
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Like It’s Real
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
            Practice smarter interviews with AI-generated questions,
            webcam simulation, speech analytics, confidence scoring,
            and recruiter-style reports.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Start Free Interview
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/5 transition">
              View Demo
            </button>
          </div>

          {/* Metrics */}
          <div className="mt-12 flex flex-wrap gap-8">
            {metrics.map(([value, label]) => (
              <div key={value}>
                <p className="text-3xl font-bold">
                  {value}
                </p>

                <p className="text-white/50 text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl">
            
            {/* Browser Top */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* Interview Panel */}
            <div className="grid md:grid-cols-2 gap-4">
              
              {/* Webcam */}
              <div className="bg-[#1a1f35] rounded-2xl aspect-video relative overflow-hidden flex items-center justify-center">
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mx-auto mb-3 flex items-center justify-center text-3xl">
                    👤
                  </div>

                  <p className="text-sm text-white/50">
                    Webcam Active
                  </p>
                </div>

                <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-2 rounded-lg text-xs">
                  Eye Contact 84%
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-[#1a1f35] rounded-2xl p-5 flex flex-col justify-between">
                
                <div>
                  <p className="text-sm text-white/50 mb-2">
                    Question 3 of 6
                  </p>

                  <h2 className="text-2xl font-bold leading-tight">
                    Tell me about a challenging project you worked on.
                  </h2>
                </div>

                {/* Sound Bars */}
                <div className="flex items-end gap-2 h-16 mt-8">
                  {[40, 80, 55, 90, 65, 35].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-1 bg-gradient-to-t from-pink-500 to-purple-400 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= FEATURES ========================= */}

      <section
        id="features"
        className="py-24 px-6 bg-white/[0.02] border-y border-white/10"
      >
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            
            <div className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-purple-400 mb-4">
              Features
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need To
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Practice Smarter
              </span>
            </h2>

            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              AI-powered tools designed for students preparing
              for internships, placements, and technical interviews.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 hover:bg-white/[0.05] transition"
              >
                
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-white/50 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= WORKFLOW ========================= */}

      <section
        id="workflow"
        className="py-24 px-6"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            
            <div className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
              Workflow
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Resume Upload
              <span className="block text-white/60">
                To Recruiter Report
              </span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed">
              Browser-first architecture with speech recognition,
              webcam analytics, AI-generated questions, and recruiter-style
              feedback reports.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            
            {workflow.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-5 bg-white/[0.03] border border-white/10 rounded-2xl p-5"
              >
                
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {step}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= DASHBOARD ========================= */}

      <section
        id="dashboard"
        className="py-24 px-6 bg-[#111827]"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            
            <div className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-pink-400 mb-4">
              Dashboard
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recruiter-Style
              <span className="block text-white/60">
                Performance Reports
              </span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed">
              Analyze technical depth, communication,
              confidence, and eye contact with visual analytics.
            </p>
          </div>

          {/* Right */}
          <div className="bg-white rounded-3xl p-8 text-black shadow-2xl">
            
            <div className="flex justify-between items-center mb-8">
              
              <div>
                <p className="text-gray-500 text-sm">
                  Candidate Report
                </p>

                <h3 className="text-3xl font-bold">
                  Overall Score
                </h3>
              </div>

              <div className="text-5xl font-bold text-green-600">
                87
              </div>
            </div>

            <div className="space-y-6">
              
              {[
                ["Technical Depth", "82%"],
                ["Communication", "76%"],
                ["Confidence", "88%"],
                ["Eye Contact", "84%"],
              ].map(([label, width]) => (
                <div key={label}>
                  
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span>{label}</span>
                    <span>{width}</span>
                  </div>

                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      style={{ width }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================= CTA ========================= */}

      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <div className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-purple-400 mb-6">
            Start Today
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready To Ace
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Next Interview?
            </span>
          </h2>

          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of students practicing interviews
            with AI-powered feedback and recruiter-style analytics.
          </p>

          <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-5 rounded-2xl font-semibold text-lg hover:scale-105 transition">
            Start Practicing Free
          </button>

          <p className="mt-6 text-sm text-white/30">
            No credit card required • Free forever plan
          </p>
        </div>
      </section>

      {/* ========================= FOOTER ========================= */}

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/40 text-sm">
        <p>
          InterviewMock AI — Built for students, by students.
        </p>
      </footer>
    </main>
  );
}
