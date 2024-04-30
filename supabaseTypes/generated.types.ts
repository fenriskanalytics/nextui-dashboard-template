import { useMutation, useQuery, useQueryClient } from 'react-query';
import { TypedSupabaseClient } from './typedSupabaseClient';

export type account_beneficiaries = {
    account_id: number
    beneficiary_id: number
    beneficiary_name: string | null
    beneficiary_type:
      | Database["public"]["Enums"]["beneficiary_type"]
      | null
    created_at: string | null
    percentage: string | null
    primary_beneficiary: boolean | null
    secondary_beneficiary: boolean | null
  }