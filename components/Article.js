import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const NavigationLink = ({ item, directionClass }) => {
  const isRight = directionClass === 'right';
  return (
    <div className="w-1/2">
      {item &&
        <Link href={`/p/${item.slug}`}>
          <a className={`flex items-center ${isRight && 'justify-end'} text-${directionClass} text-sm`}>
            {!isRight && <i className="mdi mdi-arrow-left" />}
            <span className="truncate" title={item.title}>{item.title}</span>
            {isRight && <i className="mdi mdi-arrow-right" />}
          </a>
        </Link>
      }
    </div>
  );
}

export default function Article({ frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <article>
      <h2 className="mt-0">{frontmatter.title}</h2>
      <ReactMarkdown source={markdownBody} />
      <div className="flex justify-between my-4">
        <NavigationLink item={frontmatter.previous} directionClass="left" />
        <NavigationLink item={frontmatter.next} directionClass="right" />
      </div>
      <div className="text-xs">date: {frontmatter.publishdate}</div>
      <div className="text-xs">tags: {frontmatter.tags.join(', ')}</div>
    </article>
  );
}
