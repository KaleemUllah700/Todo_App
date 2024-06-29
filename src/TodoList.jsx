const TodoList = ({ list, onDeleteList }) => {
  return (
    <div>
      {list.map((item, index) => (
        <ul
          className="bg-[white] border w-[440px] px-4 flex justify-between items-center py-4"
          key={index}
        >
          <span>{item}</span>
          <div className="flex gap-4">
            <button
              className="text-[20px] bg-[lightgrey] w-[30px] rounded-full"
              onClick={() => onDeleteList(index)}
            >
              <i className="fa fa-trash text-[red]"></i>
            </button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
