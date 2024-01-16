import { useState } from 'react';
import AddTaskModal from './AddTaskModal';
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

  const onEditTaskHandler = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const closeModal = () => {
    setTaskToUpdate(null);
    setShowModal(false);
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
        <SearchBox />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onShowModal={() => setShowModal(true)} />

          <TaskList tasks={tasks} onEditTask={onEditTaskHandler} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
