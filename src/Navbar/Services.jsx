import React from 'react';
import MyAudioFile from '/Stairway.wav'
import { useEffect } from 'react';

export default function Services() {


    useEffect(() => {
        const audio = new Audio(MyAudioFile);
        audio.loop = true;  // Enable looping
        audio.play();

        return () => {
            // Optionally, you can stop the audio when the component unmounts
            audio.pause();
            audio.currentTime = 0;
        };
    }, []); // Empty dependency array to run only on mo

    return (
        <section className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gray-100">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="https://cdn.pixabay.com/video/2022/11/26/140582-775389269_tiny.mp4" type="video/mp4" />
                {/* Add a fallback for non-supporting browsers */}
                Your browser does not support the video tag.
            </video>

            {/* Overlay to darken the video */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Content */}
            <div className="relative z-20">
                {/* Title */}
                <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-8 rounded-lg gradient-background2 mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-3 transition-transform transform hover:scale-105 zoom">
                    Piano Learning Services
                </div>

                {/* Service Images Flexbox */}
                <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-8 mb-8">
                    <div className="bg-black bg-opacity-50 p-2 rounded-lg flex items-center justify-center shadow-sky transition-transform transform hover:scale-105">
                        <img
                            src="https://images.pexels.com/photos/1868684/pexels-photo-1868684.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Jazz Piano"
                            className="w-3/4 h-auto object-cover rounded-lg"
                        />
                    </div>

                    <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg flex items-center justify-center mt-6 lg:mt-0 transition-transform transform hover:scale-105">
                        <img
                            src="https://images.pexels.com/photos/3760278/pexels-photo-3760278.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Piano Scales"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Service Packages Grid */}
                <div className="flex flex-col items-center gap-8 mb-8">
                    {/* Package 1: Jazz Piano Mastery */}

                    <div className="gradient-background2 rounded-lg shadow-lg p-6 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 transition-transform transform hover:scale-105">
                        <h3 className="text-4xl font-bold mb-4 text-center zoom text-white">Jazz Piano Mastery Course Outline</h3>
                    </div>
                    <div className="bg-black bg-opacity-50 text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-bold mb-4 text-center">2-Day Intensive Workshop</h3>
                        <p className="text-center">
                            Immerse yourself in the fundamentals of jazz piano with our 2-day workshop. Perfect for aspiring jazz pianists looking to enhance their skills in scales, modes, chord changes, and improvisation.
                        </p>
                    </div>

                    {/* Course Modules */}
                    <div className="bg-black bg-opacity-50 text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 transition-transform transform hover:scale-105">
                        {/* Introduction to Jazz Piano */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold mb-2">Introduction to Jazz Piano:</h4>
                            <p>Understanding the basics of jazz theory and harmony.</p>
                            <p>Exploring the role of scales and modes in jazz improvisation.</p>
                        </div>

                        {/* Scales and Modes */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold mb-2">Scales and Modes:</h4>
                            <p>Learning and mastering major, minor, and jazz scales.</p>
                            <p>Exploring modes such as Dorian, Phrygian, and Lydian for improvisation.</p>
                        </div>

                        {/* Chord Progressions and Comping */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold mb-2">Chord Progressions and Comping:</h4>
                            <p>Understanding chord changes and how to comp effectively.</p>
                            <p>Practicing different voicings and rhythmic patterns.</p>
                        </div>

                        {/* Harmonic and Melodic Minors */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold mb-2">Harmonic and Melodic Minors:</h4>
                            <p>Delving into the harmonic minor and melodic minor scales.</p>
                            <p>Incorporating these scales into jazz improvisation and composition.</p>
                        </div>

                        {/* Composition and Improvisation */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold mb-2">Composition and Improvisation:</h4>
                            <p>Techniques for composing jazz pieces and improvising over chord changes.</p>
                            <p>Exploring creativity and spontaneity in jazz performance.</p>
                        </div>
                    </div>

                    {/* Qualification */}
                    <div className="bg-black bg-opacity-50 text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-bold mb-4 text-center">Qualification</h3>
                        <p>Upon completing the course, participants will receive a Certificate of Jazz Piano Proficiency. This qualification will enable you to confidently perform, teach, and compose jazz music.</p>
                    </div>

                    {/* Benefits of Certification */}
                    <div className="bg-black bg-opacity-50 text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-bold mb-4 text-center">Benefits of Certification</h3>

                        {/* Global Recognition */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold mb-2">Global Recognition:</h4>
                            <p>Receive global recognition as a proficient jazz pianist.</p>
                        </div>

                        {/* Musical Mastery */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold mb-2">Musical Mastery:</h4>
                            <p>Master the skills needed to excel in jazz piano performance and composition.</p>
                        </div>

                        {/* Career Opportunities */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold mb-2">Career Opportunities:</h4>
                            <p>Open doors to career opportunities in music performance, teaching, and composition.</p>
                        </div>

                        {/* Community and Networking */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold mb-2">Community and Networking:</h4>
                            <p>Join a vibrant community of jazz musicians and expand your professional network.</p>
                        </div>

                        {/* Price Information */}
                        <div className='flex justify-center p-4'>
                            <div className="bg-black text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 transition-transform transform hover:scale-105">
                                <h3 className="text-2xl font-bold mb-4 text-center">Price</h3>
                                <h3 className="text-3xl font-bold mb-4 text-center zoom">R2500</h3>
                            </div>
                        </div>
                    </div>

                    {/* Online Course */}
                    <div className="gradient-background2 rounded-lg shadow-lg p-6 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 transition-transform transform hover:scale-105">
                        <h3 className="text-4xl font-bold mb-4 text-center zoom text-white">Online Jazz Piano Course</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
