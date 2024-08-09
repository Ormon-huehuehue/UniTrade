import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  SignIn
} from '@clerk/nextjs'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider>
        <html lang="en">
          <body className = "inter.classname">
            <SignedIn>
              {children}
            </SignedIn>
            <SignedOut>
              {children}
            </SignedOut>
          </body>
        </html>
      </ClerkProvider>
 
  )
}