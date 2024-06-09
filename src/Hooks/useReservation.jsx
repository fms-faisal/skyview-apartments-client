import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useReservation = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {refetch, data: reservation = []} = useQuery({
        queryKey: ['reservation', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/reservation?email=${user.email}`)
            return response.data
        }
    })
    return [reservation, refetch]
};

export default useReservation;