import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure, { axiosSecure } from './useAxiosSecure';

const useReservation = () => {
    const axiosSecure = useAxiosSecure()
    const {data: reservation = []} = useQuery({
        queryKey: ['reservation'],
        queryFn: async () => {
            const response = await axiosSecure.get('/reservation')
            return response.data
        }
    })
};

export default useReservation;