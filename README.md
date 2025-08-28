# DiveFive Webapp

Nuxt 3 + Tailwind project with Supabase authentication.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with your Supabase credentials:
   ```bash
   NUXT_PUBLIC_SUPABASE_URL=your-project-url
   NUXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
3. In your Supabase project run the SQL in `supabase/profiles.sql` to create the `profiles` table.

## Development

Start the development server:
```bash
npm run dev
```

## Production

Build for production:
```bash
npm run build
```
