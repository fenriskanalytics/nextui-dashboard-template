import { Enums } from './database.types';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure you have the Supabase client initialized

export type Household = {
    created_at: string;
    hh_id: number;
    household_name: string;
};

export type AddHouseholdRequest = {
    created_at?: string;
    hh_id?: number;
    household_name: string;
};

export type UpdateHouseholdRequest = {
    created_at?: string;
    hh_id?: number;
    household_name?: string;
};

export function useGetHousehold(hh_id: number) {
    return useQuery<Household, Error>(
        ['households', hh_id],
        async () => {
            const { data, error } = await supabase
                .from('households')
                .select('*')
                .eq('hh_id', hh_id)
                .single();
            if (error) throw error;
            if (!data) throw new Error('No data found');
            return data;
        },
        { enabled: !!hh_id }
    );
}

export function useGetAllHouseholds() {
    return useQuery<Household[], Error>(
        'households',
        async () => {
            const { data, error } = await supabase.from('households').select();
            if (error) throw error;
            return data as Household[];
        }
    );
}

export function useAddHousehold() {
    const queryClient = useQueryClient();
    return useMutation(
        async (household: AddHouseholdRequest) => {
            const { error } = await supabase.from('households').insert([household]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('households');
            },
        }
    );
}

export function useUpdateHousehold(hh_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateHouseholdRequest) => {
            const { error } = await supabase
                .from('households')
                .update(updateData)
                .eq('hh_id', hh_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['households', hh_id]);
                queryClient.invalidateQueries('households');
            },
        }
    );
}

export function useDeleteHousehold(hh_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('households')
                .delete()
                .eq('hh_id', hh_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['households', hh_id]);
                queryClient.invalidateQueries('households');
            },
        }
    );
}

