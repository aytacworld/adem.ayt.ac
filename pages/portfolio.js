import Layout from '@components/Layout';

const Portfolio = ({ siteTitle }) => {
  return (
    <Layout pageTitle={`Portfolio | ${siteTitle}`}>
      Portfolio page
    </Layout>
  );
};

export default Portfolio;

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');

  return {
    props: {
      siteTitle: configData.default.title,
    },
  };
}