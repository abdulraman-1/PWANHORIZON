import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Real Estate Journey?
        </h2>
        <p className="text-xl mb-8 max-w-xl mx-auto">
            Schedule a free consultation with our experts to discover the best solutions for your needs
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            <Link to="https://api.whatsapp.com/message/BA6DNO77GCMPL1?autoload=1&app_absent=0" target="_blank">

                Book Consultation
            </Link>
        </button>
        </div>
    </section>
  )
}

export default CTA