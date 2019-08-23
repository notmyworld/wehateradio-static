// import cn from 'classnames';
// import { DiscussionEmbed } from 'disqus-react';
import * as React from 'react';
// import { Container } from 'src/components/Container';
// import { Hero, IHero, IHeroBreadCrumb } from 'src/components/Hero';
// import { IHeroAuthor } from 'src/components/Hero/HeroAuthor';
// import { IRelatedPage, RelatedPages } from 'src/components/RelatedPages';
// import { Section } from 'src/components/Section';
import { convertMarkdownToHTML } from '../../utils/markdown/index.js';
// import { Layout } from '../../components/Layout';

 import { useRouteData } from 'react-static'

 export default function Post() {
   const { post } = useRouteData()
   return (
     <div>
       <br />
       <h3>{post.title}</h3>
       {console.log(post.slug)}
       {post.contents}
       {post.date}
     </div>
   )
 }
