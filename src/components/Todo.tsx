import { useState } from 'react';

type Task = {
    id: number;
    text: string;
};

const Todo = () => {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);
    const [editId, setEditId] = useState<number | null>(null);

    const handleAddEditTask = () => {
        if (!input.trim()) return;

        if (editId !== null) {
            setTasks((prev) =>
                prev.map((task) => (task.id === editId ? { ...task, text: input } : task))
            );
        } else {
            const newTask: Task = {
                id: Date.now(),
                text: input,
            };
            setTasks((prev) => [...prev, newTask]);
        }

        setInput('');
        setEditId(null);
    };

    const handleEdit = (id: number) => {
        const taskToEdit = tasks.find((task) => task.id === id);
        if (taskToEdit) {
            setInput(taskToEdit.text);
            setEditId(id);
        }
    };

    const handleDelete = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
        if (editId === id) {
            setEditId(null);
            setInput('');
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '40px',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#f9f9f9',
                minHeight: '100vh',
            }}
        >
            <div
                style={{
                    backgroundColor: '#ffffff',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                    maxWidth: '500px',
                }}
            >
                <h2 style={{ textAlign: 'center', color: '#333' }}>📝 Todo List</h2>
                <label htmlFor="task" style={{ marginBottom: '8px', display: 'block', color: '#555' }}>
                    Enter your Task:
                </label>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <input
                        id="task"
                        type="text"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        style={{
                            flex: 1,
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            outline: 'none',
                        }}
                    />
                    <button
                        onClick={handleAddEditTask}
                        style={{
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            padding: '10px 16px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            transition: '0.3s ease',
                        }}
                    >
                        {editId !== null ? 'Update' : 'Add'}
                    </button>
                </div>

                <div>
                    {tasks.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                background: '#f1f1f1',
                                padding: '12px',
                                margin: '10px 0',
                                borderRadius: '8px',
                                transition: '0.3s ease',
                            }}
                        >
                            <span style={{ flex: 1, fontSize: '16px', color: '#333' }}>{item.text}</span>
                            <button
                                style={{
                                    backgroundColor: '#2196F3',
                                    color: 'white',
                                    border: 'none',
                                    padding: '6px 12px',
                                    marginRight: '8px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleEdit(item.id)}
                            >
                                ✏️ Edit
                            </button>
                            <button
                                style={{
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    border: 'none',
                                    padding: '6px 12px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleDelete(item.id)}
                            >
                                🗑️ Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Todo;
