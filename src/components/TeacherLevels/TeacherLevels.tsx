interface TeacherLevelsProps {
  levels: string[];
}

const TeacherLevels: React.FC<TeacherLevelsProps> = ({ levels }) => (
  <ul className="flex flex-wrap gap-2">
    {levels.map((level, index) => (
      <li
        key={level}
        className={`py-2 px-3 rounded-[35px] text-sm font-medium flex items-center  ${
          index === 0
            ? "bg-accent border border-accent dark:border-2 text-black"
            : "bg-transparent border border-black/20 dark:border-2"
        }`}
      >
        #{level}
      </li>
    ))}
  </ul>
);

export default TeacherLevels;
