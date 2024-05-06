import { Enums } from './database.types';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure you have the Supabase client initialized

export type Individual = {
    avatar_url: string | null;
    birthdate: string | null;
    client_acquired_from: string | null;
    created_at: string;
    date_of_death: string | null;
    deceased: boolean | null;
    employment_status: Enums<"employment_status_enum"> | null;
    first_name: string | null;
    gender: Enums<"gender_enum"> | null;
    individual_id: number;
    is_client: boolean | null;
    last_name: string | null;
    middle_name: string | null;
    preferred_email: string | null;
    preferred_phone: string | null;
    preferred_phone_type: string | null;
    primary_hh_id: number | null;
};

export type AddIndividualRequest = {
    avatar_url?: string | null;
    birthdate?: string | null;
    client_acquired_from?: string | null;
    created_at?: string;
    date_of_death?: string | null;
    deceased?: boolean | null;
    employment_status?: Enums<"employment_status_enum"> | null;
    first_name?: string | null;
    gender?: Enums<"gender_enum"> | null;
    individual_id?: number;
    is_client?: boolean | null;
    last_name?: string | null;
    middle_name?: string | null;
    preferred_email?: string | null;
    preferred_phone?: string | null;
    preferred_phone_type?: string | null;
    primary_hh_id?: number | null;
};

export type UpdateIndividualRequest = {
    avatar_url?: string | null;
    birthdate?: string | null;
    client_acquired_from?: string | null;
    created_at?: string;
    date_of_death?: string | null;
    deceased?: boolean | null;
    employment_status?: Enums<"employment_status_enum"> | null;
    first_name?: string | null;
    gender?: Enums<"gender_enum"> | null;
    individual_id?: number;
    is_client?: boolean | null;
    last_name?: string | null;
    middle_name?: string | null;
    preferred_email?: string | null;
    preferred_phone?: string | null;
    preferred_phone_type?: string | null;
    primary_hh_id?: number | null;
};

export function useGetIndividual(individual_id: number) {
    return useQuery<Individual, Error>(
        ['individuals', individual_id],
        async () => {
            const { data, error } = await supabase
                .from('individuals')
                .select('*')
                .eq('individual_id', individual_id)
                .single();
            if (error) throw error;
            if (!data) throw new Error('No data found');
            return data;
        },
        { enabled: !!individual_id }
    );
}

export function useGetAllIndividuals() {
    return useQuery<Individual[], Error>(
        'individuals',
        async () => {
            const { data, error } = await supabase.from('individuals').select();
            if (error) throw error;
            return data as Individual[];
        }
    );
}

export function useAddIndividual() {
    const queryClient = useQueryClient();
    return useMutation(
        async (individual: AddIndividualRequest) => {
            const { error } = await supabase.from('individuals').insert([individual]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('individuals');
            },
        }
    );
}

export function useUpdateIndividual(individual_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateIndividualRequest) => {
            const { error } = await supabase
                .from('individuals')
                .update(updateData)
                .eq('individual_id', individual_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['individuals', individual_id]);
                queryClient.invalidateQueries('individuals');
            },
        }
    );
}

export function useDeleteIndividual(individual_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('individuals')
                .delete()
                .eq('individual_id', individual_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['individuals', individual_id]);
                queryClient.invalidateQueries('individuals');
            },
        }
    );
}
