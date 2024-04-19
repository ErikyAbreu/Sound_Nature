import { ListVideos } from '@/components/ListVideos'
import { VideoProvider } from '@/context/VideoContext'
import { AudioLines } from 'lucide-react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <VideoProvider>
          <main className="flex flex-col">
            <header className="flex items-center gap-2 p-5 h-12 w-full border-b border-slate-600 font-bold text-lg text-green-700 text-center bg-white">
            <div className='text-black'>
                <h1>SOUND</h1>
              </div>
              <AudioLines />
              <div className='text-black'>
                <h1>NATURE</h1>
              </div>
              <div className="ml-auto">
                <img src="image/perfil00.png" className='h-9 w-9 rounded-full border-green-700 border-2 float-right'/>
              </div>
            </header>
            <div className="grid grid-cols-[1fr_300px] p-5 gap-5">
              {children}
              <aside>
                <ListVideos />
              </aside>
            </div>
          </main>
        </VideoProvider>
      </body>
    </html>
  )
}