"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [cameraActive, setCameraActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Cleanup webcam stream properly
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // File Upload
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  // Camera Toggle
  const toggleCamera = async () => {
    try {
      // TURN OFF CAMERA
      if (cameraActive) {
        if (streamRef.current) {
          streamRef.current
            .getTracks()
            .forEach((track) => track.stop());
        }

        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }

        setCameraActive(false);
        return;
      }

      // TURN ON CAMERA
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      streamRef.current = stream;
      setCameraActive(true);
    } catch (error) {
      console.error(error);
      alert("Unable to access webcam.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white overflow-x-hidden relative">
      
      {/* BACKGROUND */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center font-bold">
              AI
            </div>

            <h1 className="text-lg font-bold">
              Interviewer.
              <span className="text-cyan-400">ai</span>
            </h1>
          </div>

          {/* TOGGLE */}
          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full">
            <span className="text-xs text-slate-400">
              DEMO MODE
            </span>

            <button
              onClick={() => setIsDemoMode(!isDemoMode)}
              className={`w-10 h-5 rounded-full p-0.5 transition ${
                isDemoMode
                  ? "bg-cyan-400"
                  : "bg-slate-700"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  isDemoMode
                    ? "translate-x-5"
                    : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex px-3 py-1 rounded-full text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
              ✨ Free Developer Tier Active
            </span>

            <h1 className="text-5xl font-extrabold leading-tight">
              Master your interviews with{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Real-Time AI
              </span>
            </h1>

            <p className="mt-5 text-slate-400 text-lg max-w-xl">
              Upload your resume, test AI tracking,
              and practice interviews securely inside
              your browser.
            </p>
          </motion.div>

          {/* CARD */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-md"
          >
            {isDemoMode ? (
              <div className="space-y-4">
                <h3 className="text-cyan-400 uppercase text-sm font-semibold">
                  Simulated Sandbox Active
                </h3>

                <p className="text-slate-400 text-sm">
                  Running local mock interview data.
                </p>

                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                  Launch Demo Interview
                </button>
              </div>
            ) : (
              <div className="space-y-6">

                {/* SELECT */}
                <div>
                  <label className="block mb-2 text-sm text-slate-300">
                    Target Career Field
                  </label>

                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">
                    <option>Software Engineering</option>
                    <option>UI/UX Design</option>
                    <option>Product Management</option>
                  </select>
                </div>

                {/* FILE UPLOAD */}
                <div>
                  <label className="block mb-2 text-sm text-slate-300">
                    Upload Resume (PDF)
                  </label>

                  <div className="relative border-2 border-dashed border-slate-800 rounded-xl p-6 text-center bg-slate-950/40 hover:border-purple-500/50 transition">
                    
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />

                    <span className="text-sm text-slate-400">
                      {fileName
                        ? `📄 ${fileName}`
                        : "Drag file here or click to browse"}
                    </span>

                    <p className="text-xs text-slate-600 mt-1">
                      PDF format only
                    </p>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  disabled={!fileName}
                  className={`w-full py-3 rounded-xl transition ${
                    fileName
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600"
                      : "bg-slate-800 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  Generate AI Interview Room
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5">

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-5 shadow-2xl"
          >
            {/* TOP */}
            <div className="flex justify-between items-center">
              
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    cameraActive
                      ? "bg-emerald-400 animate-pulse"
                      : "bg-slate-600"
                  }`}
                />

                <span className="text-xs text-slate-400 uppercase">
                  Hardware Canvas
                </span>
              </div>

              <span className="text-[10px] px-2 py-1 rounded bg-slate-800 text-slate-400">
                MEDIAPIPE_V2
              </span>
            </div>

            {/* VIDEO */}
            <div className="mt-4 h-[420px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center relative">
              
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className={`w-full h-full object-cover scale-x-[-1] ${
                  cameraActive ? "block" : "hidden"
                }`}
              />

              {!cameraActive && (
                <div className="text-center">
                  <div className="text-4xl mb-3">
                    📹
                  </div>

                  <p className="text-sm text-slate-400">
                    Camera Feed Standby
                  </p>
                </div>
              )}

              {cameraActive && (
                <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                  
                  <div className="bg-slate-900/90 px-3 py-1 rounded text-xs text-cyan-400">
                    EYE CONTACT: 94%
                  </div>

                  <div className="bg-slate-900/90 px-3 py-1 rounded text-xs text-purple-400">
                    EMOTION: FOCUS
                  </div>
                </div>
              )}
            </div>

            {/* CAMERA BUTTON */}
            <button
              onClick={toggleCamera}
              className={`w-full mt-5 py-3 rounded-xl border transition ${
                cameraActive
                  ? "border-rose-500/30 text-rose-400 bg-rose-500/10"
                  : "border-slate-800 bg-slate-950 text-slate-300"
              }`}
            >
              {cameraActive
                ? "Disable Camera"
                : "Test Camera Live Feed"}
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}