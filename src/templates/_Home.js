import React from 'react'
import { withRouteData, Link } from 'react-static'
// import convert from 'htmr'


export default withRouteData(({ jdown, reactStatic, collections }) => (
  <div>
    <section className="container">
      <div className="">
        <div className="">
          <h2>
            Posts
          </h2>
        </div>
        <div className="py3">
          {collections.posts.map((item, index) => (
            <article key={index} className="mb3">
              <h4><Link to={`/blog/${item.slug}/`}>{item.title}</Link></h4>
              <p>{item.intro}</p>
              <div className="flex justify-between">
                <small>#{ item.category}</small>{' '}
                  <date>
                    <small>
                    {
                      new Date(item.date).toLocaleDateString('en-GB', {
                          weekday: 'short',
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                      })
                    }
                    </small>
                  </date>
                  <Link to={`/blog/${item.slug}/`}><small>Read on ></small></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
))

// {newPosts.map(newPost => (
//   <li key={post.slug}>
//     <Link to={`/blog/post/${post.slug}/`}>{post.title}</Link>
//   </li>
// ))}