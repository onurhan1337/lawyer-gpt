### What is Lawyer-GPT?

Lawyer-GPT is an AI-powered legal assistant designed to upload legal documents and discuss them in a Q&A format based on the document content. Leveraging the capabilities of GPT-3, Lawyer-GPT aims to streamline legal processes and increase efficiency in legal practices.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **File Storage**: [Supabase](https://supabase.com/)
- **Authentication**: [Supabase](https://supabase.com/)
- **Database & Vector Database**: [Supabase](https://supabase.com/)
- **Chat Model**: [OpenAI - GPT-3.5 Turbo](https://platform.openai.com/docs/models)
- **General Text Embeddings model**: [Dnd Kit](https://huggingface.co/Supabase/gte-small)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Transformers**: [@xenova/transformers](https://www.npmjs.com/package/@xenova/transformers)
- **Data fetching**: [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview)

## Overview

- `app/` - Contains all the page and layout files. Each file corresponds to a route based on its name.
- `components/` - Contains all project components with reusable React components.
- `public/` - Contains static files like images, which can be accessed directly via URL.
- `styles/` - Contains global styles. The application primarily uses Tailwind CSS for styling.
- `lib/` - Contains utility functions, custom hooks, xenova workers, providers and libraries that are used across the project.
- `utils/` - Contains supabase client, middleware and server createClient functions.
- `supabase/` - The most important folder. Contains config for docker, all functions and migration, seed sql file.

## Demo

[https://lawyer-gpt-one.vercel.app](https://lawyer-gpt-one.vercel.app)

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone https://github.com/onurhan1337/lawyer-gpt.git
cd zen
pnpm install
pnpm run dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/onurhan1337/lawyer-gpt/blob/master/.env.example). You need to fill them out for the site to work.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
