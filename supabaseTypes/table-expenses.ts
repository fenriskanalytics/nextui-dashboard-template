import { Enums } from './database.types';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure you have the Supabase client initialized

export type Expense = {
    category: string | null;
    created_at: string;
    end_date: string | null;
    estimated_expense: boolean | null;
    expense_due_date: string | null;
    expense_amount: string | null;
    expense_description: string | null;
    expense_frequency: Enums<"expense_frequency"> | null;
    expense_id: number;
    hh_id: number;
    is_essential: boolean | null;
    recurring_expense: boolean | null;
    start_date: string | null;
    sub_category: string | null;
};

export type AddExpenseRequest = {
    category?: string | null;
    created_at?: string;
    end_date?: string | null;
    estimated_expense?: boolean | null;
    expense_due_date?: string | null;
    expense_amount?: string | null;
    expense_description?: string | null;
    expense_frequency: Enums<"expense_frequency"> | null;
    expense_id?: number;
    hh_id?: number;
    is_essential?: boolean | null;
    recurring_expense?: boolean | null;
    start_date?: string | null;
    sub_category?: string | null;
};

export type UpdateExpenseRequest = {
    category?: string | null;
    created_at?: string;
    end_date?: string | null;
    estimated_expense?: boolean | null;
    expense_due_date?: string | null;
    expense_amount?: string | null;
    expense_description?: string | null;
    expense_frequency?: Enums<"expense_frequency"> | null;
    expense_id?: number;
    hh_id?: number;
    is_essential?: boolean | null;
    recurring_expense?: boolean | null;
    start_date?: string | null;
    sub_category?: string | null;
};

export function useGetExpense(expense_id: number) {
    return useQuery<Expense, Error>(
        ['expenses', expense_id],
        async () => {
            const { data, error } = await supabase
                .from('expenses')
                .select('*')
                .eq('expense_id', expense_id)
                .single();
            if (error) throw error;
            if (!data) throw new Error('No data found');
            return data;
        },
        { enabled: !!expense_id }
    );
}

// Fetch all expenses
export function useGetAllExpenses() {
    return useQuery<Expense[], Error>(
        'expenses',
        async () => {
            const { data, error } = await supabase.from('expenses').select();
            if (error) throw error;
            return data as Expense[];
        }
    );
}

// Add a new expense
export function useAddExpense() {
    const queryClient = useQueryClient();
    return useMutation(
        async (expense: AddExpenseRequest) => {
            const { error } = await supabase.from('expenses').insert([expense]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('expenses');
            },
        }
    );
}

// Update an existing expense
export function useUpdateExpense(expense_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateExpenseRequest) => {
            const { error } = await supabase
                .from('expenses')
                .update(updateData)
                .eq('expense_id', expense_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['expenses', expense_id]);
                queryClient.invalidateQueries('expenses');
            },
        }
    );
}

// Delete an expense
export function useDeleteExpense(expense_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('expenses')
                .delete()
                .eq('expense_id', expense_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['expenses', expense_id]);
                queryClient.invalidateQueries('expenses');
            },
        }
    );
}