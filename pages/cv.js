import Layout from '@components/Layout';
import Educations from '@components/stats/educations';
import Experiences from '@components/stats/experiences';
import Languages from '@components/stats/languages';
import Skills from '@components/stats/skills';

const Stats = ({ siteTitle }) => {
  return (
    <Layout pageTitle={`CV | ${siteTitle}`}>
      <div className="md:grid md:grid-cols-4 md:gap-3">
        <div>
          <Languages />
          <Skills />
          <a href="/files/2026-10-15_cv_adem_aytac_v1.pdf" download>
            Download CV (PDF)
          </a>
        </div>
        <div className="md:col-span-3">
          <Experiences />
          <Educations />
        </div>
      </div>
    </Layout>
  );
};

export default Stats;

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');

  return {
    props: {
      siteTitle: configData.default.title,
    },
  };
}
