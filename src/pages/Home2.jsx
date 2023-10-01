import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

export default function Home2() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    avatar: "",
    first_name: "",
    last_name: "",
    email: "",
  });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const userForm = useForm({
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  });

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticated(loggedInUser);

      const fetchUsers = async () => {
        try {
          const resp = await fetch("https://reqres.in/api/users");
          const resp_user = await resp.json();
          setUsers(resp_user.data);
        } catch {
          setIsError(true);
          console.log("error while fetching data");
        }
        setIsLoading(false);
      };
      fetchUsers();
    } else {
      navigate("/login");
    }
  }, []);

  const handleEditClick = (event) => {
    let user_id = event.target.value;
    //console.log(user_id);
    let user = users.find((u) => u.id == user_id);
    //console.log(user);
    setSelectedUser(user);
  };

  const handleDelete = (event) => {
    let user_id = event.target.value;
    console.log(user_id);
    let updateUserList = users.filter((u) => u.id != user_id);
    setUsers(updateUserList);
  }

  const onUserFormSubmit = (data) => {
    console.log(data);
    data.id = Date.now();
    let newUser = [...users, data];
    setUsers(newUser);
    setSelectedUser({
      id: "",
      avatar: "",
      first_name: "",
      last_name: "",
      email: "",
    });
  };

  if (isLoading) {
    return <h3>Loading data... please wait...</h3>;
  }
  if (isError) {
    return <h3>An error has occurred while fetching data</h3>;
  }

  return (
    <>
      <div className="left-div">
        <h3>Users List</h3>
        <UserList users={users} handleEditClick={handleEditClick} handleDelete={handleDelete}/>
      </div>
      <div className="right-div">
        <h3>User Details</h3>
        <UserDetails
          selectedUser={selectedUser}
          userForm={userForm}
          onUserFormSubmit={onUserFormSubmit}
        />
      </div>
    </>
  );
}
