import { FaStar } from 'react-icons/fa';
import Tags from './Tags';
const Task = ({ title, description, priority, isFavourite, tags }) => {
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <FaStar color={isFavourite ? 'yellow' : 'gray'} />
      </td>
      <td>{title}</td>
      <td>
        <div>{description}</div>
      </td>
      <td>
        <Tags tags={tags} />
      </td>
      <td className="text-center">{priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button className="text-blue-500">Edit</button>
          <button className="text-red-500">Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default Task;
