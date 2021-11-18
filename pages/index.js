import React from 'react'
import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import { Element } from 'react-scroll'

import Layout from '../components/Layout'
import Landing from '../pages/landing'
import About from '../pages/about'
import Winners from '../pages/winners'
import Volunteer from '../pages/volunteer'
import Sponsors from '../pages/sponsors'
import Faq from '../pages/faq'
import Team from './team'

export default function Home() {
  return (
    <>
      <Head>
        <title>BioHack 2022</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Element name='Home' className='flex justify-center w-full'>
          <Landing/>
        </Element>
        <Element name='About' className='flex justify-center w-full'>
          <About/>
        </Element>
        <Element name='Winners' className='flex justify-center w-full'>
          <Winners/>
        </Element>
        <Element name='Volunteer' className='flex justify-center w-full'>
          <Volunteer/>
        </Element>
        <Element name='Sponsors' className='flex justify-center w-full'>
          <Sponsors/>
        </Element>
        <Element name='Faq' className='flex justify-center w-full'>
          <Faq/>
        </Element>
        <Element name='Team' className='flex justify-center w-full'>
          <Team/>
        </Element>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  await connectToDatabase()
  return { props: {} }
}
