import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

export function Contact() {
return (
    <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 bg-indigo-600 p-12 text-white">
                        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                        <p className="mb-8">
                            Have questions about our technology or interested in partnering
                            with us? Reach out and we'll get back to you as soon as
                            possible.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MailIcon className="mr-4 mt-1" fontSize="small" />
                                <div>
                                    <h3 className="font-semibold mb-1">Email Us</h3>
                                    <p className="text-indigo-200">contact@voiceconnect.ai</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ChatBubbleOutlineIcon className="mr-4 mt-1" fontSize="small" />
                                <div>
                                    <h3 className="font-semibold mb-1">Live Chat</h3>
                                    <p className="text-indigo-200">
                                        Available weekdays 9AM-5PM EST
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <GitHubIcon className="mr-4 mt-1" fontSize="small" />
                                <div>
                                    <h3 className="font-semibold mb-1">Open Source</h3>
                                    <p className="text-indigo-200">
                                        Contribute to our project on GitHub
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <h3 className="font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="bg-white bg-opacity-20 hover:bg-opacity-30 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                                >
                                    {/* Facebook */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="0"
                                        height="0"
                                        style={{ display: 'none' }}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <g>
                                            <path
                                                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="bg-white bg-opacity-20 hover:bg-opacity-30 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                                >
                                    {/* Twitter */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="0"
                                        height="0"
                                        style={{ display: 'none' }}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <g>
                                            <path
                                                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="bg-white bg-opacity-20 hover:bg-opacity-30 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                                >
                                    {/* Instagram */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="0"
                                        height="0"
                                        style={{ display: 'none' }}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <g>
                                            <rect
                                                x="2"
                                                y="2"
                                                width="20"
                                                height="20"
                                                rx="5"
                                                ry="5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <line
                                                x1="17.5"
                                                y1="6.5"
                                                x2="17.51"
                                                y2="6.5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="bg-white bg-opacity-20 hover:bg-opacity-30 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                                >
                                    {/* LinkedIn */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="0"
                                        height="0"
                                        style={{ display: 'none' }}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <g>
                                            <path
                                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <rect
                                                x="2"
                                                y="9"
                                                width="4"
                                                height="12"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <circle
                                                cx="4"
                                                cy="4"
                                                r="2"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-12">
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                        <form>
                            <div className="mb-6">
                                <label
                                    className="block text-sm font-medium text-slate-700 mb-2"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-sm font-medium text-slate-700 mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-sm font-medium text-slate-700 mb-2"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                        <div className="mt-8 text-center text-sm text-slate-500">
                            By contacting us, you agree to our{' '}
                            <a href="#" className="text-indigo-600 hover:underline">
                                Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-indigo-600 hover:underline">
                                Terms of Service
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}