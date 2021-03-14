import getPosts from '@utils/get-all-posts';

import Layout from '@components/Layout';
import Article from '@components/Article';

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Article frontmatter={frontmatter} markdownBody={markdownBody} />
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const config = await import('../../siteconfig.json');

  const posts = getPosts();
  const post = posts.find(p => p.slug === postname);

  return {
    props: {
      siteTitle: config.default.title,
      ...post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getPosts();

  const paths = posts.map((slug) => `/p/${slug.slug}`);

  return {
    paths,
    fallback: false,
  };
}