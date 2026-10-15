import Skill from '@components/Skill';

const langs = [
  [0, 'Türkçe', 'expert', 'tr'],
  [1, 'Nederlands', 'expert', 'nl'],
  [2, 'English', 'senior', 'gb'],
  [3, 'Français', 'medior', 'fr'],
  [4, '日本語', 'start', 'jp'],
];

const Languages = () => {
  return (
    <>
      <h3>Languages</h3>
      {langs.map((s) => (
        <Skill key={s[0]} lang={s[3]} level={s[2]}>
          {s[1]}
        </Skill>
      ))}
    </>
  );
};

export default Languages;
