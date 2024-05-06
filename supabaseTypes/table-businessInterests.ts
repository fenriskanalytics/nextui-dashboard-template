import { Enums } from './database.types';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure you have the Supabase client initialized

export type BusinessInterest = {
    business_name: string | null;
    business_tax_type: Enums<"entity_tax_type"> | null;
    business_type: Enums<"business_type"> | null;
    businesses_id: number | null;
    created_at: string | null;
    doing_business_as: string | null;
    entity_state: string | null;
    hh_id: number;
    interest_id: number;
    ownership_type: Enums<"business_ownership_options"> | null;
    specialty_service_trade_business: boolean | null;
    start_date: string | null;
    tax_basis: string | null;
};

export type AddBusinessInterestRequest = {
    business_name?: string | null;
    business_tax_type?:Enums<"entity_tax_type"> | null;
    business_type?: Enums<"business_type"> | null;
    businesses_id?: number | null;
    created_at?: string | null;
    doing_business_as?: string | null;
    entity_state?: string | null;
    hh_id: number;
    interest_id?: number;
    ownership_type?: Enums<"business_ownership_options"> | null;
    specialty_service_trade_business?: boolean | null;
    start_date?: string | null;
    tax_basis?: string | null;
};

export type UpdateBusinessInterestRequest = {
    business_name?: string | null;
    business_tax_type?: Enums<"entity_tax_type"> | null;
    business_type?: Enums<"business_type"> | null;
    businesses_id?: number | null;
    created_at?: string | null;
    doing_business_as?: string | null;
    entity_state?: string | null;
    hh_id?: number;
    interest_id?: number;
    ownership_type?: Enums<"business_ownership_options"> | null;
    specialty_service_trade_business?: boolean | null;
    start_date?: string | null;
    tax_basis?: string | null;
};

// Hooks
export function useGetBusinessInterest(interest_id: number) {
    return useQuery<BusinessInterest, Error>(
        ['business_interests', interest_id],
        async () => {
            const { data, error } = await supabase
                .from('business_interests')
                .select('*')
                .eq('interest_id', interest_id)
                .single();
            if (error) throw error;
            return data;
        },
        { enabled: !!interest_id }
    );
}

export function useGetAllBusinessInterests() {
    return useQuery<BusinessInterest[], Error>(
        'business_interests',
        async () => {
            const { data, error } = await supabase.from('business_interests').select();
            if (error) throw error;
            return data;
        }
    );
}

export function useAddBusinessInterest() {
    const queryClient = useQueryClient();
    return useMutation(
        async (interest: AddBusinessInterestRequest) => {
            const { error } = await supabase.from('business_interests').insert([interest]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('business_interests');
            },
        }
    );
}

export function useUpdateBusinessInterest(interest_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateBusinessInterestRequest) => {
            const { error } = await supabase
                .from('business_interests')
                .update(updateData)
                .eq('interest_id', interest_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['business_interests', interest_id]);
                queryClient.invalidateQueries('business_interests');
            },
        }
    );
}

export function useDeleteBusinessInterest(interest_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('business_interests')
                .delete()
                .eq('interest_id', interest_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['business_interests', interest_id]);
                queryClient.invalidateQueries('business_interests');
            },
        }
    );
}
