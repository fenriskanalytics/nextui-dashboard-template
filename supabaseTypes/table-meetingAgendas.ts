import { Enums } from './database.types';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { supabase } from '../reactQuery/types'; // Ensure you have the Supabase client initialized

export type MeetingAgenda = {
    agenda_description: string | null;
    agenda_id: number;
    agenda_quarter: string | null;
    created_at: string;
    primary_topic1: string | null;
    primary_topic2: string | null;
    situational_topic: string | null;
};

export type AddMeetingAgendaRequest = {
    agenda_description?: string | null;
    agenda_id?: number;
    agenda_quarter?: string | null;
    created_at?: string;
    primary_topic1?: string | null;
    primary_topic2?: string | null;
    situational_topic?: string | null;
};

export type UpdateMeetingAgendaRequest = {
    agenda_description?: string | null;
    agenda_id?: number;
    agenda_quarter?: string | null;
    created_at?: string;
    primary_topic1?: string | null;
    primary_topic2?: string | null;
    situational_topic?: string | null;
};

export function useGetMeetingAgenda(agenda_id: number) {
    return useQuery<MeetingAgenda, Error>(
        ['meeting_agendas', agenda_id],
        async () => {
            const { data, error } = await supabase
                .from('meeting_agendas')
                .select('*')
                .eq('agenda_id', agenda_id)
                .single();
            if (error) throw error;
            if (!data) throw new Error('No data found');
            return data;
        },
        { enabled: !!agenda_id }
    );
}

export function useGetAllMeetingAgendas() {
    return useQuery<MeetingAgenda[], Error>(
        'meeting_agendas',
        async () => {
            const { data, error } = await supabase.from('meeting_agendas').select();
            if (error) throw error;
            return data as MeetingAgenda[];
        }
    );
}

export function useAddMeetingAgenda() {
    const queryClient = useQueryClient();
    return useMutation(
        async (agenda: AddMeetingAgendaRequest) => {
            const { error } = await supabase.from('meeting_agendas').insert([agenda]).single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('meeting_agendas');
            },
        }
    );
}

export function useUpdateMeetingAgenda(agenda_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async (updateData: UpdateMeetingAgendaRequest) => {
            const { error } = await supabase
                .from('meeting_agendas')
                .update(updateData)
                .eq('agenda_id', agenda_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['meeting_agendas', agenda_id]);
                queryClient.invalidateQueries('meeting_agendas');
            },
        }
    );
}

export function useDeleteMeetingAgenda(agenda_id: number) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            const { error } = await supabase
                .from('meeting_agendas')
                .delete()
                .eq('agenda_id', agenda_id)
                .single();
            if (error) throw error;
            return null;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['meeting_agendas', agenda_id]);
                queryClient.invalidateQueries('meeting_agendas');
            },
        }
    );
}
