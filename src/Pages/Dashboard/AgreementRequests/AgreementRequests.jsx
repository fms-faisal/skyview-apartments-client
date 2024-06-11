import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const AgreementRequests = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { data: users = [], refetch } = useQuery({
    queryKey: "reservation",
    queryFn: async () => {
      const res = await axiosSecure.get("/reservation/agreement");
      console.log(res.data);
      return res.data;

    },
  });

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
         .delete(`/reservation/${user._id}`)
         .then((response) => {
            console.log(response);
            Swal.fire({
              title: "Deleted!",
              text: "Your reservation has been deleted.",
              icon: "success",
            });
          })
         .catch((error) => {
            console.error(error);
            Swal.fire({
              title: "Error",
              text: "Failed to delete reservation.",
              icon: "error",
            });
          });
      }
    });
  };

  const handleMakeMember = (user) => {
    axiosSecure
     .patch(`/users/member/${user.email}`)
     .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is now a member`,
            showConfirmButton: false,
            timer: 3000,
          });
        } else {
          console.error("Failed to update user role.");
          Swal.fire({
            title: "Error",
            text: "Failed to update user role.",
            icon: "error",
          });
        }
      })
     .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error",
          text: "Failed to update user role.",
          icon: "error",
        });
      });

    axiosSecure
     .patch(`/reservation/status/${user.email}`)
     .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          queryClient.setQueryData("reservation", (prevUsers) =>
            prevUsers.map((u) => (u.email === user.email? {...u, status: "checked" } : u))
          );
          refetch();
          setTimeout(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name}'s apartment is now checked`,
              showConfirmButton: false,
              timer: 1500,
            });
          }, 2000); // add a delay of 2000ms
        } else {
          console.error("Failed to update status.");
          Swal.fire({
            title: "Error",
            text: res.data.message,
            icon: "error",
          });
        }
      })
     .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error",
          text: "Failed to update status.",
          icon: "error",
        });
      });
  };

  return (
    <div>
      <div className="flex justify-evenly my-4 mt-10">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users : {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Floor No</th>
              <th>Block Name</th>
              <th>Room No</th>
              <th>Rent</th>
              <th>Request date</th>
              <th>Accept as Member</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>

            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.floor_no}</td>
                <td>{user.block_name}</td>
                <td>{user.apartment_no}</td>
                <td>{user.rent}</td>
                <td>{user.requested_date ? new Date(user.requested_date).toLocaleDateString() : "N/A"}</td>
                <td>
                  {user.role === "member" ? (
                    "Member"
                  ) : (
                    <button onClick={() => handleMakeMember(user)}>
                      <FaUsers className="text-green-400 mr-4" />
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDeleteUser(user)}>
                    <FaTrashAlt className="text-red-400 mr-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgreementRequests;
