import MainLayout from '../MainLayout'
import people from '/people.jpg'
import people1 from '/people1.jpg'
import people2 from '/people2.jpg'

import CTA from '../components/CTA'
import Footer from '../components/Footer'

const ProjectGalleryPage = () => {
    
  return (
    <MainLayout>
      <section className="">
        <video 
          autoPlay
          loop
          playsInline
          controls
          className='w-full h-auto'
        >
          <source 
            src="/duke.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="py-8 px-4 bg-gray-50 my-6">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
            GALLERY
        </h2>
        <p className='text-lg text-gray-700 text-center font-medium mb-8'>We discover the best lands in fast-developing areas and make these known to you and also show you ways to conveniently finance your private properties in budget-friendly manners. We are focused on making home ownership the easiest thing you have ever done.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
                src={people}
                alt="Gallery image 1"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
                src={people1}
                alt="Gallery image 2"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
                src={people2}
                alt="Gallery image 3"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            </div>
        </div>
        </section>

      
      {/* CTA Section */}
      <CTA />
      <Footer />
    </MainLayout>
  )
}

export default ProjectGalleryPage