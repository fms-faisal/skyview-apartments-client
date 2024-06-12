import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useMember = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const token = localStorage.getItem('access-token');

 
  const { data: isMember, isPending: isMemberLoading } = useQuery({
    queryKey: user && token ? [user.email, 'isMember'] : [],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/member/${user.email}`);
      console.log(res.data);
      return res.data.member;
    },

    enabled: !!user && !!token,
  });

  return [isMember, isMemberLoading];
};

export default useMember;
