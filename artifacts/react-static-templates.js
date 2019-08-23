

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/hoenoe/Documents/PROJECTS/2019/WEHATERADIO/website/wehateradio-static-cms/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../src/templates/404.js'), universalOptions)
      t_0.template = '../src/templates/404.js'
      
const t_1 = universal(import('../src/templates/about.js'), universalOptions)
      t_1.template = '../src/templates/about.js'
      
const t_2 = universal(import('../src/templates/Admin/config.js'), universalOptions)
      t_2.template = '../src/templates/Admin/config.js'
      
const t_3 = universal(import('../src/templates/Admin/index.js'), universalOptions)
      t_3.template = '../src/templates/Admin/index.js'
      
const t_4 = universal(import('../src/templates/BlogPost/config.js'), universalOptions)
      t_4.template = '../src/templates/BlogPost/config.js'
      
const t_5 = universal(import('../src/templates/BlogPost/index.js'), universalOptions)
      t_5.template = '../src/templates/BlogPost/index.js'
      
const t_6 = universal(import('../src/templates/Home/index.js'), universalOptions)
      t_6.template = '../src/templates/Home/index.js'
      
const t_7 = universal(import('../src/templates/Home/index'), universalOptions)
      t_7.template = '../src/templates/Home/index'
      
const t_8 = universal(import('../src/templates/Admin/index'), universalOptions)
      t_8.template = '../src/templates/Admin/index'
      
const t_9 = universal(import('../src/templates/BlogPost'), universalOptions)
      t_9.template = '../src/templates/BlogPost'
      

// Template Map
export default {
  '../src/templates/404.js': t_0,
'../src/templates/about.js': t_1,
'../src/templates/Admin/config.js': t_2,
'../src/templates/Admin/index.js': t_3,
'../src/templates/BlogPost/config.js': t_4,
'../src/templates/BlogPost/index.js': t_5,
'../src/templates/Home/index.js': t_6,
'../src/templates/Home/index': t_7,
'../src/templates/Admin/index': t_8,
'../src/templates/BlogPost': t_9
}
// Not Found Template
export const notFoundTemplate = "../src/templates/404.js"

