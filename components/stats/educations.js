const list = [
  { school: 'CTG Europe', title: 'Mobile/Web Master Class', year: 2015 },
  { school: 'Odisee (HUB-EHSAL)', title: 'Applied Science BASc', year: 2012 },
  { school: 'KA Emanuel Hiel', title: 'Applied Informatics', year: 2009 },
];

const Educations = () => {
  return (
    <>
      <h3>Education</h3>
      {list.map((i) => (
        <div key={i.title} className="text-sm mb-[.5rem]">
          <div className="flex justify-between">
            <b>{i.school}</b>
            <span>{i.year}</span>
          </div>
          <span>{i.title}</span>
        </div>
      ))}
    </>
  );
};

export default Educations;
