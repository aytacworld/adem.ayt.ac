import Link from 'next/link';

export default function PostList({ posts }) {
  if (posts === 'undefined') return null;

  const postsPerYear = posts.reduce((l, c) => {
    const year = c.frontmatter.publishdate.split('-')[0];
    if (!l[year]) l[year] = [];

    l[year].push(c);

    return l;
  }, {});

  const years = Object.keys(postsPerYear).reverse();

  return (
    <div>
      {!years.length && <div>No Posts!</div>}
      <ul>
        { years.length &&
          years.map((year) => {
            return (
              <li key={year}>
                <h3>{year}</h3>
                <ul>
                {postsPerYear[year].map((post) => {
                    console.log(post);
                  return (
                    <li key={post.slug}>
                      {post.frontmatter.publishdate.split(' ')[0]} -&nbsp; 
                      <Link href={{ pathname: `/p/${post.slug}` }}>
                        {post.frontmatter.title} -&nbsp; 
                        <small><i>{post.frontmatter.tags[0]}</i></small>
                      </Link>
                    </li>
                  );
                })}
                </ul>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
