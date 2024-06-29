const TodoForm = ({ content, onChange, onAddList }) => {
  return (
    <form className="flex" onSubmit={onAddList}>
      <input
        type="text"
        value={content}
        name="content"
        className="w-[380px] px-4"
        placeholder="Enter content here"
        required
        onChange={onChange}
      />
      <button className="bg-blue-600 px-4 py-4" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
