"use client"

import styles from './page.module.css'

import Link from 'next/link'

import { useState } from 'react'


export default function Home() {
  const [track,setTrack]=useState();
  const isTrue = (track != undefined )

  return (
    
    <main className={styles.main}>
       <a href="/track">اطلب الخدمة الان</a>
      <div><img src="" alt="navbar" />
      <img src="" alt="blog" />
      <img src="" alt="bot" />
      <img src="" alt="tar" />

      <img src="" alt="spot" />
      <img src="" alt="footer" />
      <img src="" alt="navbar" />
      <img src="" alt="blog" />
      <img src="" alt="bot" />
      <img src="" alt="tar" />

      <img src="" alt="spot" />
      <img src="" alt="footer" />
      <img src="" alt="blog" />
      <img src="" alt="bot" />
      <img src="" alt="tar" />

      <img src="" alt="spot" />
      <img src="" alt="footer" />
      <img src="" alt="navbar" />
      <img src="" alt="blog" />
      <img src="" alt="bot" />
      <img src="" alt="tar" />

      <img src="" alt="spot" />
      <img src="" alt="footer" />
      </div>
      
    </main>
  )
  
}


