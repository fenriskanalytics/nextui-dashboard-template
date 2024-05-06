import { Enums } from './database.types';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure you have the Supabase client initialized

export type BusinessOwnership = {
    active_in_business: boolean | null;
    business_id: number;
    owner_business_id: number | null;
    owner_id: number | null;
    owner_trust_id: number | null;
    owner_type: string;
    ownership_id: number;
    ownership_percentage: number;
};

export type AddBusinessOwnershipRequest = {
    active_in_business?: boolean | null;
    business_id: number;
    owner_business_id?: number | null;
    owner_id?: number | null;
    owner_trust_id?: number | null;
    owner_type: string;
    ownership_percentage: number;
};

export type UpdateBusinessOwnershipRequest = {
    active_in_business?: boolean | null;
    business_id?: number;
    owner_business_id?: number | null;
    owner_id?: number | null;
    owner_trust_id?: number | null;
    owner_type?: string;
    ownership_percentage?: number;
};

export function useGetBusinessOwnership(business_id: number) {
    return useQuery<BusinessOwnership[], Error>(
        ['business_ownership', business_id],
        async () => {
            const { data, error } = await supabase
                .from('business_ownership')
                .select('*')
                .eq('business_id', business_id);
            if (error) throw error;
            return data;
        },
        { enabled: !!business_id }
    );
}

export function useGetAllBusinessOwnerships() {
    return useQuery<BusinessOwnership[], Error>(
        'business_ownership',
        async () => {
            const { data, error } = await supabase.from('business_ownership').select();
            if (error) throw error;
            return data;
        }
    );
}

export function useAddBusinessOwnership() {
    const queryClient = useQueryClient();
    return useMutation(
        async (ownership: AddBusinessOwnershipRequest) => {
            const { error } = await supabase.from('business_ownership').insert([ownership]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('business_ownership');
            },
        }
    );
}

export function useUpdateBusinessOwnership(ownership_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateBusinessOwnershipRequest) => {
            const { error } = await supabase
                .from('business_ownership')
                .update(updateData)
                .eq('ownership_id', ownership_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['business_ownership', ownership_id]);
                queryClient.invalidateQueries('business_ownership');
            },
        }
    );
}

export function useDeleteBusinessOwnership(ownership_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('business_ownership')
                .delete()
                .eq('ownership_id', ownership_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['business_ownership', ownership_id]);
                queryClient.invalidateQueries('business_ownership');
            },
        }
    );
}
