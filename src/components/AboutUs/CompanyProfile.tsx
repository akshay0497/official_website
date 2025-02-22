import { Target, Users, Award, Cpu, Rocket,  Code, Briefcase, CheckCircle, ShieldCheck, Ribbon, ThumbsUp   } from 'lucide-react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Link } from 'react-router-dom';
import backpic from '../../assets/CompanyProfile/Front Design.webp'

const CompanyProfile = () => {
  let companyProfile =  useAppSelector((state : any) => state.posts.companyprofile);

  const getDataByHeading = (heading: string) => {
    return companyProfile?.data?.filter((item: any) => 
      item.Heading?.trim().toLowerCase() === heading.trim().toLowerCase() && item.isActive
    );
  };
  
  const getDataByTitle = (title: string) => {
    return companyProfile?.data?.find((item : any) => item.Title === title && item.isActive);
  };

  const experienceYears = '20+';
  const clientCount = '200+';
  const projectsCount = '110+';
  const stats = [
    { number: experienceYears, label: "Years Experience" },
    { number: clientCount, label: "Satisfied Clients" },
    { number: projectsCount, label: "Projects" }
  ];

  const aboutIntro = getDataByHeading("About Us");
  const coreValues = getDataByHeading("Core Values");
  const whyChooseUs = getDataByHeading("Why Choose Us?");
  const vision = getDataByTitle("Our Vision");
  const mission = getDataByTitle("Our Mission");
  const contact = getDataByTitle("Contact Us");

  const coreValueIcons: Record<string, React.FC<any>> = {
    Innovation: Cpu,
    Collaboration: Users,
    Integrity: ShieldCheck,
    Quality: Award
  };

  const whyChooseUsIcons: Record<string, React.FC<any>> = {
    "Experienced Team": Briefcase,
    "Tailored Solutions": Code,
    "End-to-End Support": CheckCircle,
    "Proven Track Record": Ribbon ,
    "Commitment to Quality": ThumbsUp 
  };

  return (
    <div className="">
    {/* Hero Section */}
    <section className="relative h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0"  style={{ backgroundImage: `url(${backpic})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/50 to-blue-100/0" />
      </div>
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transforming Ideas<br />Into Reality
          </h1>
          <p className="text-xl max-w-2xl">
            {aboutIntro[0]?.Description}
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 border border-white/10 rounded-tr-3xl rounded-bl-3xl rounded-br-md rounded-tl-md backdrop-blur-sm">
              <span className="stat-number text-4xl font-bold block mb-2">{stat.number}</span>
              <span className="text-blue-300">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About Section */}
    <section className="py-20 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-section">
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <div className="space-y-6 text-gray-600">
              {aboutIntro.map((item :any ) => (
                <p key={item.Id} className='text-justify'>{item.Description}</p>
              ))}
            </div>
          </div>

          <div className="fade-in-section">
            <div className="grid grid-cols-2 gap-6">
              {vision && (
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Target className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{vision.Title}</h3>
                  <p className="text-gray-600">{vision.Description}</p>
                </div>
              )}
              {mission && (
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Rocket className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{mission.Title}</h3>
                  <p className="text-gray-600">{mission.Description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values Section */}
    {coreValues.length > 0 && (
      <section className="py-20">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-black text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value : any) => {
              const IconComponent = coreValueIcons[value.Title];
              return (
                <div
                  key={value.Id}
                  className="fade-in-section relative group p-8 rounded-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 transform -skew-y-6 group-hover:skew-y-0 transition-transform duration-300 rounded-xl opacity-10" />
                  <div className="relative">
                    {IconComponent && <IconComponent className="h-12 w-12 text-blue-600 mb-6" />}
                    <h3 className="text-2xl font-bold mb-4">{value.Title}</h3>
                    <p className="text-gray-600">{value.Description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )}

    {/* Why Choose Us Section */}
    {whyChooseUs.length > 0 && (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-black text-center mb-16">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item : any) => {
              const IconComponent = whyChooseUsIcons[item.Title];
              return (
                <div
                  key={item.Id}
                  className="fade-in-section bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow"
                >
                  {IconComponent && <IconComponent className="h-12 w-12 text-blue-600 mb-6" />}
                  <h3 className="text-2xl font-bold mb-4">{item.Title}</h3>
                  <p className="text-gray-600 italic pl-2">{item.Description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )}

    {/* Contact Section */}
    {contact && (
      <section className="py-20 bg-gradient-to-b from-blue-300 to bg-indigo-600" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white " >
            <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {contact.Description}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-900 font-bold py-4 px-8 rounded-lg transform transition-all hover:scale-105"
            >
              Contact Us
            </Link>
        </div>
      </section>
    )}
  </div>
);
};


export default CompanyProfile;