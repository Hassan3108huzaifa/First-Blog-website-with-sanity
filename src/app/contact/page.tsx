import React from "react";

const ContactPage = () => {
  return (
    <div className="px-10 py-5 md:px-24 max-w-[1000px] mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800">Address</h3>
                <p className="text-gray-600">123 Blog Street, Digital City, 12345</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full p-2 border rounded-md" disabled />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-2 border rounded-md" disabled />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea className="w-full p-2 border rounded-md h-32" disabled></textarea>
              </div>
              <button className="bg-gray-300 text-gray-600 px-6 py-2 rounded-md cursor-not-allowed">
                Send Message (Disabled)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 