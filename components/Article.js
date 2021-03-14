import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function Article({ frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <>
      <article>
        <h2 className="mt-0">{frontmatter.title}</h2>
        <ReactMarkdown source={markdownBody} />
        <div className="flex justify-between">
          <div>
            {frontmatter.previous && <Link href={`/p/${frontmatter.previous.slug}`}>
              <a className="text-left text-sm">&lt;&lt; {frontmatter.previous.title}</a>
            </Link>}
          </div>
          <div>
            {frontmatter.next && <Link href={`/p/${frontmatter.next.slug}`}>
              <a className="text-right text-sm">{frontmatter.next.title} &gt;&gt;</a>
            </Link>}
          </div>
        </div>
        <div className="text-xs">date: {frontmatter.publishdate}</div>
        <div className="text-xs">tags: {frontmatter.tags.join(', ')}</div>
      </article>
    </>
  );
}
