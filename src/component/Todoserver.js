import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo, addTodo, deleteTodo, doneTodo, editTodo } from '../Redux/Reducer/TodoserverSlice';

function Todoserver() {
  const [task, setTask] = useState('');
  const [editText, setEdittext] = useState('');
  const [editId, setEditId] = useState(null);
  const todo = useSelector((state) => state.todoServer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
    console.log('Fetching Todos');
  }, [dispatch]);

  const handleAdd = (task) => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDone = (id) => {
    dispatch(doneTodo(id));
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEdittext(text);
  };

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: editId, text: editText }));
      setEditId(null);
      setEdittext('');
    }
  };

  return (
    <div className='flex justify-center rounded-lg mt-10 shodow-md w-auto h-auto'>
      <div className="flex flex-row justify-between space-x-4 w-full max-w-6xl">
        <div className="w-1/2 my-10 p-5 bg-cream-100 shadow-md rounded-lg border border-gold-300">
          <h1 className="text-3xl font-bold text-center text-navy-800 mb-6">TODO LIST</h1>

          <div className="flex mb-4">
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-lg"
              placeholder="Enter a task"
            />
            <button
              onClick={() => handleAdd(task)}
              className="ml-2 px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition"
            >
              ADD
            </button>
          </div>

          <div className="space-y-4">
            {todo?.filter((item) => !item.completed).map((item) => (
              <div key={item.id} className="flex justify-between items-center p-3 bg-cream-200 rounded-lg shadow-sm">
                {editId === item.id ? (
                  <>
                    <input
                      value={editText}
                      onChange={(e) => setEdittext(e.target.value)}
                      type="text"
                      className="flex-grow p-2 border border-gray-300 rounded-lg"
                    />
                    <button
                      onClick={handleSave}
                      className="ml-2 px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition"
                    >
                      SAVE
                    </button>
                  </>
                ) : (
                  <>
                    <span className="flex-grow text-navy-800">{item.text}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(item.id, item.text)}
                        className="px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition"
                      >
                        EDIT
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      >
                        DELETE
                      </button>
                      <button
                        onClick={() => handleDone(item.id)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                      >
                        MARK AS DONE
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 my-10 p-5 bg-cream-100 shadow-md rounded-lg border border-gold-300">
          <h2 className="text-3xl font-bold mt-6 text-center my-5 text-navy-800">COMPLETED</h2>
          <div className="space-y-4">
            {todo?.filter((item) => item.completed).map((item) => (
              <div key={item.id} className="flex justify-between items-center p-3 bg-cream-200 rounded-lg shadow-sm">
                <span className="flex-grow text-gray-500 line-through">{item.text}</span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  DELETE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todoserver;

