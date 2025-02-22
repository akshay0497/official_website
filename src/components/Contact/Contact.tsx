import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import backpic from '../../assets/contact/contactus.webp'
function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <div 
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backpic})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-indigo-800/80"></div>

        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-blue-600 p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6" />
                    <p>109/421, 80 Feet Road
                    Kanpur (U.P.), India</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6" />
                    <p>+91-9336810652</p>
                    <p>+91-9519510543</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6" />
                    <p>msspl.mspl@gmail.com</p>
                  </div>
                </div>
                <br/>
                <hr/>
                <div className="mt-12">
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-200"><Facebook /></a>
                    <a href="#" className="hover:text-blue-200"><Twitter /></a>
                    <a href="#" className="hover:text-blue-200"><Instagram /></a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;