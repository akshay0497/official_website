import { useForm } from 'react-hook-form';
import { Upload, X, FileText, MapPin, Clock } from 'lucide-react';

interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  coverLetter: string;
  resume: FileList;
  portfolio?: FileList;
}

const Careers = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormInputs>();
  const resumeFile = watch('resume');
  const portfolioFile = watch('portfolio');


  const onSubmit = (data: FormInputs) => {
    console.log(data);
    // Handle form submission
  };

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our engineering team to build scalable web applications using modern technologies.",
      requirements: [
        "5+ years of experience with React and Node.js",
        "Strong understanding of cloud services (AWS/GCP)",
        "Experience with microservices architecture"
      ]
    },
    {
      title: "UX/UI Designer",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful and intuitive user experiences for our digital products.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma and design systems",
        "Portfolio showcasing web/mobile projects"
      ]
    },
    {
      title: "DevOps Engineer",
      location: "New York, NY",
      type: "Full-time",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: [
        "Experience with Kubernetes and Docker",
        "Strong knowledge of CI/CD practices",
        "Infrastructure as Code expertise"
      ]
    },
    {
      title: "Product Manager",
      location: "Remote",
      type: "Full-time",
      description: "Lead product strategy and development for our enterprise solutions.",
      requirements: [
        "5+ years of product management experience",
        "Strong analytical and communication skills",
        "Experience with agile methodologies"
      ]
    }
  ];

  const FilePreview = ({ file, onRemove }: { file: File; onRemove: () => void }) => (
    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
      <FileText className="h-5 w-5 text-blue-600" />
      <span className="text-sm text-gray-600 truncate">{file.name}</span>
      <button
        type="button"
        onClick={onRemove}
        className="ml-auto text-gray-400 hover:text-red-500"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );

  return (
    <div className="bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600">Build the future with us</p>
          </div>

        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          <div className="grid gap-6">
            {openPositions.map((position) => (
              <div
                key={position.title}
                className="job-card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02]"
              >
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        {/* <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {position.department}
                        </span> */}
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {position.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="application-form">
            <h2 className="text-3xl font-bold mb-8">Apply Now</h2>
          <form onSubmit={handleSubmit(onSubmit)} className=" bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName", { required: "First name is required" })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName", { required: "Last name is required" })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position
              </label>
              <select
                {...register("position", { required: "Please select a position" })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a position</option>
                {openPositions.map((position) => (
                  <option key={position.title} value={position.title}>
                    {position.title}
                  </option>
                ))}
              </select>
              {errors.position && (
                <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cover Letter
              </label>
              <textarea
                {...register("coverLetter", { required: "Cover letter is required" })}
                rows={5}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us why you'd be a great fit..."
              ></textarea>
              {errors.coverLetter && (
                <p className="text-red-500 text-sm mt-1">{errors.coverLetter.message}</p>
              )}
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume
                </label>
                <div className="relative">
                  <input
                    type="file"
                    {...register("resume", { required: "Resume is required" })}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                  >
                    <div className="text-center">
                      <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">
                        Click to upload your resume (PDF, DOC, DOCX)
                      </p>
                    </div>
                  </label>
                </div>
                {errors.resume && (
                  <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>
                )}
                {resumeFile?.[0] && (
                  <div className="mt-2">
                    <FilePreview
                      file={resumeFile[0]}
                      onRemove={() => {
                        const input = document.getElementById('resume-upload') as HTMLInputElement;
                        if (input) {
                          input.value = '';
                          input.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                      }}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    {...register("portfolio")}
                    accept=".pdf,.zip,.rar"
                    className="hidden"
                    id="portfolio-upload"
                  />
                  <label
                    htmlFor="portfolio-upload"
                    className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                  >
                    <div className="text-center">
                      <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">
                        Click to upload your portfolio (PDF, ZIP, RAR)
                      </p>
                    </div>
                  </label>
                </div>
                {portfolioFile?.[0] && (
                  <div className="mt-2">
                    <FilePreview
                      file={portfolioFile[0]}
                      onRemove={() => {
                        const input = document.getElementById('portfolio-upload') as HTMLInputElement;
                        if (input) {
                          input.value = '';
                          input.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transform transition-all hover:scale-[1.02]"
            >
              Submit Application
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Careers;