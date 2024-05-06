import { Enums } from './database.types';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure you have the Supabase client initialized

export type ClientEmploymentDetail = {
    business_id: number;
    client_id: number;
    company_stability_score: string | null;
    created_at: string;
    current_employer: boolean | null;
    employee_owner: boolean | null;
    employment_classification: Enums<"employment_classification_type"> | null;
    employment_id: number;
    end_date: string | null;
    hce: boolean | null;
    income: Enums<"income_type_type"> | null;
    income_type: Enums<"income_type_type"> | null;
    industry_stability_score: string | null;
    job_title: string | null;
    key_employee: boolean | null;
    pay_structure: string | null;
    relocation_risk_score: string | null;
    start_date: string | null;
};

export type AddClientEmploymentDetailRequest = {
    business_id: number;
    client_id: number;
    company_stability_score?: string | null;
    created_at?: string;
    current_employer?: boolean | null;
    employee_owner?: boolean | null;
    employment_classification?: Enums<"employment_classification_type"> | null;
    employment_id?: number;
    end_date?: string | null;
    hce?: boolean | null;
    income?: Enums<"income_type_type"> | null;
    income_type?: Enums<"income_type_type"> | null;
    industry_stability_score?: string | null;
    job_title?: string | null;
    key_employee?: boolean | null;
    pay_structure?: string | null;
    relocation_risk_score?: string | null;
    start_date?: string | null;
};

export type UpdateClientEmploymentDetailRequest = {
    business_id?: number;
    client_id?: number;
    company_stability_score?: string | null;
    created_at?: string;
    current_employer?: boolean | null;
    employee_owner?: boolean | null;
    employment_classification?: Enums<"employment_classification_type"> | null;
    employment_id?: number;
    end_date?: string | null;
    hce?: boolean | null;
    income?: Enums<"income_type_type"> | null;
    income_type?: Enums<"income_type_type"> | null;
    industry_stability_score?: string | null;
    job_title?: string | null;
    key_employee?: boolean | null;
    pay_structure?: string | null;
    relocation_risk_score?: string | null;
    start_date?: string | null;
};

export function useGetClientEmploymentDetail(employment_id: number) {
    return useQuery<ClientEmploymentDetail, Error>(
        ['client_employment_details', employment_id],
        async () => {
            const { data, error } = await supabase
                .from('client_employment_details')
                .select('*')
                .eq('employment_id', employment_id)
                .single();
            if (error) throw error;
            if (!data) throw new Error('No data found');
            return data;
        },
        { enabled: !!employment_id }
    );
}

export function useGetAllClientEmploymentDetails() {
    return useQuery<ClientEmploymentDetail[], Error>(
        ['client_employment_details'],
        async () => {
            const { data, error } = await supabase.from('client_employment_details').select();
            if (error) throw error;
            return data as ClientEmploymentDetail[];
        }
    );
}

export function useAddClientEmploymentDetail() {
    const queryClient = useQueryClient();
    return useMutation(
        async (detail: AddClientEmploymentDetailRequest) => {
            const { error } = await supabase.from('client_employment_details').insert([detail]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('client_employment_details');
            },
        }
    );
}

export function useUpdateClientEmploymentDetail(employment_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateClientEmploymentDetailRequest) => {
            const { error } = await supabase
                .from('client_employment_details')
                .update(updateData)
                .eq('employment_id', employment_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['client_employment_details', employment_id]);
                queryClient.invalidateQueries('client_employment_details');
            },
        }
    );
}

export function useDeleteClientEmploymentDetail(employment_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('client_employment_details')
                .delete()
                .eq('employment_id', employment_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['client_employment_details', employment_id]);
                queryClient.invalidateQueries('client_employment_details');
            },
        }
    );
}
