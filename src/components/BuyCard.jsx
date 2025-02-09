import { useState } from "react";
import axios from "axios";
import { FaChevronDown } from "react-icons/fa"; // Import custom arrow icon

const BuyCard = () => {
  const sqrtFoot = [
    {
      label: "burckinham",
      SQM: "N10M FOR 465 SQM"
    },
    {
      label: "duke",
      SQM: ["N3.2M FOR 500 SQM", "N2M 300 SQM"]
    },
    {
      label: "horizon",
      SQM: "N6M 464 SQM"
    },
    {
      label: "obibi",
      SQM: "N1.999M 464 SQM"
    },
    {
      label: "irede",
      SQM: ["N7M 500 SQM", "4.5M 300 SQM"]
    },
  ];

  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [estate, setEstate] = useState("burckinham"); // default estate
  const [sqm, setSQM] = useState(""); // selected SQM value
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Compute the SQM options based on the selected estate
  const currentEstateData = sqrtFoot.find(item => item.label === estate);
  const sqmOptions = currentEstateData
    ? Array.isArray(currentEstateData.SQM)
      ? currentEstateData.SQM
      : [currentEstateData.SQM]
    : [];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!name || !email || !number || !message) {
      setErrorMessage("Please fill out all fields before submitting the form.");
      setSuccessMessage("");
      return;
    }

    // Clear any existing error messages
    setErrorMessage("");

    const serviceId = "service_ipdqogh";
    const templateId = "template_lywqx6n";
    const publicKey = "T_g2OBEESiAYRIKST";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        from_number: number,
        from_estate: estate, // include selected estate
        from_sqm: sqm,       // include selected SQM
        to_name: "PWANHORIZON",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log("Email sent successfully!", res.data);
      setSuccessMessage("Your message has been sent successfully!");
      setErrorMessage("");
      // Clear form fields and reset estate & sqm to default if desired
      setName("");
      setEmail("");
      setNumber("");
      setEstate("burckinham");
      setSQM("");
      setMessage("");
    } catch (error) {
      console.error("Email could not be sent", error);
      setErrorMessage("There was an error sending your message. Please try again later.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="bg-white lg:w-1/2 w-full p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Contact Us To <span className="text-red-500">Buy Now</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+234 800 000 0000"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        {/* Estate Selection */}
        <div>
          <label className="block text-gray-700 mb-2">Select Estate</label>
          <div className="relative">
            <select
              className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={estate}
              onChange={(e) => {
                setEstate(e.target.value);
                setSQM(""); // reset SQM when estate changes
              }}
            >
              <option value="burckinham">Burckinham Estate</option>
              <option value="horizon">Horizon Estate</option>
              <option value="duke">Duke And Duchess Estate</option>
              <option value="obibi">Obibi Eze Estate</option>
              <option value="irede">Irede Estate</option>
            </select>
            {/* Custom arrow icon */}
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
          </div>
        </div>

        {/* SQM Selection (Populated based on estate selection) */}
        {sqmOptions.length > 0 && (
          <div>
            <label className="block text-gray-700 mb-2">Select Square Meter</label>
            <div className="relative">
              <select
                className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={sqm}
                onChange={(e) => setSQM(e.target.value)}
              >
                <option value="">Select an Square Meter</option>
                {sqmOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {/* Custom arrow icon */}
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Send Message
        </button>
      </form>

      {/* Display error or success messages */}
      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
      {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
    </div>
  );
};

export default BuyCard;
