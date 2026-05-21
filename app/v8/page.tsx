"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Prevent any accidental navigation
  const preventNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    // Optional: show a small console hint (can be removed)
    console.log("Navigation disabled – demo mode");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">InterviewAI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How it works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition">Testimonials</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={preventNavigation}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Sign in
            </button>
            <button
              onClick={preventNavigation}
              className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            >
              Start free trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 px-6 bg-white">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-block bg-gray-100 rounded-full px-4 py-1.5 text-sm text-gray-700 mb-6">
            AI-powered mock interviews
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Practice interviews with<br />
            <span className="text-gray-500">AI that actually helps.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Real‑time speech analysis, eye contact tracking, and personalized feedback.
            Land your dream job with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={preventNavigation}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition text-lg cursor-pointer"
            >
              Start practicing — free
            </button>
            <a
              href="#demo"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition text-lg inline-block"
            >
              Watch demo
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-500">
            <span>✓ No credit card required</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 7 days free trial</span>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 border-y border-gray-100 bg-gray-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wide mb-8">
            Trusted by job seekers from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <span className="text-xl font-semibold text-gray-400">Google</span>
            <span className="text-xl font-semibold text-gray-400">Microsoft</span>
            <span className="text-xl font-semibold text-gray-400">Amazon</span>
            <span className="text-xl font-semibold text-gray-400">Meta</span>
            <span className="text-xl font-semibold text-gray-400">Netflix</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced AI that gives you honest, actionable feedback.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
          <p className="text-xl text-gray-600 mb-16">Three simple steps to interview mastery</p>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i}>
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo video placeholder */}
      <section id="demo" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See it in action</h2>
          <p className="text-xl text-gray-600 mb-10">A 2‑minute demo of how InterviewAI works.</p>
          <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-500">Demo video – coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by job seekers
            </h2>
            <p className="text-xl text-gray-600">Real results from real people.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 mb-16">Start free, upgrade when you need more.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`border rounded-xl p-8 text-left ${
                  plan.popular ? "border-gray-900 shadow-lg" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="inline-block bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Most popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-500">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={preventNavigation}
                  className={`block w-full text-center py-3 rounded-lg font-medium transition cursor-pointer ${
                    plan.popular
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to ace your next interview?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of job seekers who improved with InterviewAI.
          </p>
          <button
            onClick={preventNavigation}
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer"
          >
            Start practicing — free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-gray-900 text-xl mb-4">InterviewAI</div>
              <p className="text-gray-500 text-sm">
                AI-powered interview practice that actually works.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#features" className="hover:text-gray-900">Features</a></li>
                <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="#demo" className="hover:text-gray-900">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><button onClick={preventNavigation} className="hover:text-gray-900">About</button></li>
                <li><button onClick={preventNavigation} className="hover:text-gray-900">Blog</button></li>
                <li><button onClick={preventNavigation} className="hover:text-gray-900">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><button onClick={preventNavigation} className="hover:text-gray-900">Privacy</button></li>
                <li><button onClick={preventNavigation} className="hover:text-gray-900">Terms</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            © 2025 InterviewAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Data (unchanged)
const features = [
  {
    icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    title: "Webcam simulation",
    description: "Realistic interview environment with live video feedback."
  },
  {
    icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    title: "Speech analysis",
    description: "Get insights on clarity, pace, and filler words."
  },
  {
    icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
    title: "Eye contact tracking",
    description: "Measure and improve your eye contact with AI."
  },
  {
    icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: "Confidence scoring",
    description: "Track your confidence over time with data."
  },
  {
    icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: "Resume-based questions",
    description: "Personalized questions based on your background."
  },
  {
    icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Actionable feedback",
    description: "Get specific tips to improve each answer."
  }
];

const steps = [
  {
    title: "Upload your resume",
    description: "Tell us about your background and target role."
  },
  {
    title: "Practice with AI",
    description: "Answer realistic questions while we analyze your delivery."
  },
  {
    title: "Get your report",
    description: "Receive detailed feedback and track your progress."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer at Google",
    text: "InterviewAI helped me identify my filler words and improve my confidence. I got the offer!"
  },
  {
    name: "Michael Chen",
    role: "Product Manager at Microsoft",
    text: "The eye contact tracking was eye‑opening. I now feel much more prepared."
  },
  {
    name: "Priya Patel",
    role: "Data Scientist at Amazon",
    text: "The resume‑based questions were incredibly relevant. Best practice tool out there."
  }
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "month",
    features: ["3 interviews per month", "Basic analytics", "Resume upload", "Email support"],
    buttonText: "Get started",
    popular: false
  },
  {
    name: "Pro",
    price: "$12",
    period: "month",
    features: ["Unlimited interviews", "Advanced analytics", "AI feedback", "Priority support", "Export reports"],
    buttonText: "Start free trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "month",
    features: ["Team dashboard", "API access", "White labeling", "Dedicated support"],
    buttonText: "Contact sales",
    popular: false
  }
];