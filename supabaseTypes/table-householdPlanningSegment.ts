import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure the path and import are correct

export type HouseholdPlanningSegment = {
    business_planning: boolean | null;
    charitable_planning: boolean | null;
    college_planning: boolean | null;
    created_at: string;
    estate_planning: boolean | null;
    hh_id: number;
    tax_planning: boolean | null;
};

export type AddHouseholdPlanningSegmentRequest = {
    business_planning?: boolean | null;
    charitable_planning?: boolean | null;
    college_planning?: boolean | null;
    created_at?: string;
    estate_planning?: boolean | null;
    hh_id: number;
    tax_planning?: boolean | null;
};

export type UpdateHouseholdPlanningSegmentRequest = {
    business_planning?: boolean | null;
    charitable_planning?: boolean | null;
    college_planning?: boolean | null;
    created_at?: string;
    estate_planning?: boolean | null;
    hh_id?: number;
    tax_planning?: boolean | null;
};

export function useGetHouseholdPlanningSegment(hh_id: number) {
    return useQuery<HouseholdPlanningSegment[], Error>(
        ['household_planning_segments', hh_id],
        async () => {
            const { data, error } = await supabase
                .from('household_planning_segments')
                .select('*')
                .eq('hh_id', hh_id);
            if (error) throw error;
            return data;
        },
        { enabled: !!hh_id }
    );
}

export function useAddHouseholdPlanningSegment() {
    const queryClient = useQueryClient();
    return useMutation(
        async (segment: AddHouseholdPlanningSegmentRequest) => {
            const { error } = await supabase.from('household_planning_segments').insert([segment]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('household_planning_segments');
            },
        }
    );
}

export function useUpdateHouseholdPlanningSegment(hh_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateHouseholdPlanningSegmentRequest) => {
            const { error } = await supabase
                .from('household_planning_segments')
                .update(updateData)
                .eq('hh_id', hh_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['household_planning_segments', hh_id]);
                queryClient.invalidateQueries('household_planning_segments');
            },
        }
    );
}

export function useDeleteHouseholdPlanningSegment(hh_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('household_planning_segments')
                .delete()
                .eq('hh_id', hh_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['household_planning_segments', hh_id]);
                queryClient.invalidateQueries('household_planning_segments');
            },
        }
    );
}
