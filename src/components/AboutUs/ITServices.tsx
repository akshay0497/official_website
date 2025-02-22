import { useAppSelector } from '../../hooks/useAppSelector';

const Services = () => {
    let itservice : any= useAppSelector((state) => state.posts.itservice)
    console.log(itservice)
  
    const groupedServices = itservice?.data?.reduce((acc :any, service :any) => {
        const { Heading, Title, Description } = service;
    
        // If the heading is not already in the accumulator, create a new array for it
        if (!acc[Heading]) {
          acc[Heading] = [];
        }
    
        // Push the current service data to the correct heading
        acc[Heading].push({ Title, Description });
    
        return acc;
      }, {});
    
      return (
        <div className="backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-4">Our IT Services</h1>
              <p className="text-xl text-gray-600">Comprehensive IT solutions tailored to your needs</p>
            </div>
    
            <div className=" gap-8">
              {Object.keys(groupedServices).map((heading) => (
                <div key={heading} className="service-card p-8 m-3 rounded-xl bg-gray-200/50 backdrop-blur-sm shadow-md hover:shadow-lg transform transition-all hover:scale-104">
                  <h2 className="text-3xl font-bold mb-6">{heading}</h2>
                  
                  {groupedServices[heading].map((service :any, index :any) => (
                    <div key={index}>
                      {service.Title === "BulletPoint" ? (
                        <div>
                          <ul className="space-y-3">
                            {service.Description.split(',').map((point : any, pointIndex :any) => (
                              <li key={pointIndex} className="flex items-center italic ml-2">
                                {point.trim()}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div>
                          <p className="text-gray-600 mb-6 text-justify">{service.Description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
export default Services;
