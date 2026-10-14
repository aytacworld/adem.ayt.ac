import 'flag-icons/css/flag-icons.min.css';

const levels = {
  start: { c: 'w-1/5 bg-yellow-300', d: 'started - still learning' },
  junior: { c: 'w-2/5 bg-orange-400', d: 'junior - can work with it at a basic level' },
  medior: { c: 'w-3/5 bg-fuchsia-400', d: 'medior - can work independently' },
  senior: { c: 'w-4/5 bg-green-400', d: 'senior - strong experience; can handle complex work' },
  expert: { c: 'w-full bg-cyan-400', d: 'expert - deep expertise; can guide others' },
};

export default function Skill({ children, level = 'start', i, lang, mdi }) {
  const icon = lang ? `fi fi-${lang}` : mdi ? `mdi mdi-${mdi}` : i ? `si si-${i}` : '';
  const lvl = levels[level] || levels.start;

  return (
    <span className="flex justify-between items-center text-sm" title={lvl.d}>
      <span>
        <i className={`inline-block w-[16px]! ${icon}`} />
        <span> {children}</span>
      </span>
      <span className="relative w-[40%] border border-gray-300 h-[5px] rounded-lg">
        <span className={`absolute animate-pulse inset-y-0 left-0 ${lvl.c}`}></span>
      </span>
    </span>
  );
}
