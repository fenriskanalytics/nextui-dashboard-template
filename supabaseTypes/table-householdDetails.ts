import { Enums } from './database.types';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure you have the Supabase client initialized

export type HouseholdDetail = {
    address_is_primary_residence: boolean | null;
    city: string | null;
    created_at: string;
    details_id: number;
    filing_state: string | null;
    filing_status: Enums<"filing_status_enum"> | null;
    hh_id: number;
    hh_summary: string | null;
    household_stage: Enums<"household_stage_type"> | null;
    residence_owned: boolean | null;
    state: string | null;
    street_address: string | null;
    street_address2: string | null;
    wealth_level: string | null;
    zip_code: string | null;
};

export type AddHouseholdDetailRequest = {
    address_is_primary_residence?: boolean | null;
    city?: string | null;
    created_at?: string;
    details_id?: number;
    filing_state?: string | null;
    filing_status?: Enums<"filing_status_enum"> | null;
    hh_id: number;
    hh_summary?: string | null;
    household_stage?: Enums<"household_stage_type"> | null;
    residence_owned?: boolean | null;
    state?: string | null;
    street_address?: string | null;
    street_address2?: string | null;
    wealth_level?: string | null;
    zip_code?: string | null;
};

export type UpdateHouseholdDetailRequest = {
    address_is_primary_residence?: boolean | null;
    city?: string | null;
    created_at?: string;
    details_id?: number;
    filing_state?: string | null;
    filing_status?: Enums<"filing_status_enum"> | null;
    hh_id?: number;
    hh_summary?: string | null;
    household_stage?: Enums<"household_stage_type"> | null;
    residence_owned?: boolean | null;
    state?: string | null;
    street_address?: string | null;
    street_address2?: string | null;
    wealth_level?: string | null;
    zip_code?: string | null;
};

export function useGetHouseholdDetail(details_id: number) {
    return useQuery<HouseholdDetail, Error>(
        ['household_details', details_id],
        async () => {
            const { data, error } = await supabase
                .from('household_details')
                .select('*')
                .eq('details_id', details_id)
                .single();
            if (error) throw error;
            if (!data) throw new Error('No data found');
            return data;
        },
        { enabled: !!details_id }
    );
}

export function useGetAllHouseholdDetails() {
    return useQuery<HouseholdDetail[], Error>(
        'household_details',
        async () => {
            const { data, error } = await supabase.from('household_details').select();
            if (error) throw error;
            return data as HouseholdDetail[];
        }
    );
}

export function useAddHouseholdDetail() {
    const queryClient = useQueryClient();
    return useMutation(
        async (detail: AddHouseholdDetailRequest) => {
            const { error } = await supabase.from('household_details').insert([detail]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('household_details');
            },
        }
    );
}

export function useUpdateHouseholdDetail(details_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateHouseholdDetailRequest) => {
            const { error } = await supabase
                .from('household_details')
                .update(updateData)
                .eq('details_id', details_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['household_details', details_id]);
                queryClient.invalidateQueries('household_details');
            },
        }
    );
}

export function useDeleteHouseholdDetail(details_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('household_details')
                .delete()
                .eq('details_id', details_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['household_details', details_id]);
                queryClient.invalidateQueries('household_details');
            },
        }
    );
}
