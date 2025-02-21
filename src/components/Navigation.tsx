import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import weblogo from '../../public/msspl_logo.svg';
import { Link } from 'react-router-dom';


const headerOption = [
  {
    title: "Our Processes", child: [
      { title: "Requirement Analysis", href: "/processes/requirement_analysis" },
      { title: "Acceptance Testing", href: "/processes/acceptance-testing" },
      { title: "Project Proposal", href: "/processes/project-proposal" },
      { title: "Project Design", href: "/processes/project-design" },
      { title: "Project Development", href: "/processes/project-development" },
      { title: "Installation", href: "/processes/installation" }
    ]
  },
  {
    title: "Products", child: [
      { title: "Library Automation System", href: "/products/library-automation" },
      { title: "Campsys ERP Management", href: "/products/campsys-erp" },
      { title: "File Tracking System", href: "/products/file-tracking" },
      { title: "Android Apps", href: "/products/android-apps" },
      { title: "E-Commerce Development", href: "/products/ecommerce" },
      { title: "E-Secure", href: "/products/esecure" }
    ]
  },
  { title: "Our Clients", child: [{ title: "Be Our Partner", href: "/clients/be-our-partner" }] },
  { title: "Our Technology", href: "/technology", child: [] },
  {
    title: "About Us", child: [
      { title: "Company Profile", href: "/about/company-profile" },
      { title: "Objectives", href: "/about/objectives" },
      { title: "Management & Staff", href: "/about/management" },
      { title: "IT Service", href: "/about/it-service" }
    ]
  },
  { title: "Career", href: "/career", child: [] }
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-400 ${scrolled ? 'bg-white/15 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to='/' >
            <img src={weblogo} alt="MSSPL" className="h-16 w-auto ml-2"/>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {headerOption.map((item: any, index: any) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <motion.a>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span className="px-3 py-2 text-gray-700 font-medium cursor-default">
                      {item.title}
                    </span>
                  )}
                </motion.a>

                {item.child.length > 0 && openDropdown === index && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
                  >
                    {item.child.map((subItem: any) => (
                      subItem.href ? (
                        <Link
                          to={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >
                          {subItem.title}
                        </Link>
                      ) : (
                        <span
                          className="block px-4 py-2 text-gray-700 cursor-default"
                        >
                          {subItem.title}
                        </span>
                      )
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}


// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import weblogo from '../../public/msspl_logo.svg'
// import { menuItems } from '../constants';
// // const menuItems = [
// //   { name: 'Home', href: '#' },
// //   { name: 'About Us', href: '#' },
// //   { name: 'Services', href: '#' },
// //   { name: 'Portfolio', href: '#' },
// //   { name: 'Contact', href: '#' },
// // ];

// const navVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15,
//     },
//   },
//   hover: {
//     scale: 1.05,
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 10,
//     },
//   },
// };

// const mobileMenuVariants = {
//   hidden: { 
//     opacity: 0,
//     height: 0,
//     transition: {
//       duration: 0.2,
//       ease: "easeInOut",
//     },
//   },
//   visible: {
//     opacity: 1,
//     height: "auto",
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut",
//       staggerChildren: 0.1,
//     },
//   },
// };

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial="hidden"
//       animate="visible"
//       variants={navVariants}
//       className={`sticky top-0 z-50 transition-all duration-400 ${
//         scrolled 
//           ? 'bg-white/15 backdrop-blur-md shadow-lg'
//           : 'bg-white shadow-md'
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 sm:h-20">
//           {/* Logo */}
//           <motion.div
//             variants={itemVariants}
//             className="flex items-center"
//           >
//             <motion.span
//               className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//                <img src={weblogo} alt="MSSPL" className="h-16 w-auto ml-2" />
//             </motion.span>
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-1 lg:space-x-2">
//             {menuItems.map((item) => (
//               <motion.a
//                 key={item.title}
//                 // href={item.href}
//                 variants={itemVariants}
//                 whileHover="hover"
//                 className="relative px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors group"
//               >
//                 {item.title}
//                 <motion.span
//                   className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left"
//                   initial={{ scaleX: 0 }}
//                   whileHover={{ scaleX: 1 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button
//             variants={itemVariants}
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
//           >
//             <motion.div
//               initial={false}
//               animate={{ rotate: isOpen ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </motion.div>
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
// <AnimatePresence>
//   {isOpen && (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       exit="hidden"
//       variants={mobileMenuVariants}
//       className="md:hidden overflow-hidden"
//     >
//       <div className="px-2 pt-2 pb-3 space-y-1">
//         {menuItems.map((item) => (
//           <motion.a
//             key={item.title}
//             // href={item.href}
//             variants={itemVariants}
//             whileHover={{ scale: 1.02, x: 10 }}
//             className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
//           >
//             {item.title}
//           </motion.a>
//         ))}
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// };