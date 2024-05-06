import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure the path and import are correct

export type AccountDistribution = {
    account_id: number | null;
    cg_amount: string | null;
    created_at: string;
    distribution_id: number;
    dividend_amount: string | null;
    interest_amount: string | null;
    position_id: number | null;
};

export type AddAccountDistributionRequest = {
    account_id?: number | null;
    cg_amount?: string | null;
    created_at?: string;
    distribution_id: number;
    dividend_amount?: string | null;
    interest_amount?: string | null;
    position_id?: number | null;
};

export type UpdateAccountDistributionRequest = {
    account_id?: number | null;
    cg_amount?: string | null;
    created_at?: string;
    distribution_id?: number;
    dividend_amount?: string | null;
    interest_amount?: string | null;
    position_id?: number | null;
};

export function useGetAccountDistribution(distribution_id: number) {
    return useQuery<AccountDistribution, Error>(
        ['account_distributions', distribution_id],
        async () => {
            const { data, error } = await supabase
                .from('account_distributions')
                .select('*')
                .eq('distribution_id', distribution_id)
                .single();
            if (error) throw error;
            if (!data) throw new Error('No data found');
            return data;
        },
        { enabled: !!distribution_id }
    );
}

export function useGetAllAccountDistributions() {
    return useQuery<AccountDistribution[], Error>(
        ['account_distributions'],
        async () => {
            const { data, error } = await supabase.from('account_distributions').select();
            if (error) throw error;
            return data as AccountDistribution[];
        }
    );
}

export function useAddAccountDistribution() {
    const queryClient = useQueryClient();
    return useMutation(
        async (distribution: AddAccountDistributionRequest) => {
            const { error } = await supabase.from('account_distributions').insert([distribution]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('account_distributions');
            },
        }
    );
}

export function useUpdateAccountDistribution(distribution_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateAccountDistributionRequest) => {
            const { error } = await supabase
                .from('account_distributions')
                .update(updateData)
                .eq('distribution_id', distribution_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['account_distributions', distribution_id]);
                queryClient.invalidateQueries('account_distributions');
            },
        }
    );
}

export function useDeleteAccountDistribution(distribution_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('account_distributions')
                .delete()
                .eq('distribution_id', distribution_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['account_distributions', distribution_id]);
                queryClient.invalidateQueries('account_distributions');
            },
        }
    );
}
