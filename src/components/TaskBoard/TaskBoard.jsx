import { useState } from 'react';
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
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <SearchBox />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />

          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
