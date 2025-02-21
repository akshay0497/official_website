const isNumberedDescription = (description: string) => {
  const regex = /\d+\.\s/;
  return regex.test(description);
};

const parseDescriptionToList = (description: string) => {
  const regex = /\d+\.\s*/g;
  const items = description.split(regex).filter(item => item.trim() !== "");
  return items;
};
const ProductCard = ({ title, description, image }: { title: string; description: string; image?: string }) => (
  <div className="bg-white p-6 rounded-bl-[30px] rounded-tr-[30px] shadow-md hover:shadow-lg shadow-purple-400 transition-shadow duration-300 transform hover:scale-104 m-2">
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
    
    {image && (
      <img
        src={`data:image/png;base64,${image}`}
        alt={title || 'Product Image'}
        className="w-full h-60 object-contain rounded-xl mb-4"
      />
    )}

    <div className="text-gray-700 text-base">
      {description && isNumberedDescription(description) ? (
        <ol className="list-decimal pl-6">
          {parseDescriptionToList(description).map((itemDesc, index) => (
            <li key={index} className="mb-2 ml-4 italic">{itemDesc}</li>
          ))}
        </ol>
      ) : (
        <p className="ml-4 text-justify">{description}</p>
      )}
    </div>
  </div>
);

const ClientLayout = ({ Data }: any) => {
  const headImage = Data?.data[0];
  const remData = Data?.data.slice(1);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        {!headImage && <p className="text-center text-gray-700">No data available to display.</p>}

        {headImage && (
          <div className="bg-transparent p-6 rounded-xl shadow-md hover:shadow-lg shadow-blue-400 transition-shadow duration-300 transform hover:scale-104 m-2">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">{headImage.Heading}</h2>
            
            {headImage?.Image && (
              <img
                src={`data:image/png;base64,${headImage.Image}`}
                alt={headImage.Title || 'Main Image'}
                className="w-full h-72 object-cover rounded-xl mb-4"
              />
            )}

            <div className="text-gray-700 text-base">
              {headImage.Description && isNumberedDescription(headImage.Description) ? (
                <ol className="list-decimal pl-6">
                  {parseDescriptionToList(headImage.Description).map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ol>
              ) : (
                <p>{headImage.Description}</p>
              )}
            </div>
          </div>
        )}

        <div className="gap-8">
          {remData?.map((item: any) => (
            <ProductCard
              key={item.Id}
              title={item.Title}
              description={item.Description}
              image={item.Image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;