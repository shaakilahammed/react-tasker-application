import { useState } from 'react';
import AddTaskModal from './AddTaskModal';
import NoTaskFound from './NoTaskFound';
import SearchBox from './SearchBox';
import TaskActions from './TaskActions';
import TaskList from './TaskList';

const data = [
  {
    id: crypto.randomUUID(),
    title: 'Learn React',
    description:
      'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.',
    tags: ['web', 'javascript', 'react'],
    priority: 'High',
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    title: 'API Data Synchronization with Python',
    description:
      'Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange. ',
    tags: ['Python', 'API', 'Data Synchronization'],
    priority: 'Low',
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'Efficient Web API Connectivity in Python',
    description:
      'Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange. ',
    tags: ['Web', 'Python', 'API'],
    priority: 'Medium',
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    title: 'Data Handling',
    description:
      'Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity.',
    tags: ['Web', 'Python', 'Security'],
    priority: 'Low',
    isFavourite: false,
  },
];

const TaskBoard = () => {
  const [tasks, setTasks] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const handleAddUpdateTask = (newTask) => {
    if (taskToUpdate) {
      const nextTasks = tasks.map((task) => {
        if (task.id === newTask.id) {
          return newTask;
        } else {
          return task;
        }
      });
      setTasks(nextTasks);
    } else {
      setTasks([...tasks, newTask]);
    }
    setTaskToUpdate(null);
    setShowModal(false);
  };

  const editTaskHandler = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const favouriteClickHandler = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId)
        return { ...task, isFavourite: !task.isFavourite };
      else return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTaskHandler = (taskId) => {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelete);
  };

  const deleteAllClickHandler = () => {
    setTasks([]);
  };

  const closeModal = () => {
    setTaskToUpdate(null);
    setShowModal(false);
  };

  const searchHandler = (query) => {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );

    setTasks(filteredTasks);
  };

  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <AddTaskModal
          onSave={handleAddUpdateTask}
          taskToUpdate={taskToUpdate}
          onCloseModal={closeModal}
        />
      )}
      <div className="container">
        <SearchBox onSearch={searchHandler} />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onShowModal={() => setShowModal(true)}
            onDeleteAllClick={deleteAllClickHandler}
          />

          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEditTask={editTaskHandler}
              onDeleteTask={deleteTaskHandler}
              onFavouriteClick={favouriteClickHandler}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
