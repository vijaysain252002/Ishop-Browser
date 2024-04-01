import React from 'react'
import Header from '../component/Header'
import Bennear from '../component/Bennear'
import Secbannear from '../component/Secbannear'
import Support from '../component/Support'
import Featured from '../component/Featured'
import Feq from '../component/Feq'
import Footear from '../component/Footear'
import Middel from '../component/Middel'

function Home() {
  return (
    <div>
      <Header />
      <Middel />
      <Bennear />
      <Secbannear />
      <Support />
      <Featured />
      <Feq />
      <Footear />
    </div>
  )
}

export default Home
