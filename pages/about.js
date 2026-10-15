import Layout from '@components/Layout';

const About = ({ siteTitle }) => {
  return (
    <Layout pageTitle={`About | ${siteTitle}`}>
      <div className="flex justify-center">
        {/* biome-ignore lint/performance/noImgElement: Gravatar avatar is loaded directly */}
        <img
          className="bg-white border rounded-br-3xl m-0 p-1"
          src={`https://www.gravatar.com/avatar/612bd0f465a2c75af0f660f933f57eca?s=100`}
          alt="Avatar"
        />
      </div>

      <h2>About</h2>

      <p>Hello, world! I'm Adem, and this is my personal blog.</p>

      <p>
        Here I share my projects, things I learn, personal opinions, and
        occasional experiments. Topics range from software development and
        Linux to automation, self-hosting, and whatever else catches my
        interest.
      </p>

      <p>
        I write in multiple languages, so you'll find posts in English,
        Turkish, Dutch, and French. The language depends on the topic and what
        I feel like writing at the time.
      </p>

      <p>
        Have a suggestion, a question, or just want to say hello? You can find
        me on the social platforms linked at the bottom of this page.
      </p>
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
