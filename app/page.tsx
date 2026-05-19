export default function InterviewAIHomePage() {
  const features = [
    {
      title: "AI Mock Interviews",
      description:
        "Practice realistic interviews with AI-generated questions tailored to your resume and role.",
    },
    {
      title: "Real-Time Feedback",
      description:
        "Get insights on confidence, speaking pace, filler words, and communication clarity.",
    },
    {
      title: "Eye Contact Analysis",
      description:
        "Track attention and engagement using webcam-based computer vision analysis.",
    },
    {
      title: "Performance Dashboard",
      description:
        "Visualize interview progress, strengths, weaknesses, and improvement trends.",
    },
  ];

  const steps = [
    "Upload your resume",
    "Choose your interview role",
    "Start the AI interview session",
    "Receive instant analytics & feedback",
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">PrepAI</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
            <a href="#how" className="hover:text-white transition">
              How It Works
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </nav>

          <button className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white hover:text-black transition">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 mb-6">
            AI-Powered Interview Preparation Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Practice Interviews
            <span className="block text-white/60">Like It’s Real.</span>
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
            PrepAI helps students improve confidence, communication, and
            interview performance using AI-powered mock interviews, speech
            analysis, and real-time feedback.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-white text-black px-7 py-4 font-medium hover:scale-105 transition duration-300">
              Start Mock Interview
            </button>

            <button className="rounded-2xl border border-white/20 px-7 py-4 font-medium hover:bg-white/10 transition">
              Watch Demo
            </button>
          </div>

          <div className="mt-10 flex items-center gap-8 text-sm text-white/60">
            <div>
              <p className="text-2xl font-bold text-white">10K+</p>
              <p>Practice Sessions</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">92%</p>
              <p>Confidence Improvement</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">24/7</p>
              <p>AI Interview Access</p>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-white/50">Live Interview Session</p>
                <h2 className="text-2xl font-semibold mt-1">
                  Frontend Developer Interview
                </h2>
              </div>

              <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
            </div>

            <div className="grid gap-5">
              <div className="rounded-3xl bg-black/40 border border-white/10 p-6 h-56 flex items-center justify-center">
                <p className="text-white/40">Webcam Preview Area</p>
              </div>

              <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                <p className="text-sm text-white/50 mb-2">AI Question</p>
                <p className="text-lg leading-relaxed">
                  “Tell me about a challenging project you worked on and how you solved the problem.”
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-sm text-white/50">Confidence</p>
                  <h3 className="text-2xl font-bold mt-2">87%</h3>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-sm text-white/50">Eye Contact</p>
                  <h3 className="text-2xl font-bold mt-2">81%</h3>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-sm text-white/50">Speech Clarity</p>
                  <h3 className="text-2xl font-bold mt-2">90%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Features
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Everything You Need To Prepare Smarter
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <div className="h-5 w-5 rounded-full bg-white" />
              </div>

              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Workflow
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              A Smarter Way To Practice Interviews
            </h2>

            <div className="mt-12 space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="h-12 w-12 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{step}</h3>
                    <p className="mt-2 text-white/60">
                      Seamless AI-assisted workflow designed for students and professionals.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8">
            <div className="rounded-[28px] border border-white/10 bg-black/40 p-8">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-white/50 text-sm">Performance Analytics</p>
                  <h3 className="text-3xl font-bold mt-2">Your Growth Dashboard</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Confidence</span>
                    <span>87%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[87%] bg-white rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Eye Contact</span>
                    <span>81%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[81%] bg-white rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Speech Clarity</span>
                    <span>90%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[90%] bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Start Today
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Prepare Smarter.
              <span className="block text-white/60">Interview Better.</span>
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
              Build confidence with AI-powered mock interviews, performance tracking, and personalized feedback.
            </p>

            <button className="mt-10 rounded-2xl bg-white text-black px-8 py-4 font-semibold hover:scale-105 transition duration-300">
              Launch Platform
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="border-t border-white/10 py-8 px-6 text-center text-white/40 text-sm"
      >
        <p>
          PrepAI — AI-Powered Interview Preparation Platform for Students & Professionals.
        </p>
      </footer>
    </main>
  );
}
