import Layout from '@components/Layout';

const About = ({ siteTitle }) => {
  return (
    <Layout pageTitle={`About | ${siteTitle}`}>
      <div className="flex justify-center">
        <img className="bg-white border rounded-br-3xl m-0 p-1" src="https://www.gravatar.com/avatar/612bd0f465a2c75af0f660f933f57eca?s=100" />
      </div>
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