import Layout from '@components/Layout';

const About = ({ siteTitle }) => {
  return (
    <Layout pageTitle={`About | ${siteTitle}`}>
      <h2>About</h2>
      <p>Hello, I'm Adem and this is my personal blog, where you can find my unfinished adventures, which I try to finish during my life.</p>
    </Layout>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');

  return {
    props: {
      siteTitle: configData.default.title,
    },
  };
}