import { Enums } from './database.types';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure you have the Supabase client initialized

export type AccountBeneficiary = {
    account_id: number;
    beneficiary_id: number;
    beneficiary_name: string | null;
    beneficiary_type: Enums<'beneficiary_type'> | null;
    created_at: string | null;
    percentage: string | null;
    primary_beneficiary: boolean | null;
    secondary_beneficiary: boolean | null;
};

export type AddAccountBeneficiaryRequest = {
    account_id: number;
    beneficiary_id?: number;
    beneficiary_name?: string | null;
    beneficiary_type?: Enums<'beneficiary_type'> | null;
    created_at?: string | null;
    percentage?: string | null;
    primary_beneficiary?: boolean | null;
    secondary_beneficiary?: boolean | null;
};

export type UpdateAccountBeneficiaryRequest = {
    account_id?: number;
    changes: {
        beneficiary_id?: number;
        beneficiary_name?: string | null;
        beneficiary_type?: Enums<'beneficiary_type'> | null;
        created_at?: string | null;
        percentage?: string | null;
        primary_beneficiary?: boolean | null;
        secondary_beneficiary?: boolean | null;
    };
};

export function useGetAccountBeneficiary(beneficiary_id: number) {
    return useQuery<AccountBeneficiary, Error>(
        ['account_beneficiaries', beneficiary_id],
        async () => {
            const { data, error } = await supabase
                .from('account_beneficiaries')
                .select('*')
                .eq('beneficiary_id', beneficiary_id)
                .single();
            if (error) throw error;
            if (!data) throw new Error('No data found');
            return data;
        },
        { enabled: !!beneficiary_id }
    );
}

export function useGetAllAccountBeneficiaries() {
    return useQuery<AccountBeneficiary[], Error>(
        ['account_beneficiaries'],
        async () => {
            const { data, error } = await supabase.from('account_beneficiaries').select();
            if (error) throw error;
            return data as AccountBeneficiary[];
        }
    );
}

export function useAddAccountBeneficiary() {
    const queryClient = useQueryClient();
    return useMutation(
        async (beneficiary: AddAccountBeneficiaryRequest) => {
            const { error } = await supabase.from('account_beneficiaries').insert([beneficiary]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('account_beneficiaries');
            },
        }
    );
}

export function useUpdateAccountBeneficiary(beneficiary_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateAccountBeneficiaryRequest) => {
            const { error } = await supabase
                .from('account_beneficiaries')
                .update(updateData.changes)
                .eq('beneficiary_id', beneficiary_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['account_beneficiaries', beneficiary_id]);
                queryClient.invalidateQueries('account_beneficiaries');
            },
        }
    );
}

export function useDeleteAccountBeneficiary(beneficiary_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('account_beneficiaries')
                .delete()
                .eq('beneficiary_id', beneficiary_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['account_beneficiaries', beneficiary_id]);
                queryClient.invalidateQueries('account_beneficiaries');
            },
        }
    );
}
