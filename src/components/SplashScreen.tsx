import { Loader2 } from 'lucide-react';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-purple-800 to-yellow-800 opacity-20 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping"></div>
          <div className="relative flex items-center justify-center w-full h-full">
            <Loader2 className="w-16 h-16 text-white animate-spin" />
          </div>
        </div>
        {/* <h1 className="text-3xl font-bold text-white mb-2">Please wait...</h1> */}
        <p className="text-blue-100">Please wait while we fetch the latest content</p>
      </div>
    </div>
  );
};

export default SplashScreen;