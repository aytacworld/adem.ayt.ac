import Skill from '@components/Skill';
import { Fragment } from 'react';

const list = [
  {
    name: 'Frontend development',
    skills: [
      [0, 'Angular', 'expert', 'angular'],
      [1, 'TypeScript', 'expert', 'typescript'],
      [2, 'HTML', 'expert', 'html5'],
      [3, 'CSS', 'expert', 'css'],
      [4, 'JavaScript', 'expert', 'javascript'],
      [5, 'React', 'start', 'react'],
    ],
  },
  {
    name: 'Backend development',
    skills: [
      [6, 'SQL', 'expert', undefined, 'database'],
      [7, 'Node.js', 'senior', 'nodedotjs'],
      [8, '.NET', 'medior', 'dotnet'],
      [9, 'Java', 'medior', undefined, 'language-java'],
      [10, 'Go', 'start', 'go'],
      [11, 'Rust', 'start', 'rust'],
    ],
  },
  {
    name: 'DevOps & Cloud',
    skills: [
      [12, 'Docker', 'medior', 'docker'],
      [13, 'Azure', 'junior', undefined, 'microsoft-azure-devops'],
      [14, 'AWS', 'junior', undefined, 'aws'],
    ],
  },
  {
    name: 'Tools & methodologies',
    skills: [
      [15, 'Git', 'expert', 'git'],
      [16, 'Agile', 'expert', undefined, 'bulletin-board'],
      [17, 'Jira', 'senior', 'jira'],
      [18, 'VS Code', 'senior', undefined, 'microsoft-visual-studio-code'],
      [19, 'Neovim', 'medior', 'neovim'],
    ],
  },
  {
    name: 'Systems & infrastructure',
    skills: [
      [20, 'Linux', 'expert', 'linux'],
      [21, 'Windows', 'expert', undefined, 'microsoft-windows'],
      [22, 'Nginx', 'medior', 'nginx'],
      [23, 'Networking', 'medior', undefined, 'network'],
    ],
  },
];

const Skills = () => {
  return (
    <>
      <h3>Skills</h3>
      {list.map((cat) => (
        <Fragment key={cat.name}>
          <h4>{cat.name}</h4>
          {cat.skills.map((s) => (
            <Skill key={s[0]} mdi={s[4]} i={s[3] || s[1]} level={s[2]}>
              {s[1]}
            </Skill>
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default Skills;
