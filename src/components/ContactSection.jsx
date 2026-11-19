import { useState } from 'react'
import { MapPin, Mail, Clock, CheckCircle2, ArrowUpRight, Building2 } from 'lucide-react'

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
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background soft ambient gradient */}
      <div className="absolute top-10 right-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Office Details & Brand Statement */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#1D4ED8] tracking-tight leading-[1.05] mb-4 sm:mb-6">
              Contact
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-8 sm:mb-10">
              Whether you are an international battery manufacturer looking for lithium
              concentrate offtake, an institutional mining investor, or a technology partner,
              our executive team in Abuja is ready to engage.
            </p>

            {/* Address & Info Cards */}
            <div className="space-y-4 mb-8 sm:mb-10">
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#B8941F] shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Corporate Headquarters
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900">
                    136 Adetokumbo Ademola Crescent,
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">Wuse 2, Abuja, FCT</p>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">Nigeria, West Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#B8941F] shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Direct Exploration Desk
                  </h4>
                  <a
                    href="mailto:gud2una@gmail.com"
                    className="text-xs sm:text-sm font-semibold text-gray-900 hover:text-[#B8941F] transition-colors"
                  >
                    gud2una@gmail.com
                  </a>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                    Operating Hours: Mon – Fri (08:00 – 17:00 WAT)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#1D4ED8] shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Phone Lines
                  </h4>
                  <a
                    href="tel:+2348031558383"
                    className="block text-xs sm:text-sm font-semibold text-gray-900 hover:text-[#B8941F] transition-colors"
                  >
                    +234(0) 803 155 8383
                  </a>
                  <a
                    href="tel:+2348130500053"
                    className="block text-xs sm:text-sm font-semibold text-gray-900 hover:text-[#B8941F] transition-colors"
                  >
                    +234(0) 813 050 0053
                  </a>
                </div>
              </div>
            </div>

            {/* Operating hubs pill badge */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0d0d0d] text-white">
              <span className="text-[9px] sm:text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">
                Operational Assets
              </span>
              <p className="text-xs text-gray-300">
                • <strong>Lugbe Project</strong> (600,000 Ha, Abuja FCT Boundary)
              </p>
              <p className="text-xs text-gray-300 mt-1">
                • <strong>Central Nigeria Lithium Belt & Taraba Sites</strong>
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact & Offtake Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#f9fafb] p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                  Initiate Mineral Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Fill out the parameters below to book a consultation or receive technical assay data.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-center animate-fade-in">
                  <div className="w-12 h-12 bg-[#D4AF37] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Inquiry Received
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
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
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
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
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
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
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) =>
                          setFormData({ ...formData, interest: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
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
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-black text-white text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1a1a1a] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
