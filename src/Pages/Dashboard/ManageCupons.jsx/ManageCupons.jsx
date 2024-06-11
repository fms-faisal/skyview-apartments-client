import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ManageCupons = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const [cupon, setCupon] = useState({
    title: "",
    description: "",
    discountType: "",
    discountValue: 0,
    leaseSignDate: "",
    expirationDate: "",
  });

  const { data: cupons = [], refetch } = useQuery({
    queryKey: ["cupons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cupons");
      return res.data;
    },
  });
  const closeModal = () => {
    const modal = document.getElementById("my_modal_1");
    modal.close();
  };
  const onSubmit = async (data, close) => {
    try {
      const cuponInfo = {
        title: data.title,
        description: data.description,
        discountType: data.discountType,
        discountValue: parseInt(data.discountValue),
        leaseSignDate: data.leaseSignDate,
        expirationDate: data.expirationDate,
      };
  
      axiosSecure.post("/cupons", cuponInfo).then((res) => {
        if (res.data.insertedId) {
          closeModal() // Close the modal
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Cupon created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } catch (error) {
      console.error("Error during cupon post", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
  return (
    <>
      <div className="text-center text-md font-md py-10 border-b-2 border-gray-200 rounded-lg">
        <h2 className="mb-4">Cupon List</h2>
        <h2>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button className="btn" onClick={() => document.getElementById("my_modal_1").showModal()}>
            <FaPlus /> Add Cupon
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-md font-md text-gray-700 capitalize dark:text-white text-xl font-semibold">Add Cupon</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label className="text-gray-700 dark:text-gray-200" htmlFor="title">
                        Title
                      </label>
                      <input
                        id="Title"
                        {...register("title")}
                        type="text"
                        defaultValue={"cupon.title"}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 dark:text-gray-200" htmlFor="description">
                        Description
                      </label>
                      <input
                        id="description"
                        {...register("description")}
                        type="text"
                        defaultValue={cupon.description}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 dark:text-gray-200" htmlFor="discountType">
                        Discount Type
                      </label>
                      <input
                        id="discountType"
                        {...register("discountType")}
                        type="text"
                        defaultValue={cupon.discountType}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 dark:text-gray-200" htmlFor="discountValue">
                        Discount Value
                      </label>
                      <input
                        id="discountValue"
                        {...register("discountvalue")}
                        type="text"
                        defaultValue={cupon.discountValue}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 dark:text-gray-200" htmlFor="Expiration Date">
                        Expiration Date
                      </label>
                      <input
                        id="expirationDate"
                        type="text"
                        {...register("expirationDate")}
                        defaultValue={cupon.expirationDate}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button className="btn px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 text-center">
                      Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </dialog>
        </h2>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr className="bg-base-200">
              <th>Coupon ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Discount Type</th>
              <th>Discount Value</th>
              <th>Expiration Date</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {cupons.map((cupon, index) => (
              <tr key={cupon.id}>
                <td>{index + 1}</td>
                <td>{cupon.title}</td>
                <td>{cupon.description}</td>
                <td>{cupon.discountType}</td>
                <td>{cupon.discountValue}</td>
                <td>{cupon.expirationDate}</td>
                <td> <button className="btn" onClick={() => document.getElementById("my_modal_1").showModal()}>
            <FaEdit></FaEdit>
          </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageCupons;
