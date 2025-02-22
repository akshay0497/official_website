import { useAppSelector } from '../../hooks/useAppSelector';
import obj from '../../assets/CompanyProfile/objectives.png'

function Objectives() {
    let objective =  useAppSelector((state : any) => state.posts.objectives);
  return (
    <section className="py-20 " 
    style={{ backgroundImage: `url(${obj})`, backgroundSize: "cover", backgroundPosition: "center", 
    backgroundRepeat:"no-repeat", opacity:0.7, zIndex: -1 }}>
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Objectives</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objective?.data?.filter((obj: any) => obj.isActive)?.map((objective : any) => {
            return (
              <div 
                key={objective.Id}
                className="rounded-lg p-8  transition-shadow duration-300 "
              >
                <h3 className="text-xl font-bold text-black mb-4">{objective.Title}</h3>
                <div className="w-20 h-1 bg-green-500 "></div>
                <p className="text-gray-900/75 text-justify leading-relaxed">
                  {objective.Description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Objectives;