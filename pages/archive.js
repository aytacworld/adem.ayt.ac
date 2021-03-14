import getPosts from '@utils/get-all-posts';

import Layout from '@components/Layout';
import PostList from '@components/PostList';

const Archive = ({ siteTitle, posts }) => {
  return (
    <Layout pageTitle={`Archive | ${siteTitle}`}>
      <h2>Archive</h2>
      <PostList posts={posts} />
    </Layout>
  );
};

export default Archive;

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');

  const posts = getPosts();

  return {
    props: {
      posts,
      siteTitle: configData.default.title,
    },
  };
}