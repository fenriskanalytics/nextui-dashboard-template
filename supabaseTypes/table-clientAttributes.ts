import { Enums } from './database.types';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure you have the Supabase client initialized

export type ClientAttribute = {
    accredited_investor: boolean | null;
    citizenship: string | null;
    client_acquired_from: string[] | null;
    client_id: number;
    client_since: string | null;
    created_at: string;
    finance_associated: boolean | null;
    insurance_rating: Enums<"li_risk_class"> | null;
    qualified_purchaser: boolean | null;
    religious_identity: Enums<"religious_identity"> | null;
    shareholder_tenpercent: boolean | null;
    sophistication_level: string | null;
    voter_registration: Enums<"voter_registration_type"> | null;
};

export type AddClientAttributeRequest = Omit<ClientAttribute, 'client_id'>;

export type UpdateClientAttributeRequest = {
    client_id: number;
    updates: Partial<ClientAttribute>;
};

// Hooks
export function useGetClientAttributes(client_id: number) {
    return useQuery<ClientAttribute, Error>(
        ['client_attributes', client_id],
        async () => {
            const { data, error } = await supabase
                .from('client_attributes')
                .select('*')
                .eq('client_id', client_id)
                .single();
            if (error) throw error;
            return data;
        },
        { enabled: !!client_id }
    );
}

export function useGetAllClientAttributes() {
    return useQuery<ClientAttribute[], Error>(
        'client_attributes',
        async () => {
            const { data, error } = await supabase.from('client_attributes').select();
            if (error) throw error;
            return data;
        }
    );
}

export function useAddClientAttribute() {
    const queryClient = useQueryClient();
    return useMutation(
        async (attributes: AddClientAttributeRequest & { client_id: number }) => { // Ensuring client_id is provided
            const { error } = await supabase.from('client_attributes').insert([attributes]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('client_attributes');
            },
        }
    );
}

export function useUpdateClientAttribute(client_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateClientAttributeRequest) => {
            const { error } = await supabase
                .from('client_attributes')
                .update(updateData.updates)
                .eq('client_id', client_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['client_attributes', client_id]);
                queryClient.invalidateQueries('client_attributes');
            },
        }
    );
}

export function useDeleteClientAttribute(client_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('client_attributes')
                .delete()
                .eq('client_id', client_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['client_attributes', client_id]);
                queryClient.invalidateQueries('client_attributes');
            },
        }
    );
}
