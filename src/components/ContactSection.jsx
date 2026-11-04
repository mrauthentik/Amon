import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Offtake Agreement',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background soft ambient gradient */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-green-50/70 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Office Details & Brand Statement */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-gray-800 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              Connect With Ecore
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
              Let's Build the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
                Next Energy Frontier.
              </span>
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-10">
              Whether you are an international battery manufacturer looking for lithium
              concentrate offtake, an institutional mining investor, or a technology partner,
              our executive team in Abuja is ready to engage.
            </p>

            {/* Address & Info Cards */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-emerald-600 shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Corporate Headquarters
                  </h4>
                  <p className="text-sm font-semibold text-gray-900">
                    136 Adetokumbo Ademola Crescent,
                  </p>
                  <p className="text-sm text-gray-700">Wuse 2, Abuja, FCT</p>
                  <p className="text-xs text-gray-500 mt-0.5">Nigeria, West Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-emerald-600 shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Direct Exploration Desk
                  </h4>
                  <p className="text-sm font-semibold text-gray-900">
                    contact@ecoreminerals.com
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Operating Hours: Mon – Fri (08:00 – 17:00 WAT)
                  </p>
                </div>
              </div>
            </div>

            {/* Operating hubs pill badge */}
            <div className="p-5 rounded-2xl bg-[#0d0d0d] text-white">
              <span className="text-[10px] font-bold text-[#5AE05A] uppercase tracking-widest block mb-2">
                Operational Assets
              </span>
              <p className="text-xs text-gray-300">
                • <strong>Kuje Project</strong> (600,000 Ha, Abuja FCT Boundary)
              </p>
              <p className="text-xs text-gray-300 mt-1">
                • <strong>Central Nigeria Lithium Belt & Taraba Sites</strong>
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact & Offtake Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#f9fafb] p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Initiate Mineral Inquiry
                </h3>
                <p className="text-sm text-gray-600">
                  Fill out the parameters below to book a consultation or receive technical assay data.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fade-in">
                  <div className="w-12 h-12 bg-[#22c55e] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
                    Thank you for reaching out to Ecore Ltd. Our executive mineral desk will review your inquiry and follow up within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Area of Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) =>
                          setFormData({ ...formData, interest: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all"
                      >
                        <option value="Offtake Agreement">Lithium / Mineral Offtake</option>
                        <option value="Investment Opportunity">Universal Investment (ROI)</option>
                        <option value="DLE Technology Collaboration">DLE / Technical Partnership</option>
                        <option value="Exploration & Drilling">Mine Development / Lugbe</option>
                        <option value="General Inquiry">General Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Project Scope / Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Outline your requirements, target mineral grades, or strategic partnership interest..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0d0d0d] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-black hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Inquiry</span>
                    <span className="text-[#22c55e] transform group-hover:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

