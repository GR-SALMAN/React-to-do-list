export const Submit = ({
  handleSubmit,
  handleTitleChange,
  editMode,
  title,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="input">
        <input
          className="inside"
          type="text"
          onChange={handleTitleChange}
          value={title}
          placeholder="Enter the task"
        />
        <button type="submit">{editMode ? "Upodate" : "Add Task"}</button>
      </form>
    </>
  );
};
