# Music Feedback AI

Music Feedback AI is an innovative application that leverages artificial intelligence to generate personalized feedback for music artists based on user-provided likes and dislikes.

## Features

- User-friendly interface for inputting likes and dislikes about music
- AI-powered feedback generation using OpenAI's GPT-3.5 model
- Real-time streaming of AI-generated feedback
- Responsive design for various screen sizes

## Technologies Used

- Next.js 13 with App Router
- TypeScript
- Tailwind CSS
- OpenAI API
- 
## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- An OpenAI API key

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/music-feedback-ai.git
   cd music-feedback-ai
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the project root and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Enter aspects of music you like and dislike using the provided input fields

4. Click the "Generate Feedback" button to receive AI-generated feedback based on your inputs
