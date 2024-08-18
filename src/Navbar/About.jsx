import React from 'react';
import { useEffect } from 'react';

import MyAudioFile from '/public/Nature.mp3';

export default function About() {

    useEffect(() => {
        const audio = new Audio(MyAudioFile);
        audio.play();

        return () => {
            // Optionally, you can stop the audio when the component unmounts
            audio.pause();
            audio.currentTime = 0;
        };
    }, []); // Empty dependency array to run only on mo


    return (
        <section className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    className="object-cover w-full h-full z-19"
                    autoPlay
                    muted
                    loop
                >
                    <source src="https://cdn.pixabay.com/video/2015/10/05/19/16/piano-97285_960_720.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto shadow-lg bg-white rounded-lg p-6 mb-6 max-w-4xl">
                {/* Title */}
                <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-8 animate-bounce">
                    About Us
                </div>

                {/* Image Cards */}
                <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8 mb-8">
                    {/* Image Card 1 */}
                    <div className="bg-black rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-3/4 md:w-2/3 lg:w-2/5 xl:w-1/3 lg:h-80 xl:h-72 flex items-center justify-center">
                        <img
                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/mac.jpg?raw=true"
                            alt="Jazz Piano"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Content Cards */}
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 mb-8">
                    {/* Card 1: Piano Teaching Expertise */}
                    <div className="bg-black text-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-bold mb-4 text-center">Piano Teaching Expertise</h3>
                        <p className="text-center">
                            Our instructors are seasoned jazz pianists with years of experience in teaching. They guide students through the nuances of jazz, helping them master the keys and unlock their creative potential.
                        </p>
                    </div>

                    {/* Card 2: Expanding Your Brain */}
                    <div className="bg-black text-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-bold mb-4 text-center">Expanding Your Brain</h3>
                        <p className="text-center">
                            Learning music, especially jazz, is known to enhance brain function. It improves memory, sharpens cognitive abilities, and fosters creativity, making it a powerful tool for personal growth.
                        </p>
                    </div>

                    {/* Card 3: Emotional Healing */}
                    <div className="bg-black text-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-bold mb-4 text-center">Emotional Healing</h3>
                        <p className="text-center">
                            Music is a form of emotional expression that can heal the mind and soul. Our jazz piano courses help students connect deeply with their emotions, promoting mental and emotional well-being.
                        </p>
                    </div>
                </div>
            </div>

            {/* New Content Section */}
            <div className="relative z-10 container mx-auto bg-white shadow-lg rounded-lg p-6 mb-6 max-w-4xl">
                <div className="text-center font-serif text-3xl font-bold text-primary-950 mb-8">
                    About Our Instructors
                </div>
                <div className="space-y-6">
                    {/* About the Instructors */}
                    <div className="p-6 rounded-lg shadow-lg hover:bg-black hover:text-white">
                        <h3 className="text-xl font-bold mb-4">Our Jazz Piano Experts</h3>
                        <p>
                            Our instructors are passionate about jazz and have been performing and teaching for over a decade. They have trained with some of the best musicians worldwide and are dedicated to passing on their knowledge to the next generation of jazz pianists.
                        </p>
                    </div>

                    {/* Testimonials */}
                    <div className="p-6 rounded-lg shadow-lg hover:bg-black hover:text-white">
                        <h3 className="text-xl font-bold mb-4">Student Success Stories</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>“Learning jazz piano has completely transformed my life. I feel more creative and in tune with my emotions.”</li>
                            <li>“The instructors here are amazing. They helped me expand my brain and discover new ways to express myself through music.”</li>
                            <li>“Music has become my therapy. It’s been an incredible journey of emotional healing and artistic growth.”</li>
                        </ul>
                    </div>

                    {/* Press Coverage */}
                    <div className="p-6 rounded-lg shadow-lg hover:bg-black hover:text-white">
                        <h3 className="text-xl font-bold mb-4">In the Press</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Jazz Times</li>
                            <li>Music Educators Journal</li>
                            <li>DownBeat Magazine</li>
                            <li>The New York Times</li>
                            <li>Billboard Magazine</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="relative z-10 container mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 mb-6 max-w-4xl">
                <div className="text-center font-serif text-3xl font-bold text-primary-950 mb-8">
                    Services
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Service 1: Beginner Piano Lessons */}
                    <div className="p-6 rounded-lg shadow-lg hover:bg-black hover:text-white">
                        <h3 className="text-xl font-bold mb-4">Beginner Piano Lessons</h3>
                        <p>
                            Start your musical journey with our beginner lessons. Learn the basics of jazz piano, including scales, chords, and rhythm.
                        </p>
                    </div>

                    {/* Service 2: Advanced Jazz Techniques */}
                    <div className="p-6 rounded-lg shadow-lg hover:bg-black hover:text-white">
                        <h3 className="text-xl font-bold mb-4">Advanced Jazz Techniques</h3>
                        <p>
                            Take your playing to the next level with advanced techniques. Learn improvisation, complex chords, and the art of jazz performance.
                        </p>
                    </div>

                    {/* Service 3: Group Sessions */}
                    <div className="p-6 rounded-lg shadow-lg hover:bg-black hover:text-white">
                        <h3 className="text-xl font-bold mb-4">Group Sessions</h3>
                        <p>
                            Join our group sessions to play with others, learn ensemble skills, and experience the joy of making music together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
