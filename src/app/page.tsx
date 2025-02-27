import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers(); 
  const host = headersList.get('host') || '';
  const subdomain = host.split('.')[0] || "Main Page"; 

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>Subdomain: {subdomain}</div>
    </div>
  );
}
