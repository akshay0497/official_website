import { useAppSelector } from '../../hooks/useAppSelector';
import { Code, ClipboardList, TestTube, Palette, Headphones } from 'lucide-react';


const iconMap = {
    "Software Developers": Code,
    "Project Managers": ClipboardList,
    "Quality Assurance & Testing Team": TestTube,
    "UX/UI Designers": Palette,
    "Customer Support & Service Team": Headphones
  };


function StaffManagement() {
    let StaffManagement =  useAppSelector((state : any) => state.posts.StaffManagement);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 -right-48 -top-48 bg-blue-50 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
        <div className="absolute w-96 h-96 -left-48 -bottom-48 bg-purple-50 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* <span className="inline-block py-1 px-3 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Our Team
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Team
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-6 bg-blue-600 rounded-full"></div>
            <div className="h-1 w-10 bg-blue-600 rounded-full"></div>
            <div className="h-1 w-6 bg-blue-600 rounded-full"></div>
          </div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our diverse team of experts brings together years of experience and expertise to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Staff Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {StaffManagement?.data?.filter((obj: any) => obj.isActive)?.map((member : any, index : any) => {
            const IconComponent = iconMap[member.Title as keyof typeof iconMap] || Code;
            
            return (
              <div 
                key={member.Id}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  index === StaffManagement?.data?.length - 1 && StaffManagement?.data?.length % 2 !== 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Icon Section */}
                  <div className="md:w-2/5 relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-12">
                    <IconComponent size={64} className="text-white opacity-90" />
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {member.Title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {member.Description}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-100 rounded-3xl transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StaffManagement;