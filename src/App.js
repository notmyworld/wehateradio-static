import React from 'react'
import { Root, Routes, addPrefetchExcludes, Head } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

// UI
import Header from 'components/Header'

import './app.scss'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Head>
        <meta charset="utf-8"/>
        <meta name="csrf-param" content="authenticity_token"/>
        <meta name="csrf-token" content="EtkrIjvk+eY8M0dCpBNObhBCZk96qufzChE/lZm5ARwJ6hpvbUPvmS4etNM62FYiCEDE0v/8xyXK4QQYLy7IDg=="/>
        <meta name="title" content="We Hater Radio"/>

        {/* Title */}
        <title>WE HATE RADIO</title>

        {/* Control the behavior of search engine crawling and indexing */}
        <meta name="robots" content="index,follow" />{/* All Search Engines */}
        <meta name="googlebot" content="index,follow" />{/* Google Specific */}

        {/* Twitter crap */}
        <meta name="twitter:title" content="We Hater Radio"/>
        <meta name="twitter:description" content="We Hater Radio"/>
        <meta name="description" content="We Hate Radio is an Amsterdam based independent and DIY music platform. Supporting and promoting bands, local shows, and the Amsterdam underground alternative music scene."/>

        {/* OG meta */}
        <meta property="og:title" content="We Hate Radio"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="/images/logo@2x.png"/>
        <meta property="og:image:alt" content="We hate radio logo"/>
        <meta property="og:site_name" content="We Hate Radio"/>
        <meta property="og:description" content="We Hate Radio is an Amsterdam based independent and DIY music platform. Supporting and promoting bands, local shows, and the Amsterdam underground alternative music scene."/>
        <meta property="og:url" content="http://wehateradio.net"/>

        <meta name="url" content="http://wehateradio.net"/>

        <meta name="twitter:card" content="summary"/>
        <link href="https://fonts.googleapis.com/css?family=PT+Mono&display=swap" rel="stylesheet"/>

        {/* <meta property="fb:app_id" content="123456789"> */}


      </Head>
      <Header/>
      <div className="content pt3 px2">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
