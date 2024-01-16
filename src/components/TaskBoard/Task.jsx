import { FaEdit, FaStar } from 'react-icons/fa';
import { IoTrashBin } from 'react-icons/io5';
import Tags from './Tags';
const Task = ({
  id,
  title,
  description,
  priority,
  isFavourite,
  tags,
  onEditTask,
  onDeleteTask,
  onFavouriteClick,
}) => {
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <button onClick={() => onFavouriteClick(id)}>
          <FaStar color={isFavourite ? 'yellow' : 'gray'} />
        </button>
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
        <div className="flex items-center justify-evenly space-x-3">
          <button
            className="text-blue-500 text-xl"
            onClick={() =>
              onEditTask({
                id,
                title,
                description,
                priority,
                isFavourite,
                tags,
              })
            }
          >
            <FaEdit />
          </button>
          <button
            className="text-red-500 text-xl"
            onClick={() => onDeleteTask(id)}
          >
            <IoTrashBin />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Task;
