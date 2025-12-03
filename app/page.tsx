"use client";

import { useState } from "react";
import {
  Star,
  Quote,
  Phone,
  Mail,
  Location,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  BuyIcon,
  SellIcon,
  TradeIcon,
  HeartIcon,
  ArrowRight,
  ChevronDown,
  Wallet,
  TransactionIcon,
  MarketIcon,
} from "./components/icons";

// SVG Assets
const atompropMark = "/images/atomprop-mark.svg";
const arrowUpCircle = "/images/arrow-up-circle.svg";

// Actual assets from Figma design
const heroImage = "/images/hero-image.png";
const heroBg = "/images/hero-bg.jpg";
const property1 = "/images/property-1.jpg";
const property2 = "/images/property-2.jpg";
const property3 = "/images/property-3.jpg";
const platformFeaturesImage = "/images/platform-features.png";
const cityImage = "/images/cityscape.png";
const businessImage = "/images/business-interface.png";
const atompropLogo = "/images/atomprop-logo.svg";
const hedera3d = "/images/hedera-3d.png";
const hederaIcon = "/images/hedera-icon.png";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is real estate tokenization?",
      answer: "Real estate tokenization is the process of converting property ownership into digital tokens on the blockchain. Each token represents a verified share of a real property asset, allowing investors to buy, sell, and manage fractional ownership easily."
    },
    {
      question: "Is Atomprop licensed or regulated?",
      answer: "Yes, Atomprop operates under strict regulatory compliance. We work with licensed partners and follow all applicable securities and real estate regulations to ensure your investments are secure and legitimate."
    },
    {
      question: "Who can invest with Atomprop?",
      answer: "Atomprop is open to both accredited and non-accredited investors, depending on the specific offering. Our platform makes real estate investment accessible to everyone with as little as PKR 500,000."
    },
    {
      question: "How much do I need to start investing?",
      answer: "You can start investing with as little as PKR 500,000. Our fractional ownership model means you don't need millions to own a piece of premium real estate."
    },
    {
      question: "How does Atomprop ensure project security?",
      answer: "We use blockchain technology for transparent record-keeping, conduct thorough due diligence on all properties, and work with established developers. All transactions are secured and verifiable on the Hedera network."
    }
  ];

  const processSteps = [
    { title: "Property Sourcing", description: "We identify and select high-potential real estate projects" },
    { title: "Property Funding", description: "Verified properties are opened for fractional investment." },
    { title: "Asset Tokenization", description: "Each property is converted into secure digital ownership tokens." },
    { title: "Property Management", description: "We oversee project progress and ensure transparent updates." },
    { title: "Dividend Distribution", description: "Returns are shared directly with investors through the platform." },
    { title: "Exit Strategy", description: "Sell your tokens anytime or exit at project completion." },
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f5] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[938px] bg-cover bg-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.86)]" />
          {/* Main gradient orb - exact Figma specs */}
          <div 
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              width: '986px',
              height: '986px',
              top: '-98px',
              borderRadius: '986px',
              background: 'linear-gradient(180deg, #2C64B1 0%, #8C2E90 100%)',
              filter: 'blur(190px)'
            }}
          />
          {/* Secondary gradient orb */}
          <div 
            className="absolute"
            style={{
              width: '386px',
              height: '386px',
              top: '724px',
              right: '320px',
              borderRadius: '386px',
              background: 'linear-gradient(180deg, #2C64B1 0%, #8C2E90 100%)',
              filter: 'blur(190px)'
            }}
          />
        </div>

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-8 lg:px-20 py-6">
          <div className="flex items-center">
            <img src={atompropLogo} alt="Atomprop" className="h-[49px] w-auto" />
          </div>

          {/* Menu */}
          <div className="hidden lg:flex items-center glass rounded-full px-8 py-3">
            <div className="flex items-center gap-8">
              <a href="#" className="font-body font-semibold text-white hover:text-purple-400 transition">Home</a>
              <a href="#properties" className="font-body font-semibold text-white hover:text-purple-400 transition">Properties</a>
              <a href="#about" className="font-body font-semibold text-white hover:text-purple-400 transition">About Us</a>
              <a href="#how-it-works" className="font-body font-semibold text-white hover:text-purple-400 transition">How it Works</a>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="btn-secondary hidden sm:block">Login</button>
            <button className="btn-primary bg-gradient-to-r from-[#853192] to-[#365fad]">Get Started</button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container-main flex flex-col lg:flex-row items-center justify-between pt-12 lg:pt-20 pb-20">
          <div className="max-w-[810px] text-white">
            <p className="font-heading font-bold text-3xl lg:text-[40px] capitalize mb-2">
              One Digital Share at a Time
            </p>
            <h1 className="font-heading font-bold text-5xl lg:text-[65px] capitalize leading-tight mb-6">
              Invest in Real Estate
          </h1>
            <p className="font-body text-lg lg:text-[25px] leading-relaxed text-white/90 max-w-[810px] mb-10">
              Atomprop is a next-generation tokenized real estate platform that lets you invest, earn, and trade property backed digital assets with complete transparency and security.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary bg-gradient-to-r from-[#8c2e90] to-[#2c63b0]">
                Start Investing
              </button>
              <button className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#902b8f]">
                See Available Properties
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-12 lg:mt-0 animate-float">
            <img 
              src={heroImage}
              alt="Atomprop Dashboard"
              className="w-[400px] h-[400px] lg:w-[527px] lg:h-[527px] object-contain"
              style={{ filter: 'blur(0px)' }}
            />
            <div className="absolute -inset-8 bg-gradient-radial from-purple-600/20 via-transparent to-transparent rounded-full blur-2xl -z-10" />
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative z-10 mx-8 lg:mx-20 mb-[-60px]">
          <div className="bg-black border-2 border-white rounded-[20px] p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-heading font-bold text-2xl lg:text-3xl gradient-text">PKR 500,000</p>
              <p className="font-body font-light text-white/80 text-sm">Successful transactions</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-2xl lg:text-3xl gradient-text">50,000+</p>
              <p className="font-body font-light text-white/80 text-sm">Customers Trust Us</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-2xl lg:text-3xl gradient-text">11,000+</p>
              <p className="font-body font-light text-white/80 text-sm">Real Estate Partners</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-2xl lg:text-3xl gradient-text">4.7</p>
              <div className="flex justify-center gap-1 mt-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" filled />
                ))}
                <Star className="w-4 h-4 text-yellow-400/50" filled={false} />
              </div>
              <p className="font-body text-white/80 text-sm mt-1">Rating on Google Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Model Section */}
      <section id="about" className="pt-32 pb-20 bg-[#f5f5f5]">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <p className="font-heading font-bold text-[#3061ae] text-xl mb-2">
                A Simple, Transparent
              </p>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black leading-tight mb-6">
                Atomprop Smart Construction-Stage<br />Pricing Model
              </h2>
              <p className="font-body text-[rgba(24,35,40,0.8)] leading-relaxed mb-6">
                At Atomprop, every real estate project is divided into clearly defined construction rounds, each linked to measurable development milestones.
              </p>
              <p className="font-body text-[rgba(24,35,40,0.8)] leading-relaxed">
                A new round only begins once the previous round&apos;s milestones are fully completed — ensuring developer accountability and giving you complete confidence in project progress.
              </p>
            </div>

            {/* Right - Testimonial Card */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-purple-500/20 rounded-lg blur-xl" />
                
                <div className="relative bg-gradient-to-b from-[#130f23] to-[#0b071b] border-4 border-white rounded-lg p-6 w-full max-w-[500px]">
                  <Quote className="w-6 h-6 text-white/50 mb-4" />
                  <p className="font-body text-white leading-relaxed mb-4">
                    At Atomprop, our mission is to democratize real estate through technology.
                    We believe everyone deserves access to secure, transparent, and rewarding property investment.
                  </p>
                  <Quote className="w-6 h-6 text-white/50 rotate-180 ml-auto" />
                  
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                    <div>
                      <p className="font-heading font-bold text-white text-sm">Faizan Faiz</p>
                      <p className="font-heading text-white/60 text-xs">Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-[#f5f5f5]">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4">
              Discover Secure, Fractional<br />Real Estate Opportunities
            </h2>
            <p className="font-body text-[rgba(24,35,40,0.8)] max-w-[976px] mx-auto leading-relaxed">
              Browse a curated selection of premium residential and commercial properties. Every listing includes full documentation, milestone tracking, and token-based pricing.
            </p>
          </div>

          {/* Property Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[property1, property2, property3].map((img, i) => (
              <div key={i} className="bg-white rounded-[20px] overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="relative h-[280px] overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Property ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/40 transition">
                    <HeartIcon className="w-4 h-4 text-white" />
                  </button>
                  <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-green-500" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-black tracking-tight">Hill States</h3>
                  <p className="font-body text-black/80">Bedroom Apartment in Executive</p>
                  <button className="mt-4 flex items-center justify-center gap-2 text-black font-body mx-auto group/btn">
                    Start Investing
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#902b8f]">
              See Available Properties
            </button>
          </div>
        </div>
      </section>

      {/* Tokenization Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container-main">
          <div className="bg-[#181818] border-2 border-white rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 lg:p-12 text-white">
                <p className="font-heading font-bold text-xl text-white mb-2">What is a token?</p>
                <div className="mb-6">
                  <p className="font-body text-white/90 leading-relaxed mb-4">
                    A token is a digital unit of ownership recorded on the blockchain. Each token represents a verified share of a real estate asset.
                  </p>
                  <p className="font-body text-white/90 leading-relaxed">
                    For example, a property can be divided into hundreds or thousands of tokens, with each token reflecting a fractional portion of the total value. If you buy more tokens, you own a larger share — making real estate investment flexible, transparent, and accessible to everyone.
                  </p>
                </div>
                <button className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#902b8f]">
                  Begin Your Journey
                </button>
              </div>
              <div className="lg:w-1/2 relative min-h-[400px]">
                {/* Decorative gradient circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[350px] h-[350px] rounded-full bg-gradient-conic opacity-30 blur-2xl" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={atompropLogo} alt="Atomprop" className="w-64 h-auto opacity-80" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4">
              Tokenization at a Glance
            </h2>
            <p className="font-body text-[rgba(24,35,40,0.8)] max-w-[1200px] mx-auto leading-relaxed">
              Real estate tokenization converts physical property ownership into secure digital tokens recorded on the blockchain. Each token represents a fractional share of the real asset, allowing investors to participate with ease and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#f5f5f5]">
        <div className="container-main text-center">
          <p className="font-heading font-bold text-[#355eac] text-2xl mb-2">
            A Simple, Transparent Investing Experience
          </p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-16">
            How Atomprop Works
          </h2>

          {/* Process Steps Visual */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="text-center max-w-[300px]">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">1</div>
              <p className="font-body text-[rgba(0,0,0,0.8)] leading-relaxed">
                Explore verified property projects with transparent details and construction progress.
              </p>
              <p className="font-heading font-bold text-xl mt-4">Browse tokenized<br />real estate</p>
              <img src={arrowUpCircle} alt="" className="w-9 h-9 mx-auto mt-4 rotate-90" />
            </div>
            <div className="hidden lg:flex items-center">
              <ArrowRight className="w-8 h-8 text-purple-500" />
            </div>
            <div className="text-center max-w-[300px]">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">2</div>
              <p className="font-body text-[rgba(0,0,0,0.8)] leading-relaxed">
                Select your investment amount and purchase tokens representing fractional ownership.
              </p>
              <p className="font-heading font-bold text-xl mt-4">Purchase fractional<br />tokens</p>
              <img src={arrowUpCircle} alt="" className="w-9 h-9 mx-auto mt-4 rotate-[-90deg]" />
            </div>
            <div className="hidden lg:flex items-center">
              <ArrowRight className="w-8 h-8 text-purple-500" />
            </div>
            <div className="text-center max-w-[300px]">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">3</div>
              <p className="font-body text-[rgba(0,0,0,0.8)] leading-relaxed">
                Track your investments and receive returns through your portfolio dashboard.
              </p>
              <p className="font-heading font-bold text-xl mt-4">Earn & manage<br />your portfolio</p>
              <img src={arrowUpCircle} alt="" className="w-9 h-9 mx-auto mt-4 rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-20 bg-[#181818]">
        <div className="container-main">
          {/* Atomprop Logo in center */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="absolute -inset-8 bg-purple-500/20 rounded-full blur-3xl" />
              <img src={atompropLogo} alt="Atomprop" className="relative w-48 h-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-32 gap-y-12">
            {processSteps.map((step, i) => (
              <div key={i} className="text-left">
                <h3 className="font-heading font-bold text-2xl lg:text-3xl text-white mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying, Selling & Trading Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container-main">
          <p className="font-heading font-bold text-[#3061ae] text-xl mb-2">
            A Simple, Transparent Investing Experience
          </p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-12">
            Buying, Selling & Trading on Atomprop
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Buying Card */}
            <div className="card-dark p-8 text-white relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition" />
              <BuyIcon className="w-16 h-16 mb-6" />
              <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-4">Buying</h3>
              <p className="font-body text-white/80 leading-relaxed">
                Start investing in real estate with just a few taps. Browse verified property projects, view their construction stages, and purchase fractional tokens backed by real assets.
              </p>
            </div>

            {/* Selling Card */}
            <div className="card-dark p-8 text-white relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition" />
              <SellIcon className="w-16 h-16 mb-6" />
              <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-4">Selling</h3>
              <p className="font-body text-white/80 leading-relaxed">
                Need to exit your investment? Sell your tokens anytime. Atomprop upcoming secondary marketplace lets you list your tokens at your preferred price and connect with active buyers.
              </p>
            </div>

            {/* Trading Card */}
            <div className="card-dark p-8 text-white relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition" />
              <TradeIcon className="w-16 h-16 mb-6" />
              <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-4">Trading</h3>
              <p className="font-body text-white/80 leading-relaxed">
                Real estate is now a liquid digital asset. With Atomprop, you can trade property tokens just like stocks — quickly, securely, and with market-driven pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0c091d]">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-16 mb-16">
            <div className="lg:w-1/2">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight">
                Learn More About Investing<br />With Atomprop
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="font-body text-white/90 leading-relaxed">
                Learn how Atomprop works, how tokenized real estate benefits you, and what you need to begin.
                These FAQs cover everything from starting your first investment to managing your portfolio.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/20 pb-6">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-heading font-bold text-xl lg:text-2xl text-white">
                    {i + 1}. {faq.question}
                  </span>
                  <div className={`w-16 h-16 rounded-full border border-white flex items-center justify-center transition-all ${openFaq === i ? 'bg-[#912d90] rotate-45' : 'bg-black'}`}>
                    <ChevronDown className={`w-6 h-6 text-white transition-transform ${openFaq === i ? 'rotate-[-45deg]' : ''}`} />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="mt-4 pl-8">
                    <p className="font-body text-white/80 leading-relaxed max-w-[1000px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#902b8f]">
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 bg-[#0c091d]">
        <div className="container-main text-center">
          <p className="font-heading font-bold text-white text-xl mb-2">
            Everything You Need to Grow Your Property Portfolio — Digitally
          </p>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-16">
            Platform Features
          </h2>

          {/* Dashboard Preview */}
          <div className="relative rounded-[60px] overflow-hidden bg-gradient-to-b from-purple-900/50 to-black p-4 mb-16">
            <div className="absolute inset-0 bg-gradient-conic opacity-20 blur-3xl" />
            
            {/* Hedera 3D decoration */}
            <img src={hedera3d} alt="" className="absolute top-4 right-4 w-32 h-32 object-contain opacity-60 blur-[1px]" />
            
            <div className="relative text-center py-12">
              <h3 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4">
                Portfolio Dashboard
              </h3>
              <p className="font-body text-white text-lg max-w-[800px] mx-auto">
                Monitor your asset value, rental distributions, token holdings, and performance insights all in one place.
              </p>
              
              <div className="mt-8 rounded-lg overflow-hidden shadow-2xl max-w-[1000px] mx-auto">
                <img src={platformFeaturesImage} alt="Dashboard Preview" className="w-full" />
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="text-left relative">
              <img src={platformFeaturesImage} alt="Features" className="rounded-lg w-full h-[400px] object-cover" />
              
              {/* Hedera icon decoration */}
              <img src={hederaIcon} alt="" className="absolute bottom-4 left-4 w-32 h-32 object-contain" />
              
              {/* Floating Feature Cards */}
              <div className="absolute top-4 right-4 glass p-4 rounded-lg border border-[#912b8f] max-w-[280px]">
                <div className="flex items-center gap-3 mb-2">
                  <Wallet className="w-8 h-8 text-white" />
                  <h4 className="font-heading font-bold text-white">Secure Hedera Wallet</h4>
                </div>
                <p className="font-body text-white/80 text-sm">
                  Your tokens are stored in a built-in Hedera compatible wallet designed for safety and ease.
                </p>
              </div>

              <div className="absolute bottom-4 right-4 glass p-4 rounded-lg border border-[#912b8f] max-w-[280px]">
                <div className="flex items-center gap-3 mb-2">
                  <TransactionIcon className="w-8 h-8 text-white" />
                  <h4 className="font-heading font-bold text-white text-sm">Transparent Transaction History</h4>
                </div>
                <p className="font-body text-white/80 text-sm">
                  Track every investment, payout, and token movement with blockchain level accuracy.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="glass p-6 rounded-lg border border-[#912b8f] mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <MarketIcon className="w-8 h-8 text-white" />
                  <h4 className="font-heading font-bold text-white">Secondary Market (Coming Soon)</h4>
                </div>
                <p className="font-body text-white/80">
                  Trade your tokens with other investors and unlock liquidity at market-driven prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0c091d]">
        <div className="container-main">
          <div className="border-2 border-white rounded-lg p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <p className="font-heading font-bold text-white text-xl mb-2">
                Property ownership is no longer limited
              </p>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4">
                Join the Future of Real Estate
              </h2>
              <p className="font-body text-white mb-8">
                With Atomprop, it&apos;s simple, digital, and accessible to everyone
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary bg-gradient-to-r from-[#8c2e90] to-[#2c63b0]">
                  Create Account
                </button>
                <button className="btn-primary bg-gradient-to-r from-[#2e62af] to-[#902b8f]">
                  See Available Properties
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={cityImage} alt="Future of Real Estate" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black text-white">
        <div className="container-main">
          <p className="font-accent text-center text-white/80 max-w-[800px] mx-auto mb-12 leading-relaxed">
            At Atomprop, every real estate project is divided into clearly defined construction rounds, each linked to measurable development milestones.
          </p>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-12">
            <a href="#" className="font-accent font-semibold hover:text-purple-400 transition">About Us</a>
            <a href="#" className="font-accent font-semibold hover:text-purple-400 transition">Projects</a>
            <a href="#" className="font-accent font-semibold hover:text-purple-400 transition">Platform</a>
            <a href="#" className="font-accent font-semibold hover:text-purple-400 transition">Webinars</a>
            <a href="#" className="font-accent font-semibold hover:text-purple-400 transition">Careers</a>
            <a href="#" className="font-accent font-semibold hover:text-purple-400 transition">Blogs</a>
            <a href="#" className="font-accent font-semibold hover:text-purple-400 transition">Contact Us</a>
            <a href="#" className="font-accent font-semibold hover:text-purple-400 transition">FAQ</a>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-accent font-medium text-sm">Phone:</p>
                <p className="font-accent text-sm text-white/80">+92 00000000</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-accent font-medium text-sm">Email:</p>
                <p className="font-accent text-sm text-white/80">support@atomprop.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Location className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-accent font-medium text-sm">Address:</p>
                <p className="font-accent text-sm text-white/80">atomprop</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-500 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-500 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-500 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-500 transition">
              <LinkedIn className="w-5 h-5" />
            </a>
          </div>
          
          {/* Atomprop Mark */}
          <div className="flex justify-center mb-8">
            <img src={atompropMark} alt="Atomprop" className="w-10 h-10" />
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20 mb-8" />

          {/* Copyright */}
          <p className="font-accent text-center text-sm text-white/60">
            © Atomprop | Privacy Policy | Terms of Use
          </p>
        </div>
      </footer>
      </main>
  );
}
