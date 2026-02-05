import { createFileRoute } from '@tanstack/react-router'
import {
  Zap,
  TrendingUp,
  Eye,
  Palette,
  Settings2,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sprout,
  Clock,
  DollarSign,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Rapid Deal Closure',
      description:
        'Paperless applications under 10 minutes with $1 million approvals. Accelerate deals and cut admin overhead.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Better Grower Outcomes',
      description:
        'Fast capital boosts grower yields and profits, drives early season sales, and eases farmer cash-flow strain.',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Control & Transparency',
      description:
        'Trackable grower links, real-time credit scoring and dealer-controlled approvals keep you in charge.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Branded, Seamless Experience',
      description:
        'White-label portal showcases your brand, boosting loyalty and recognition with every interaction.',
    },
    {
      icon: <Settings2 className="w-8 h-8" />,
      title: 'Flexible Programs',
      description:
        'Offer up to 12 financing programs by crops, seasonal needs, or customer segments.',
    },
  ]

  const stats = [
    { value: '$1M+', label: 'Real-time approvals', icon: <DollarSign className="w-6 h-6" /> },
    { value: '2 min', label: 'Application process', icon: <Clock className="w-6 h-6" /> },
    { value: '12+', label: 'Financing programs', icon: <Settings2 className="w-6 h-6" /> },
    { value: '0', label: 'Paperwork required', icon: <CheckCircle2 className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ============ HERO SECTION ============ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-8">
              <Sprout className="w-4 h-4" />
              Agricultural Input Financing
            </div>
          </div>

          <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 leading-[0.95] mb-5">
            Ag Finance.
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Delivered.
            </span>
          </h1>

          <p className="animate-fade-in-up-delay-2 text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed px-2">
            The fastest agricultural input financing platform, providing real-time
            approvals up to $1M with no paperwork through our innovative 2-minute
            application process.
          </p>

          <div className="animate-fade-in-up-delay-3 flex items-center justify-center gap-3 flex-nowrap">
            <a
              href="#contact"
              className="group shrink-0 px-4 py-2 sm:px-7 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 inline-flex items-center gap-1.5"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#retailers"
              className="shrink-0 px-4 py-2 sm:px-7 sm:py-3 text-emerald-700 text-sm sm:text-base font-semibold transition-colors hover:text-emerald-800"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="relative z-10 -mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center py-5 sm:py-8 px-2 sm:px-4">
                <div className="text-emerald-600 mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section id="about" className="py-16 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-4 block">
            Dealer Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4 sm:mb-6">
            Empowering{' '}
            <span className="text-emerald-600">retailers</span> &{' '}
            <span className="text-emerald-600">growers</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            A comprehensive financing platform transforming how agricultural
            dealers serve their customers. We give you the tools to close
            deals faster, deliver better outcomes, and grow your business.
          </p>

          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-6 sm:p-10 text-white text-left max-w-lg mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-5 text-center">
              Driving sales velocity & farmer success
            </h3>
            <ul className="space-y-3">
              {[
                'Real-time credit decisions',
                'No paperwork required',
                'Up to $1M instant approvals',
                'White-label dealer portal',
                'Multiple financing programs',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />
                  <span className="text-emerald-50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors mt-8"
          >
            Partner with us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ============ BENEFITS / RETAILERS SECTION ============ */}
      <section id="retailers" className="py-16 md:py-32 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-4 block">
              For Retailers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
              Everything you need to{' '}
              <span className="text-emerald-600">grow</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Our platform gives agricultural dealers the competitive edge to win
              more business and deliver exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-5 sm:p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}

            {/* Call-to-action card */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-5 sm:p-8 flex flex-col items-center justify-center text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
              <p className="text-emerald-100 mb-6">
                Join the fastest growing ag financing platform and start closing
                deals today.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOR MANUFACTURERS SECTION ============ */}
      <section id="manufacturers" className="py-16 md:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-4 block">
            For Manufacturers
          </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Expand your <span className="text-emerald-600">reach</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Help your dealer network offer financing that drives volume, builds
            loyalty, and accelerates your products into the hands of growers.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Increase Volume',
                desc: 'Dealers with financing options sell more product, faster.',
              },
              {
                title: 'Strengthen Loyalty',
                desc: 'Branded financing programs keep your dealer network engaged.',
              },
              {
                title: 'Simplify Programs',
                desc: 'One platform to manage all your dealer financing programs.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-emerald-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">
            Ag Finance. Delivered.
          </h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8">
            The fastest agricultural input financing platform. Real-time approvals
            up to $1M. No paperwork. 2-minute application.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg sm:rounded-full font-bold text-sm sm:text-lg hover:bg-emerald-50 transition-colors shadow-xl"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ============ CONTACT / FOOTER ============ */}
      <footer id="contact" className="bg-gray-900 text-white py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-md flex items-center justify-center">
                  <span className="text-white font-black text-xs">CF</span>
                </div>
                <span className="text-xl font-black">CFi</span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed mb-8">
                The fastest agricultural input financing platform, providing
                real-time approvals up to $1M with no paperwork with our innovative
                2-minute application process.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:8449220272"
                  className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (844) 922-0272
                </a>
                <a
                  href="mailto:info@cfi.ag"
                  className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@cfi.ag
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-white mb-4">Company</h4>
                <ul className="space-y-3">
                  {['Home', 'About', 'Insights & News', 'Contact'].map((item) => (
                    <li key={item}>
                      <a
                        href="#hero"
                        className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Solutions</h4>
                <ul className="space-y-3">
                  {[
                    'For Retailers',
                    'For Manufacturers',
                    'For Growers',
                    'Financing Programs',
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#retailers"
                        className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} CFi Solutions, Inc. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
