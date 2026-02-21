"use client";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-50"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-800">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 backdrop-blur-lg bg-white/70 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            EduCRM
          </h1>
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <a href="#" className="hover:text-blue-600 transition">Features</a>
            <a href="#" className="hover:text-blue-600 transition">Modules</a>
            <a href="#" className="hover:text-blue-600 transition">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition">
            Login
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-28 text-center px-6 max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Smart CRM Platform <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            For Modern Education
          </span>
        </h2>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          A unified, secure and scalable solution to manage admissions,
          academics, financial operations and communication seamlessly.
        </p>

        <div className="flex justify-center gap-6">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-3 rounded-full shadow-lg hover:scale-105 transition">
            Get Started
          </button>
          <button className="bg-white border border-gray-200 px-10 py-3 rounded-full shadow-sm hover:shadow-md transition">
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">
            Powerful Features
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Automated Admissions Workflow",
              "Student Lifecycle Management",
              "Secure Role-Based Access",
              "Real-Time Analytics Dashboard",
              "Integrated Fee Management",
              "Multi-Campus Scalability"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <h4 className="text-xl font-semibold mb-4">{item}</h4>
                <p className="text-gray-600">
                  Designed with modern architecture principles to ensure
                  performance, scalability and operational efficiency.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-16">Integrated Modules</h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Lead Management",
              "Admission System",
              "Student Information System",
              "Fee & Finance",
              "Faculty Portal",
              "Communication Engine",
              "Analytics & Reports",
              "Alumni Management"
            ].map((module, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition hover:border-blue-600 border"
              >
                <p className="font-semibold">{module}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 px-6">
          <div>
            <h4 className="text-4xl font-bold">500+</h4>
            <p className="opacity-90">Institutions</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold">50K+</h4>
            <p className="opacity-90">Students Managed</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold">99.9%</h4>
            <p className="opacity-90">System Uptime</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold">24/7</h4>
            <p className="opacity-90">Support</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-white">
        <h3 className="text-4xl font-bold mb-6">
          Ready to Transform Your Institution?
        </h3>
        <p className="text-gray-600 mb-10">
          Experience a smarter, data-driven education management platform.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-full shadow-lg hover:scale-105 transition">
          Request Demo
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-10 text-center text-gray-600">
        © 2026 EduCRM. All rights reserved.
      </footer>

    </div>
  );
};

export default Homepage;
