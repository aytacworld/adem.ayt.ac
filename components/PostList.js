import Link from 'next/link';

export default function PostList({ posts }) {
  if (posts === 'undefined') return null;

  return (
    <div>
      {!posts && <div>No Posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href={{ pathname: `/p/${post.slug}` }}>
                  <a>{post.frontmatter.publishdate.split(' ')[0]} - {post.frontmatter.title}</a>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  );
}
