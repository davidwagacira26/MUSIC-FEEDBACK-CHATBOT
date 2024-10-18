'use client'

import { useState } from 'react'
import { useCompletion } from 'ai/react'

export default function MusicFeedbackAI() {
  const [likes, setLikes] = useState<string[]>([])
  const [dislikes, setDislikes] = useState<string[]>([])
  const [likeInput, setLikeInput] = useState('')
  const [dislikeInput, setDislikeInput] = useState('')

  const { complete, completion, isLoading } = useCompletion({
    api: '/api/generate-feedback',
  })

  const handleAddLike = () => {
    if (likeInput) {
      setLikes([...likes, likeInput])
      setLikeInput('')
    }
  }

  const handleAddDislike = () => {
    if (dislikeInput) {
      setDislikes([...dislikes, dislikeInput])
      setDislikeInput('')
    }
  }

  const handleGenerateFeedback = async () => {
    const prompt = `Generate a music feedback message for an artist. Likes: ${likes.join(', ')}. Dislikes: ${dislikes.join(', ')}.`
    await complete(prompt)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-800 text-gray-100 rounded-lg overflow-hidden shadow-xl">
        <header className="border-b border-gray-700 p-6">
          <div className="flex items-center space-x-4">
            <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="64" rx="32" fill="url(#paint0_linear)" />
              <path d="M32 48C41.9411 48 50 39.9411 50 30C50 20.0589 41.9411 12 32 12C22.0589 12 14 20.0589 14 30C14 39.9411 22.0589 48 32 48Z" fill="#2A2A2A"/>
              <path d="M26 38V22L42 30L26 38Z" fill="url(#paint1_linear)"/>
              <circle cx="24" cy="24" r="2" fill="#4B5563"/>
              <circle cx="40" cy="24" r="2" fill="#4B5563"/>
              <path d="M28 34C28 35.1046 29.7909 36 32 36C34.2091 36 36 35.1046 36 34" stroke="#4B5563" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3B82F6"/>
                  <stop offset="1" stopColor="#8B5CF6"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="26" y1="30" x2="42" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3B82F6"/>
                  <stop offset="1" stopColor="#8B5CF6"/>
                </linearGradient>
              </defs>
            </svg>
            <div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Music Feedback AI
              </h1>
              <p className="text-sm text-gray-400">
                AI-powered music feedback generator
              </p>
            </div>
          </div>
        </header>
        <main className="p-6 space-y-6">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
              Likes
            </h2>
            <div className="flex space-x-2">
              <input
                type="text"
                value={likeInput}
                onChange={(e) => setLikeInput(e.target.value)}
                placeholder="Enter an aspect you like"
                className="flex-grow p-2 bg-gray-700 border border-gray-600 rounded text-gray-100"
              />
              <button onClick={handleAddLike} className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {likes.map((like, index) => (
                <span key={index} className="px-2 py-1 bg-blue-900 text-blue-100 rounded text-sm">
                  {like}
                </span>
              ))}
            </div>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 2l2 2m8 8l2 2M2 22l2-2m8-8l2-2M22 2l-2 2m-8 8l-2 2m12 10l-2-2m-8-8l-2-2"></path>
              </svg>
              Dislikes
            </h2>
            <div className="flex space-x-2">
              <input
                type="text"
                value={dislikeInput}
                onChange={(e) => setDislikeInput(e.target.value)}
                placeholder="Enter an aspect you dislike"
                className="flex-grow p-2 bg-gray-700 border border-gray-600 rounded text-gray-100"
              />
              <button onClick={handleAddDislike} className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {dislikes.map((dislike, index) => (
                <span key={index} className="px-2 py-1 bg-red-900 text-red-100 rounded text-sm">
                  {dislike}
                </span>
              ))}
            </div>
          </section>
          <button 
            onClick={handleGenerateFeedback} 
            disabled={isLoading || (likes.length === 0 && dislikes.length === 0)}
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded font-semibold hover:opacity-90 disabled:opacity-50 text-white"
          >
            {isLoading ? 'Generating...' : 'Generate Feedback'}
          </button>
          {completion && (
            <section className="space-y-2">
              <h2 className="text-lg font-semibold">Generated Feedback:</h2>
              <textarea 
                value={completion} 
                readOnly 
                className="w-full h-40 p-2 bg-gray-700 border border-gray-600 rounded text-gray-100 resize-none"
              />
            </section>
          )}
        </main>
      </div>
    </div>
  )
}