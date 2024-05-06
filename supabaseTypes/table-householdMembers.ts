import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure the path and import are correct

export type HouseholdMember = {
    hh_id: number;
    individual_id: number;
    is_dependent: boolean | null;
    is_primary: boolean | null;
};

export type AddHouseholdMemberRequest = {
    hh_id: number;
    individual_id: number;
    is_dependent?: boolean | null;
    is_primary?: boolean | null;
};

export type UpdateHouseholdMemberRequest = {
    hh_id?: number;
    individual_id?: number;
    is_dependent?: boolean | null;
    is_primary?: boolean | null;
};

export function useGetHouseholdMembers(hh_id: number) {
    return useQuery<HouseholdMember[], Error>(
        ['household_members', hh_id],
        async () => {
            const { data, error } = await supabase
                .from('household_members')
                .select('*')
                .eq('hh_id', hh_id);
            if (error) throw error;
            return data;
        },
        { enabled: !!hh_id }
    );
}

export function useAddHouseholdMember() {
    const queryClient = useQueryClient();
    return useMutation(
        async (member: AddHouseholdMemberRequest) => {
            const { error } = await supabase.from('household_members').insert([member]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('household_members');
            },
        }
    );
}

export function useUpdateHouseholdMember(member_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateHouseholdMemberRequest) => {
            const { error } = await supabase
                .from('household_members')
                .update(updateData)
                .eq('individual_id', member_id)  // Assuming individual_id can uniquely identify a member here.
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['household_members', member_id]);
                queryClient.invalidateQueries('household_members');
            },
        }
    );
}

export function useDeleteHouseholdMember(member_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('household_members')
                .delete()
                .eq('individual_id', member_id)  // Assuming individual_id can uniquely identify a member here.
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['household_members', member_id]);
                queryClient.invalidateQueries('household_members');
            },
        }
    );
}
