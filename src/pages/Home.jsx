export default function Home() {
  return (
    <div className="min-h-screen py-10 sm:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 bg-black bg-opacity-15 rounded-lg p-10">
        <div className="space-y-10 ">
          {/*<div className="max-w-[1050px] mx-auto p-6 bg-white shadow-lg">*/}
          <div className="flex flex-col sm:flex-row items-center bg-white shadow-lg overflow-hidden">
            <div className="max-w-[1050px] p-6 ">
              <h1 className="text-3xl font-bold text-top mb-6 shadow-lg">
                Quem Somos
              </h1>
              <p className="text-gray-700 text-justify leading-relaxed">
                Atuamos com ética, comprometimento e excelência para defender seus direitos.
                Conte com nossa equipe especializada em diversas áreas do Direito.
              </p>
            </div>
            <img
              src="/images/logos/simbolofundo1.png"
              alt="Simbolo"
              //className="w-full sm:w-48 h-64 object-cover"
              className="w-[192px] h-[256px] object-cover flex-shrink-0 mt-4 sm:mt-0 mb-4 sm:mb-0 transform transition duration-300 hover:-translate-y-1 hover:scale-125 hover:shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}