'use client'

import React from 'react'

interface PropsType {
  children?: React.ReactNode
}

const Main = ({ children }: PropsType) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-6xl mx-auto px-4 py-12">{children}</main>
    </div>
  )
}

export default Main
