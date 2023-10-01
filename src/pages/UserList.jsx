export default function UserList({ users, handleEditClick, handleDelete }) {
  const UserTr = (user) => {
    return (
      <tr key={user.id}>
        <td>{user.sr_no + 1}</td>
        <td>
          <img src={user.avatar} width={50} alt={user.first_name} />
        </td>
        <td>
          {user.first_name} {user.last_name}
        </td>
        <td>{user.email}</td>
        <td>
          <button
            className="btn-secondary"
            value={user.id}
            onClick={handleEditClick}
          >
            Edit
          </button>
          <button
            className="btn-danger"
            value={user.id}
            onClick={handleDelete}
            style={{ marginLeft: "5px" }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  const UserTable = ({ users }) => {
    return (
      <table className="styled-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return <UserTr {...user} sr_no={index} key={user.id} />;
          })}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <UserTable users={users} key="userList" />
    </>
  );
}
