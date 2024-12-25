import { X } from "lucide-react";
import React, { useState } from "react";

function EnquireForm({ onClickHandle }) {
  const initialFormState = {
    productID: "", // Hidden field
    name: "",
    email: "",
    mobile: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData(initialFormState);
  };

  return (
    <>
      <div>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className=" bg-white rounded-lg p-8 max-w-md  w-full m-4 relative ">
            <button
              onClick={() => onClickHandle(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X />
            </button>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-orange-700">
                Product Enquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 ">
                <label className="hidden">Product Name</label>
                <input
                  type="text"
                  name="productID"
                  value={formData.productID}
                  onChange={handleChange}
                  className="hidden"
                />

                {/* Name field */}
                <label>Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                {/* Email field */}
                <label>Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                {/* Mobile field */}
                <label>Mobile</label>
                <input
                  required
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                />

                {/* Submit button */}
                <button
                  type="submit"
                  className="orange-button rounded-md w-full py-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnquireForm;
