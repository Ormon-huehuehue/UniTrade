import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  SignIn
} from '@clerk/nextjs'
import { EdgeStoreProvider } from '@/lib/edgestore'

import './globals.css'
import { RecoilRoot } from 'recoil'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider>
     
        <html lang="en">
          <body className = "inter.classname">
          <EdgeStoreProvider>
            <SignedIn>
              {children}
            </SignedIn>
            <SignedOut>
              {children}
            </SignedOut>
          </EdgeStoreProvider>
          </body>
        </html>
       
      </ClerkProvider>
 
  )
}