import React from "react";
import nailsImage from './assets/nails.jpg';  // Import image from src/assets 
import {
  Calendar,
  Star,
  Heart,
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Clock,
  CheckCircle,
  X,
} from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState("");
  const [formData, setFormData] = React.useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    preferredDateTime: "",
    service: "",
  });
  const [showSuccess, setShowSuccess] = React.useState(false);

  const openBookingModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setFormData((prev) => ({ ...prev, service: serviceName }));
    setIsModalOpen(true);
    setShowSuccess(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      preferredDateTime: "",
      service: "",
    });
    setShowSuccess(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate WhatsApp message
    const message = `Hi Sabita! I'd like to book an appointment.

📋 Booking Details:
• Name: ${formData.fullName}
• Phone: ${formData.phoneNumber}
• Email: ${formData.email}
• Service: ${formData.service}
${
  formData.preferredDateTime
    ? `• Preferred Date/Time: ${formData.preferredDateTime}`
    : ""
}

Please let me know your availability. Thank you!`;

    const whatsappUrl = `https://wa.me/35699582362?text=${encodeURIComponent(
      message
    )}`;

    // Show success message
    setShowSuccess(true);

    // Open WhatsApp after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      closeModal();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          {/* Brand Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 tracking-wide">
            <span className="block font-extralight">Nails</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300 font-normal">
              with Sabee
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-rose-100 mb-4 font-light italic tracking-wide max-w-3xl mx-auto leading-relaxed">
            "Life may not be perfect, but nails can be"
          </p>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 font-light tracking-wide max-w-2xl mx-auto">
            Timeless nails, endless beauty
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-12 py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:from-rose-500 hover:to-pink-600 hover:scale-105 hover:shadow-2xl focus:outline-none min-w-[200px]">
              <div className="flex items-center justify-center gap-3">
                {/* Updated text */}
                Let's Nail it
              </div>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center gap-8 mt-16 opacity-70">
            <div className="flex items-center gap-2 text-white/80">
              <Star className="w-5 h-5 fill-rose-300 text-rose-300" />
              <span className="text-sm font-light">Premium Quality</span>
            </div>
            <div className="w-1 h-1 bg-white/60 rounded-full"></div>
            <div className="flex items-center gap-2 text-white/80">
              <Heart className="w-5 h-5 fill-pink-300 text-pink-300" />
              <span className="text-sm font-light">Crafted with Love</span>
            </div>
          </div>
        </div>

        {/* Decorative Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-rose-300/30 rounded-full animate-pulse"></div>
        <div
          className="absolute top-32 right-16 w-3 h-3 bg-pink-300/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-rose-200/40 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-32 w-2.5 h-2.5 bg-pink-200/30 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-50 to-rose-50/30"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 font-normal">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional nail care services brought directly to your home with
              premium quality and personal attention.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Gel Nail Extension */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-3 hover:rotate-2 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-rose-600">€35</div>
                  <div className="text-sm text-gray-500">1.5-2 hrs</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Gel Nail Extension
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Elegant, glossy, and strong nails — perfect for any occasion.
              </p>
              <button
                onClick={() => openBookingModal("Gel Nail Extension - €35")}
                className="mt-4 w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300"
              >
                Book Now
              </button>
            </div>

            {/* Acrylic Nail Extensions */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-3 hover:rotate-2 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-pink-600">€50</div>
                  <div className="text-sm text-gray-500">1.5-2 hrs</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Acrylic Nail Extensions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Versatile and long-lasting. Choose your shape, length, and vibe.
              </p>
              <button
                onClick={() =>
                  openBookingModal("Acrylic Nail Extensions - €50")
                }
                className="mt-4 w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300"
              >
                Book Now
              </button>
            </div>

            {/* Nail Art */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-3 hover:rotate-2 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white fill-current" />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-purple-600">
                    Price varies
                  </div>
                  <div className="text-sm text-gray-500">10-60+ mins</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Nail Art
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From minimal to dramatic – match your mood with creative
                designs.
              </p>
              <button
                onClick={() => openBookingModal("Nail Art - Price varies")}
                className="mt-4 w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300"
              >
                Book Now
              </button>
            </div>

            {/* Manicure */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-3 hover:rotate-2 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-400 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-rose-600">€20</div>
                  <div className="text-sm text-gray-500">30-45 mins</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Manicure
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gentle shaping, cuticle care, and a polished finish.
              </p>
              <button
                onClick={() => openBookingModal("Manicure - €20")}
                className="mt-4 w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300"
              >
                Book Now
              </button>
            </div>

            {/* Pedicure */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-3 hover:rotate-2 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-pink-600">€35</div>
                  <div className="text-sm text-gray-500">45-60 mins</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Pedicure
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Smooth feet and beautifully groomed toes.
              </p>
              <button
                onClick={() => openBookingModal("Pedicure - €35")}
                className="mt-4 w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300"
              >
                Book Now
              </button>
            </div>

            {/* Gel on Toes */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-3 hover:rotate-2 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-400 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-current" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-rose-600">€35</div>
                  <div className="text-sm text-gray-500">45-60 mins</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Gel on Toes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Durable gel finish that stays flawless for weeks.
              </p>
              <button
                onClick={() => openBookingModal("Gel on Toes - €35")}
                className="mt-4 w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Special Offer */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
              <Star className="w-5 h-5 fill-current" />
              Free removal with any service!
              <Star className="w-5 h-5 fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                  About the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 font-normal">
                    Salon
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Established in April 2024, Nails with Sabee brings luxurious
                  nail care directly to your home. No rushing, no waiting — just
                  beautiful nails and a personal touch.
                </p>
              </div>

              {/* Founder Info */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Meet the Artist
                </h3>
                <h4 className="text-xl text-rose-600 font-medium mb-4">
                  Sabita Sunami
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Meet Sabita, a passionate nail artist who treats every set
                  like a canvas. Her at-home services combine hygiene,
                  expertise, and a heartfelt touch.
                </p>
                <blockquote className="border-l-4 border-rose-300 pl-6 italic text-gray-700 text-lg">
                  "Every nail tells a story."
                </blockquote>
              </div>
            </div>

            {/* Portrait */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={nailsImage}  // Dynamically use the imported image here
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-40 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Book Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 font-normal">
                Appointment
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Schedule your personalized nail care session at your convenience
            </p>
          </div>

          {/* Booking Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp Booking */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {/* <MessageCircle className="w-8 h-8 text-white" />  */}
                <RiWhatsappFill className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                WhatsApp
              </h3>
              <p className="text-gray-600 mb-6">
                Quick and easy booking via WhatsApp message
              </p>
              <a
                href="https://wa.me/35699582362?text=Hi%20Sabita,%20I'd%20like%20to%20book%20an%20appointment%20for%20nail%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                <RiWhatsappFill className="w-4 h-4" />
                Message Now
              </a>
            </div>

            {/* Phone Booking */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Phone Call
              </h3>
              <p className="text-gray-600 mb-6">
                Speak directly with Sabita to schedule
              </p>
              <a
                href="tel:+35699582362"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Availability Info */}
          <div className="bg-gradient-to-r from-gray-50 to-rose-50/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-rose-500" />
              <h3 className="text-xl font-semibold text-gray-900">
                Availability
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Available Monday to Saturday, flexible hours to suit your schedule
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Home service available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Flexible scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Same-day appointments possible</span>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Schedule Your Appointment Today
            </h3>
            <p className="text-gray-600 mb-8">
              Experience luxury nail care in the comfort of your own home
            </p>
            <a
              href="https://wa.me/35699582362?text=Hi%20Sabita,%20I'd%20like%20to%20schedule%20an%20appointment.%20What%20times%20are%20available%20this%20week?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book Your Session
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 to-rose-50/30"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 font-normal">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your nails? Contact us through your preferred
              method
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                  Contact Information
                </h3>

                {/* Address */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Service Area
                    </h4>
                    <p className="text-gray-600">40 Wellington Triq il-Lacci</p>
                    <p className="text-gray-600">San Pawl il-Bahar, Malta</p>
                    <p className="text-sm text-rose-600 mt-1">
                      Home service available in surrounding areas
                    </p>
                  </div>
                </div>

                {/* Phone/WhatsApp */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <RiWhatsappFill className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      WhatsApp & Phone
                    </h4>
                    <a
                      href="https://wa.me/35699582362"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium transition-colors duration-300"
                    >
                      +356 99582362
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Click to message on WhatsApp
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <a
                      href="mailto:nsstha7@gmail.com"
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                    >
                      nsstha7@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Send us an email anytime
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Follow Our Work
                    </h4>
                    <a
                      href="https://instagram.com/nails_withsabee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 font-medium transition-colors duration-300"
                    >
                      @nails_withsabee
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      See our latest nail art creations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map or Additional Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Service Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">
                      Monday - Friday
                    </span>
                    <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-gray-600">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-gray-600">By appointment</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-rose-50 rounded-xl">
                  <p className="text-sm text-rose-700 font-medium">
                    💡 Flexible scheduling available for your convenience
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">Ready to Book?</h3>
                <p className="mb-6 opacity-90">
                  Get in touch today and let's create beautiful nails together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/35699582362?text=Hi%20Sabita,%20I'd%20like%20to%20book%20an%20appointment!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
                  >
                    <RiWhatsappFill className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+35699582362"
                    className="flex items-center justify-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-light mb-4">
                Nails{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300 font-normal">
                  with Sabee
                </span>
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Professional nail care services brought directly to your home.
                Experience luxury, hygiene, and artistry in every session.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/35699582362"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                >
                  <RiWhatsappFill className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/nails_withsabee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#services"
                    className="hover:text-rose-300 transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-rose-300 transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#booking"
                    className="hover:text-rose-300 transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-rose-300 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gel Extensions</li>
                <li>Acrylic Extensions</li>
                <li>Nail Art</li>
                <li>Manicure & Pedicure</li>
              </ul>
            </div>
          </div>

          {/* Coming Soon Sections */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h4 className="text-lg font-semibold mb-4 text-center">
              Coming Soon
            </h4>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="bg-gray-800 px-4 py-2 rounded-full">
                Offers & Discounts
              </span>
              <span className="bg-gray-800 px-4 py-2 rounded-full">FAQs</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full">
                Certifications
              </span>
              <span className="bg-gray-800 px-4 py-2 rounded-full">
                Bridal Packages
              </span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Nails with Sabee. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/35699582362"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors duration-300"
              >
                <RiWhatsappFill className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Book Appointment
              </h3>
              <button
                onClick={closeModal}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {!showSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Selected Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Selected Service
                  </label>
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-3">
                    <span className="text-rose-700 font-medium">
                      {selectedService}
                    </span>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Preferred Date/Time */}
                <div>
                  <label
                    htmlFor="preferredDateTime"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Date/Time (Optional)
                  </label>
                  <input
                    type="text"
                    id="preferredDateTime"
                    name="preferredDateTime"
                    value={formData.preferredDateTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors duration-300"
                    placeholder="e.g., Tomorrow 2 PM, Friday morning, etc."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <RiWhatsappFill className="w-5 h-5" />
                  Send via WhatsApp
                </button>
              </form>
            ) : (
              /* Success Message */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Booking Details Sent!
                </h4>
                <p className="text-gray-600 mb-4">
                  Your booking details were saved! Now we will redirect to
                  whatsapp.Thank you!
                </p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-green-700 text-sm">
                    Opening WhatsApp now...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
