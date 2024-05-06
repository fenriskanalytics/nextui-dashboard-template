import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure the path and import are correct

export type AccountPosition = {
    account_id: number;
    avg_cost_basis: string | null;
    calculated_total: number | null;
    created_at: string;
    dist_reinvestment: boolean | null;
    div_reinvestment: boolean | null;
    lt_shares: string | null;
    manual_total: number | null;
    position_id: number;
    st_shares: string | null;
    ticker: string | null;
    total_shares: string | null;
};

export type AddAccountPositionRequest = {
    account_id: number;
    avg_cost_basis?: string | null;
    calculated_total?: number | null;
    created_at?: string;
    dist_reinvestment?: boolean | null;
    div_reinvestment?: boolean | null;
    lt_shares?: string | null;
    manual_total?: number | null;
    position_id?: number;
    st_shares?: string | null;
    ticker?: string | null;
    total_shares?: string | null;
};

export type UpdateAccountPositionRequest = {
    account_id?: number;
    avg_cost_basis?: string | null;
    calculated_total?: number | null;
    created_at?: string;
    dist_reinvestment?: boolean | null;
    div_reinvestment?: boolean | null;
    lt_shares?: string | null;
    manual_total?: number | null;
    position_id?: number;
    st_shares?: string | null;
    ticker?: string | null;
    total_shares?: string | null;
};

export function useGetAccountPosition(position_id: number) {
    return useQuery<AccountPosition, Error>(
        ['account_positions', position_id],
        async () => {
            const { data, error } = await supabase
                .from('account_positions')
                .select('*')
                .eq('position_id', position_id)
                .single();
            if (error) throw error;
            if (!data) throw new Error('No data found');
            return data;
        },
        { enabled: !!position_id }
    );
}

export function useGetAllAccountPositions() {
    return useQuery<AccountPosition[], Error>(
        ['account_positions'],
        async () => {
            const { data, error } = await supabase.from('account_positions').select();
            if (error) throw error;
            return data as AccountPosition[];
        }
    );
}

export function useAddAccountPosition() {
    const queryClient = useQueryClient();
    return useMutation(
        async (position: AddAccountPositionRequest) => {
            const { error } = await supabase.from('account_positions').insert([position]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('account_positions');
            },
        }
    );
}

export function useUpdateAccountPosition(position_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateAccountPositionRequest) => {
            const { error } = await supabase
                .from('account_positions')
                .update(updateData)
                .eq('position_id', position_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['account_positions', position_id]);
                queryClient.invalidateQueries('account_positions');
            },
        }
    );
}

export function useDeleteAccountPosition(position_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('account_positions')
                .delete()
                .eq('position_id', position_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['account_positions', position_id]);
                queryClient.invalidateQueries('account_positions');
            },
        }
    );
}
