import getPosts from '@utils/get-all-posts';

import Layout from '@components/Layout';
import Article from '@components/Article';

const Index = ({ siteTitle, frontmatter, markdownBody }) => {
  return (
    <Layout pageTitle={siteTitle}>
      <Article frontmatter={frontmatter} markdownBody={markdownBody} />
    </Layout>
  )
};

export default Index;

export async function getStaticProps() {
  const config = await import('../siteconfig.json');

  const posts = getPosts();
  const post = posts[0];

  return {
    props: {
      siteTitle: config.default.title,
      ...post,
    },
  };
}