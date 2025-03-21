interface TeacherLevelsProps {
  levels: string[];
}

const TeacherLevels: React.FC<TeacherLevelsProps> = ({ levels }) => (
  <ul className="flex flex-wrap gap-2">
    {levels.map((level, index) => (
      <li
        key={level}
        className={`py-2 px-3 rounded-[35px] text-sm font-medium  ${
          index === 0 ? "bg-yellow-400" : "bg-white border border-black/20"
        }`}
      >
        #{level}
      </li>
    ))}
  </ul>
);

export default TeacherLevels;
