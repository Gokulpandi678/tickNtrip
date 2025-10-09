import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../utils/queryKeys';
import { authService } from '../../services/authService';

export const useGetAllUser = (options={}) => {
    return useQuery({
        queryKey:queryKeys.users.getAll,
        queryFn:authService.getAllUser,
        ...options
    })
}

export const useGetUserById = (id, options={}) => {
    return useQuery({
        queryKey:queryKeys.users.detail(id),
        queryFn:() => authService.getUserById(id),
        ...options
    })
}