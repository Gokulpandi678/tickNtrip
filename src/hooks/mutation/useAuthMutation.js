import { useMutation, useQueryClient } from "@tanstack/react-query"
import { authService } from "../../services/authService";
import { queryKeys } from "../../utils/queryKeys";

export const useCreateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authService.createUser,
        onSuccess:() => {
            queryClient.invalidateQueries({ queryKey: queryKeys.users.getAll });
        },
        onError: (error) => {
            console.log("Failed to create user: ",error);
        }
    })
}