import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure the path and import are correct

export type BusinessDetail = {
    business_id: number;
    business_name: string;
    city: string | null;
    corporate_url: string | null;
    created_at: string;
    industry: string | null;
    publicly_traded: boolean | null;
    sic_code: string | null;
    state_id: string | null;
    street_address: string | null;
    street_address_2: string | null;
    zip_code: string | null;
};

export type AddBusinessDetailRequest = {
    business_id?: number;
    business_name: string;
    city?: string | null;
    corporate_url?: string | null;
    created_at?: string;
    industry?: string | null;
    publicly_traded?: boolean | null;
    sic_code?: string | null;
    state_id?: string | null;
    street_address?: string | null;
    street_address_2?: string | null;
    zip_code?: string | null;
};

export type UpdateBusinessDetailRequest = {
    business_id?: number;
    business_name?: string;
    city?: string | null;
    corporate_url?: string | null;
    created_at?: string;
    industry?: string | null;
    publicly_traded?: boolean | null;
    sic_code?: string | null;
    state_id?: string | null;
    street_address?: string | null;
    street_address_2?: string | null;
    zip_code?: string | null;
};

export function useGetBusinessDetail(business_id: number) {
    return useQuery<BusinessDetail, Error>(
        ['business_details', business_id],
        async () => {
            const { data, error } = await supabase
                .from('business_details')
                .select('*')
                .eq('business_id', business_id)
                .single();
            if (error) throw error;
            if (!data) throw new Error('No data found');
            return data;
        },
        { enabled: !!business_id }
    );
}

export function useGetAllBusinessDetails() {
    return useQuery<BusinessDetail[], Error>(
        ['business_details'],
        async () => {
            const { data, error } = await supabase.from('business_details').select();
            if (error) throw error;
            return data as BusinessDetail[];
        }
    );
}

export function useAddBusinessDetail() {
    const queryClient = useQueryClient();
    return useMutation(
        async (detail: AddBusinessDetailRequest) => {
            const { error } = await supabase.from('business_details').insert([detail]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('business_details');
            },
        }
    );
}

export function useUpdateBusinessDetail(business_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateBusinessDetailRequest) => {
            const { error } = await supabase
                .from('business_details')
                .update(updateData)
                .eq('business_id', business_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['business_details', business_id]);
                queryClient.invalidateQueries('business_details');
            },
        }
    );
}

export function useDeleteBusinessDetail(business_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('business_details')
                .delete()
                .eq('business_id', business_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['business_details', business_id]);
                queryClient.invalidateQueries('business_details');
            },
        }
    );
}
