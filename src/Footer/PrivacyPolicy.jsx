import React from 'react';

export default function PrivacyPolicy() {
    return (
        <section className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gray-100">
            {/* Title */}
            <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-8">
                Privacy Policy
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/4152513/pexels-photo-4152513.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Privacy Policy Image 1"
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/2882638/pexels-photo-2882638.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Privacy Policy Image 2"
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/7142962/pexels-photo-7142962.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Privacy Policy Image 3"
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>
            </div>

            {/* Privacy Policy Content */}
            <div className="bg-black text-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Privacy Policy</h2>
                <p className="text-lg mb-4">
                    At LaughNow 101, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information.
                </p>
                <p className="text-lg mb-4">
                    1. **Information Collection**: We collect personal information such as your name, email address, and contact details when you use our services. This information is used to provide and improve our services.
                </p>
                <p className="text-lg mb-4">
                    2. **Data Usage**: Your data is used to enhance your experience with our services. We may use your information to communicate with you, send updates, and offer support.
                </p>
                <p className="text-lg mb-4">
                    3. **Data Security**: We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                </p>
                <p className="text-lg mb-4">
                    4. **Third-Party Services**: We may share your information with trusted third parties who assist us in operating our services. These third parties are bound by confidentiality agreements and are not permitted to use your information for other purposes.
                </p>
                <p className="text-lg mb-4">
                    5. **Changes to Policy**: We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                </p>
                <p className="text-lg">
                    If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:fakeemail@example.com" className="text-yellow-300 hover:underline">hvisserclyt@gmail.com</a>
                </p>
            </div>
        </section>
    );
}
