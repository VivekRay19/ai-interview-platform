/* =========================
   HERO COMPONENT
========================= */

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
          🚀 AI-Powered Interview Preparation
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Practice Smarter Interviews
          <span className="block text-blue-200">
            With AI Feedback
          </span>
        </h1>

        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Get instant mock interviews with AI-generated questions,
          resume-based feedback, webcam analytics, speech analysis,
          and confidence tracking — all in one free platform for students.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <button className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition duration-300">
            Start Free Interview
          </button>

          <button className="border border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition duration-300">
            View Demo
          </button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-100">
          
          <div>
            <p className="text-2xl font-bold text-white">
              10K+
            </p>
            <p>Practice Sessions</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-white">
              92%
            </p>
            <p>Confidence Improvement</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-white">
              24/7
            </p>
            <p>AI Interview Access</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   FEATURES COMPONENT
========================= */

function Features() {
  const features = [
    {
      title: "Resume-Based Questions",
      desc: "AI reads your resume and generates role-specific questions so you practice exactly what companies will ask.",
    },
    {
      title: "Webcam & Audio Practice",
      desc: "Simulate real interviews with webcam and microphone feedback on speech, pace, and filler words.",
    },
    {
      title: "Confidence & Emotion Insights",
      desc: "Analyze eye contact, confidence, and emotional expression with privacy-first AI.",
    },
    {
      title: "Progress Dashboard",
      desc: "Track improvement over time with detailed scores, analytics, and personalized tips.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Features
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose InterviewMock AI?
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Built for students, by a student. Practice smarter,
            improve faster, and gain confidence before your next interview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300"
            >
              
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-5">
                ✨
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   CTA COMPONENT
========================= */

function CallToAction() {
  return (
    <section className="bg-gray-900 text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm mb-6">
          🎯 Ready to Practice?
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Ace Your
          <span className="block text-blue-400">
            Next Interview?
          </span>
        </h2>

        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join students worldwide using InterviewMock AI
          to practice smarter interviews with AI-powered
          resume analysis, speech analytics, and confidence tracking.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <button className="bg-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-500 transition duration-300">
            Start Practicing Now
          </button>

          <button className="border border-gray-400 text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-700 transition duration-300">
            Learn More
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          No credit card required • Free forever for students
        </p>
      </div>
    </section>
  );
}

/* =========================
   MAIN PAGE
========================= */

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
              AI
            </div>

            <span className="text-xl font-bold text-gray-900">
              InterviewMock AI
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>

            <a href="#cta" className="hover:text-blue-600 transition">
              Get Started
            </a>
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition">
            Start Free
          </button>
        </div>
      </nav>

      {/* Sections */}
      <Hero />

      <div id="features">
        <Features />
      </div>

      <div id="cta">
        <CallToAction />
      </div>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 text-center text-sm">
        © 2026 InterviewMock AI — Built for students, by students.
      </footer>
    </main>
  );
}
