import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useMember = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  
  // Ensure user is available before making the request
  const { data: isMember, isPending: isMemberLoading } = useQuery({
    queryKey: user ? [user.email, 'isMember'] : null,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/member/${user.email}`);
      console.log(res.data);
      return res.data.member;
    },
    // Add enabled: user to conditionally enable the query only if user is available
    enabled: user != null,
  });
  
  return [isMember, isMemberLoading];
};

export default useMember;
