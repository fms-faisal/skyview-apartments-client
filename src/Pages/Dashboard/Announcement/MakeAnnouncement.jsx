import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const MakeAnnouncement = () => {
    const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const announcement = {
        title: data.title,
        description: data.description
    }

    const announcementRes = await axiosSecure.post('/announcement', announcement);
    console.log(announcementRes.data)

    if (announcementRes.data.insertedId){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Announcement posted successfully",
            showConfirmButton: false,
            timer: 1500
          });
    }


  };
  return (
    <div className="flex justify-center items-center mt-16 text-center h-full">
        <div className="flex flex-col justify-center items-center p-4 bg-gray-50 rounded-lg ">
      <h1 className="text-center p-10 font-bold text-3xl">Make an Announcement</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Enter the title</span>
          </div>
          <input type="text" {...register("title")} placeholder="Enter title here" className="input input-bordered w-full " />
        </label>

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Enter the Description</span>
          </div>

          <textarea placeholder="Type description here"  {...register("description")} className="textarea textarea-bordered textarea-lg w-full my-4" ></textarea>
        </label>

        <input type="submit" className="btn bg-gray-600 text-white mx-auto"/>
      </form>
    </div>
    </div>
  );
};

export default MakeAnnouncement;
