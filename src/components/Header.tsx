import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { addressLink } from '../utils/urls';

// console.log(addressLink)
const contactInfo = [
  {
    icon: MapPin,
    text: '109/421, 80 Feet Road, Kanpur (U.P.), India',
    href: {addressLink},
  },
  {
    icon: Phone,
    text: '+91-9336652601, 9519510543',
    href: 'tel:+919336652601',
  },
  {
    icon: Mail,
    text: 'msspl.mspl@gmail.com',
    href: 'mailto:msspl.mspl@gmail.com',
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const socialVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export default function Header() {


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gradient-to-r from-gray-50 to-gray-100 py-2 sm:py-3 border-b border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2 sm:gap-4">
          {/* Contact Information */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6"
            variants={itemVariants}
          >
            {contactInfo.map((item :any, index :any) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // onClick={handleAddressClick}
              >
                <item.icon 
                  size={16} 
                  className="mr-2 text-blue-600 group-hover:text-blue-700 transition-colors" 
                />
                <span className="text-sm sm:text-base text-gray-600 group-hover:text-gray-900 transition-colors hover:cursor-pointer hover:underline" >
                  {item.text}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-4"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-gray-500 hover:text-blue-600 transition-colors p-2"
                variants={socialVariants}
                whileHover="hover"
              >
                <social.icon size={18} />
                <motion.span
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 pointer-events-none"
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.label}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}



// import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
// import { addressLink } from '../utils/urls';
// export default function Header() {

//   const handleAddressClick = () => {
//     const googleMapsURL = addressLink;
//     window.open(googleMapsURL, "_blank");
//   };

//   return (
//     <div className="bg-gray-50 text-gray-600 py-2">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <div className="flex items-center hover:cursor-pointer hover:underline" onClick={handleAddressClick}>
            
//               <MapPin size={16} className="mr-2 text-blue-600" />
//               <span>109/421, 80 Feet Road, Kanpur (U.P.), India</span>
            
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="flex items-center">
//                {/* Clickable Phone Numbers */}
//               <a
//                 href="tel:+919336652601"
//                 className="flex items-center hover:text-blue-600 transition-colors"
//               >
//                 <Phone size={16} className="mr-2 text-blue-600" />
//                 <span>+91-9336652601, </span>
//               </a>
//               <a
//                 href="tel:+919519510543"
//                 className="flex items-center hover:text-blue-600 transition-colors"
//               >
//                 <span> +91-9519510543</span>
//               </a>
//               </div>
//               <div className="flex items-center">
//               <a
//                 href="mailto:msspl.mspl@gmail.com"
//                 className="flex items-center hover:text-blue-600 transition-colors"
//               >
//                 <Mail size={16} className="mr-2 text-blue-600" />
//                 <span>msspl.mspl@gmail.com</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//           <a
//               href="https://www.facebook.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               <Facebook size={20} />
//             </a>
//             <a
//               href="https://twitter.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               <Twitter size={20} />
//             </a>
//             <a
//               href="https://www.instagram.com/multifacetsoftwaresystems/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               <Instagram size={20} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }