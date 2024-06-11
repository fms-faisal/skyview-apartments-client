import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSeceure = useAxiosSecure();

  const [searchMonth, setSearchMonth] = useState('');
  const [filteredPayments, setFilteredPayments] = useState([]);

  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
      const res = await axiosSeceure.get(`/payments/${user.email}`);
      return res.data;
    }
  });

  const handleSearch = (e) => {
    const month = e.target.value;
    setSearchMonth(month);
    const filtered = payments.filter((payment) => {
      const paymentMonth = new Date(payment.date).getMonth() + 1;
      return paymentMonth === parseInt(month);
    });
    setFilteredPayments(filtered);
  };

  return (
    <div>
      <h2 className='text-3xl text-center p-10 border-2 border-gray-200 rounded-lg'>Total Payments: {payments.length}</h2>
      <div className="flex justify-center mb-4">
        <input
          type="number"
          value={searchMonth}
          onChange={handleSearch}
          placeholder="Enter month (1-12)"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Payment date</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {searchMonth? filteredPayments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.date? new Date(payment.date).toLocaleDateString() : "N/A"}</td>
                <td>{payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.status}</td>
              </tr>
            )) : payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.date? new Date(payment.date).toLocaleDateString() : "N/A"}</td>
                <td>{payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;