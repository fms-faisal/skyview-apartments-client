import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const token = localStorage.getItem('access-token');

  
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: user && token ? [user.email, 'isAdmin'] : [],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data);
      return res.data.admin;
    },

    enabled: !!user && !!token,
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
