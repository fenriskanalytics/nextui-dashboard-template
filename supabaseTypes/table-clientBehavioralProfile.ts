import { Enums } from './database.types';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure you have the Supabase client initialized

export type ClientBehavioralProfile = {
    anchoring_bias: string | null;
    client_id: number;
    confirmation_bias: string | null;
    created_at: string;
    hindsight_bias: string | null;
    loss_aversion: string | null;
    recency_bias: string | null;
    regret_aversion: string | null;
    risk_aversion: string | null;
};

export type AddClientBehavioralProfileRequest = Omit<ClientBehavioralProfile, 'client_id'> & {
    client_id?: number;
};

export type UpdateClientBehavioralProfileRequest = {
    client_id: number;
    updates: Partial<ClientBehavioralProfile>;
};

// Hooks
export function useGetClientBehavioralProfile(client_id: number) {
    return useQuery<ClientBehavioralProfile, Error>(
        ['client_behavioral_profile', client_id],
        async () => {
            const { data, error } = await supabase
                .from('client_behavioral_profile')
                .select('*')
                .eq('client_id', client_id)
                .single();
            if (error) throw error;
            return data;
        },
        { enabled: !!client_id }
    );
}

export function useGetAllClientBehavioralProfiles() {
    return useQuery<ClientBehavioralProfile[], Error>(
        'client_behavioral_profiles',
        async () => {
            const { data, error } = await supabase.from('client_behavioral_profile').select();
            if (error) throw error;
            return data;
        }
    );
}

export function useAddClientBehavioralProfile() {
    const queryClient = useQueryClient();
    return useMutation(
        async (profile: AddClientBehavioralProfileRequest) => {
            const { error } = await supabase.from('client_behavioral_profile').insert([profile]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('client_behavioral_profiles');
            },
        }
    );
}

export function useUpdateClientBehavioralProfile(client_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateClientBehavioralProfileRequest) => {
            const { error } = await supabase
                .from('client_behavioral_profile')
                .update(updateData.updates)
                .eq('client_id', client_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['client_behavioral_profile', client_id]);
                queryClient.invalidateQueries('client_behavioral_profiles');
            },
        }
    );
}

export function useDeleteClientBehavioralProfile(client_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('client_behavioral_profile')
                .delete()
                .eq('client_id', client_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['client_behavioral_profile', client_id]);
                queryClient.invalidateQueries('client_behavioral_profiles');
            },
        }
    );
}
