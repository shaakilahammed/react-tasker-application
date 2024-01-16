const colors = [
  '00D991A1',
  '1C92FFB0',
  'FE1A1AB5',
  'BD560BB2',
  '00B2D9CC',
  '8407E6A8',
  '07AC67D6',
  '2F43F8BF',
  'AE6D0BDB',
  '10FBEDB2',
];
const Tag = ({ name, index }) => {
  return (
    <li>
      <span
        className={`inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#${
          colors[index % 10]
        }] px-2.5 text-sm capitalize text-[#F4F5F6]`}
      >
        {name}
      </span>
    </li>
  );
};

const Tags = ({ tags }) => {
  return (
    <ul className="flex justify-center gap-1.5 flex-wrap">
      {tags.map((tag, index) => (
        <Tag key={index} name={tag} index={index} />
      ))}
    </ul>
  );
};

export default Tags;
