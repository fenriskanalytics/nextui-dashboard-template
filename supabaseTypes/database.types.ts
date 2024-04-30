export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      account_beneficiaries: {
        Row: {
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
        Insert: {
          account_id: number
          beneficiary_id?: number
          beneficiary_name?: string | null
          beneficiary_type?:
            | Database["public"]["Enums"]["beneficiary_type"]
            | null
          created_at?: string | null
          percentage?: string | null
          primary_beneficiary?: boolean | null
          secondary_beneficiary?: boolean | null
        }
        Update: {
          account_id?: number
          beneficiary_id?: number
          beneficiary_name?: string | null
          beneficiary_type?:
            | Database["public"]["Enums"]["beneficiary_type"]
            | null
          created_at?: string | null
          percentage?: string | null
          primary_beneficiary?: boolean | null
          secondary_beneficiary?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "account_beneficiaries_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["account_id"]
          },
        ]
      }
      account_distributions: {
        Row: {
          account_id: number | null
          cg_amount: string | null
          created_at: string
          distribution_id: number
          dividend_amount: string | null
          interest_amount: string | null
          position_id: number | null
        }
        Insert: {
          account_id?: number | null
          cg_amount?: string | null
          created_at?: string
          distribution_id?: number
          dividend_amount?: string | null
          interest_amount?: string | null
          position_id?: number | null
        }
        Update: {
          account_id?: number | null
          cg_amount?: string | null
          created_at?: string
          distribution_id?: number
          dividend_amount?: string | null
          interest_amount?: string | null
          position_id?: number | null
        }
        Relationships: []
      }
      account_metrics: {
        Row: {
          account_id: number | null
          created_at: string
          metrics_id: number
        }
        Insert: {
          account_id?: number | null
          created_at?: string
          metrics_id?: number
        }
        Update: {
          account_id?: number | null
          created_at?: string
          metrics_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "account_metrics_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["account_id"]
          },
        ]
      }
      account_positions: {
        Row: {
          account_id: number
          avg_cost_basis: string | null
          calculated_total: number | null
          created_at: string
          dist_reinvestment: boolean | null
          div_reinvestment: boolean | null
          lt_shares: string | null
          manual_total: number | null
          position_id: number
          st_shares: string | null
          ticker: string | null
          total_shares: string | null
        }
        Insert: {
          account_id: number
          avg_cost_basis?: string | null
          calculated_total?: number | null
          created_at?: string
          dist_reinvestment?: boolean | null
          div_reinvestment?: boolean | null
          lt_shares?: string | null
          manual_total?: number | null
          position_id?: number
          st_shares?: string | null
          ticker?: string | null
          total_shares?: string | null
        }
        Update: {
          account_id?: number
          avg_cost_basis?: string | null
          calculated_total?: number | null
          created_at?: string
          dist_reinvestment?: boolean | null
          div_reinvestment?: boolean | null
          lt_shares?: string | null
          manual_total?: number | null
          position_id?: number
          st_shares?: string | null
          ticker?: string | null
          total_shares?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "account_positions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["account_id"]
          },
        ]
      }
      account_trades: {
        Row: {
          created_at: string
          dividend_reinvestment: boolean | null
          position_id: number
          quantity: number
          ticker_symbol: string
          trade_date: string
          trade_id: number
          trade_price: number
          trade_type: Database["public"]["Enums"]["trade_type"]
        }
        Insert: {
          created_at?: string
          dividend_reinvestment?: boolean | null
          position_id: number
          quantity: number
          ticker_symbol: string
          trade_date: string
          trade_id?: number
          trade_price: number
          trade_type: Database["public"]["Enums"]["trade_type"]
        }
        Update: {
          created_at?: string
          dividend_reinvestment?: boolean | null
          position_id?: number
          quantity?: number
          ticker_symbol?: string
          trade_date?: string
          trade_id?: number
          trade_price?: number
          trade_type?: Database["public"]["Enums"]["trade_type"]
        }
        Relationships: [
          {
            foreignKeyName: "account_trades_position_id_fkey"
            columns: ["position_id"]
            isOneToOne: false
            referencedRelation: "account_positions"
            referencedColumns: ["position_id"]
          },
        ]
      }
      accounts: {
        Row: {
          account_id: number
          account_type: Database["public"]["Enums"]["account_type"] | null
          created_at: string
          household_id: number
        }
        Insert: {
          account_id?: number
          account_type?: Database["public"]["Enums"]["account_type"] | null
          created_at?: string
          household_id: number
        }
        Update: {
          account_id?: number
          account_type?: Database["public"]["Enums"]["account_type"] | null
          created_at?: string
          household_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "accounts_household_id_fkey"
            columns: ["household_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "accounts_household_id_fkey"
            columns: ["household_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      accounts_custodial: {
        Row: {
          account_id: number
          account_name: string | null
          beneficial_owner: string | null
          created_at: string
        }
        Insert: {
          account_id?: number
          account_name?: string | null
          beneficial_owner?: string | null
          created_at?: string
        }
        Update: {
          account_id?: number
          account_name?: string | null
          beneficial_owner?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "accounts_custodial_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: true
            referencedRelation: "accounts"
            referencedColumns: ["account_id"]
          },
        ]
      }
      accounts_education: {
        Row: {
          account_id: number
          account_name: string | null
          created_at: string
        }
        Insert: {
          account_id?: number
          account_name?: string | null
          created_at?: string
        }
        Update: {
          account_id?: number
          account_name?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "accounts_education_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: true
            referencedRelation: "accounts"
            referencedColumns: ["account_id"]
          },
        ]
      }
      accounts_hsa: {
        Row: {
          account_id: number
          created_at: string
        }
        Insert: {
          account_id?: number
          created_at?: string
        }
        Update: {
          account_id?: number
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "accounts_hsa_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: true
            referencedRelation: "accounts"
            referencedColumns: ["account_id"]
          },
        ]
      }
      accounts_inh_ira_details: {
        Row: {
          account_id: number
          created_at: string
          inherited_dob: string | null
          inherited_dod: string | null
          inherited_from: string | null
          relationship: string | null
        }
        Insert: {
          account_id?: number
          created_at?: string
          inherited_dob?: string | null
          inherited_dod?: string | null
          inherited_from?: string | null
          relationship?: string | null
        }
        Update: {
          account_id?: number
          created_at?: string
          inherited_dob?: string | null
          inherited_dod?: string | null
          inherited_from?: string | null
          relationship?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_inh_ira_details_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: true
            referencedRelation: "accounts_qual_retirement"
            referencedColumns: ["account_id"]
          },
        ]
      }
      accounts_nq_banking: {
        Row: {
          account_id: number
          account_name: string | null
          account_type: string | null
          created_at: string
          fdic_insured: boolean | null
          institution: string | null
          ownership_type: Database["public"]["Enums"]["ownership_type"] | null
          payable_on_death: boolean | null
        }
        Insert: {
          account_id: number
          account_name?: string | null
          account_type?: string | null
          created_at?: string
          fdic_insured?: boolean | null
          institution?: string | null
          ownership_type?: Database["public"]["Enums"]["ownership_type"] | null
          payable_on_death?: boolean | null
        }
        Update: {
          account_id?: number
          account_name?: string | null
          account_type?: string | null
          created_at?: string
          fdic_insured?: boolean | null
          institution?: string | null
          ownership_type?: Database["public"]["Enums"]["ownership_type"] | null
          payable_on_death?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_nq_banking_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: true
            referencedRelation: "accounts"
            referencedColumns: ["account_id"]
          },
        ]
      }
      accounts_nq_investment: {
        Row: {
          account_id: number
          account_name: string | null
          account_subtype: string | null
          created_at: string | null
          held: boolean | null
          institution: string | null
          ownership_type: Database["public"]["Enums"]["ownership_type"] | null
          transfer_on_death: boolean | null
        }
        Insert: {
          account_id: number
          account_name?: string | null
          account_subtype?: string | null
          created_at?: string | null
          held?: boolean | null
          institution?: string | null
          ownership_type?: Database["public"]["Enums"]["ownership_type"] | null
          transfer_on_death?: boolean | null
        }
        Update: {
          account_id?: number
          account_name?: string | null
          account_subtype?: string | null
          created_at?: string | null
          held?: boolean | null
          institution?: string | null
          ownership_type?: Database["public"]["Enums"]["ownership_type"] | null
          transfer_on_death?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_nq_investment_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: true
            referencedRelation: "accounts"
            referencedColumns: ["account_id"]
          },
        ]
      }
      accounts_ownership: {
        Row: {
          account_id: number | null
          account_owner: number | null
          created_at: string
          owner_name: string | null
          ownership_id: number
          ownership_percentage: string | null
        }
        Insert: {
          account_id?: number | null
          account_owner?: number | null
          created_at?: string
          owner_name?: string | null
          ownership_id?: number
          ownership_percentage?: string | null
        }
        Update: {
          account_id?: number | null
          account_owner?: number | null
          created_at?: string
          owner_name?: string | null
          ownership_id?: number
          ownership_percentage?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_ownership_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["account_id"]
          },
          {
            foreignKeyName: "accounts_ownership_account_owner_fkey"
            columns: ["account_owner"]
            isOneToOne: false
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "accounts_ownership_account_owner_fkey"
            columns: ["account_owner"]
            isOneToOne: false
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
        ]
      }
      accounts_qual_dcplans: {
        Row: {
          account_id: number
          account_name: string | null
          catch_up_eligible: boolean | null
          client_id: number | null
          created_at: string | null
          part_aftertax: boolean | null
          part_roth: boolean | null
          plan_id: number | null
          self_directed_enrolled: boolean | null
        }
        Insert: {
          account_id: number
          account_name?: string | null
          catch_up_eligible?: boolean | null
          client_id?: number | null
          created_at?: string | null
          part_aftertax?: boolean | null
          part_roth?: boolean | null
          plan_id?: number | null
          self_directed_enrolled?: boolean | null
        }
        Update: {
          account_id?: number
          account_name?: string | null
          catch_up_eligible?: boolean | null
          client_id?: number | null
          created_at?: string | null
          part_aftertax?: boolean | null
          part_roth?: boolean | null
          plan_id?: number | null
          self_directed_enrolled?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_qual_dcplans_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: true
            referencedRelation: "accounts"
            referencedColumns: ["account_id"]
          },
          {
            foreignKeyName: "accounts_qual_dcplans_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "accounts_qual_dcplans_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "accounts_qual_dcplans_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "dc_plan_list"
            referencedColumns: ["plan_id"]
          },
        ]
      }
      accounts_qual_retirement: {
        Row: {
          account_id: number
          account_name: string | null
          account_subtype:
            | Database["public"]["Enums"]["retirement_account_type"]
            | null
          client_id: number | null
          created_at: string
          financial_institution: string | null
          held: boolean | null
          inh_dob: string | null
          inh_from: string | null
        }
        Insert: {
          account_id: number
          account_name?: string | null
          account_subtype?:
            | Database["public"]["Enums"]["retirement_account_type"]
            | null
          client_id?: number | null
          created_at?: string
          financial_institution?: string | null
          held?: boolean | null
          inh_dob?: string | null
          inh_from?: string | null
        }
        Update: {
          account_id?: number
          account_name?: string | null
          account_subtype?:
            | Database["public"]["Enums"]["retirement_account_type"]
            | null
          client_id?: number | null
          created_at?: string
          financial_institution?: string | null
          held?: boolean | null
          inh_dob?: string | null
          inh_from?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_qual_retirement_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: true
            referencedRelation: "accounts"
            referencedColumns: ["account_id"]
          },
          {
            foreignKeyName: "accounts_qual_retirement_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "accounts_qual_retirement_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
        ]
      }
      accounts_return_forecasts: {
        Row: {
          account_id: number
          created_at: string
          current_allocation: boolean | null
          forecasted_dividends: string | null
          forecasted_price: string | null
          forecasted_shares: string | null
          forecasted_value: string | null
          ticker: string | null
          year: string | null
        }
        Insert: {
          account_id?: number
          created_at?: string
          current_allocation?: boolean | null
          forecasted_dividends?: string | null
          forecasted_price?: string | null
          forecasted_shares?: string | null
          forecasted_value?: string | null
          ticker?: string | null
          year?: string | null
        }
        Update: {
          account_id?: number
          created_at?: string
          current_allocation?: boolean | null
          forecasted_dividends?: string | null
          forecasted_price?: string | null
          forecasted_shares?: string | null
          forecasted_value?: string | null
          ticker?: string | null
          year?: string | null
        }
        Relationships: []
      }
      accounts_roth_ira_details: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      advisor_todo: {
        Row: {
          advisor: number | null
          created_at: string | null
          description: string | null
          due_date: string | null
          name: string | null
          priority: Database["public"]["Enums"]["priority_enum"] | null
          status: Database["public"]["Enums"]["status_enum"] | null
          todo_id: number
        }
        Insert: {
          advisor?: number | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          name?: string | null
          priority?: Database["public"]["Enums"]["priority_enum"] | null
          status?: Database["public"]["Enums"]["status_enum"] | null
          todo_id?: number
        }
        Update: {
          advisor?: number | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          name?: string | null
          priority?: Database["public"]["Enums"]["priority_enum"] | null
          status?: Database["public"]["Enums"]["status_enum"] | null
          todo_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "advisor_todo_advisor_fkey"
            columns: ["advisor"]
            isOneToOne: false
            referencedRelation: "fenrisk_advisors"
            referencedColumns: ["advisor_id"]
          },
        ]
      }
      agenda_documents: {
        Row: {
          agendaitem_id: number | null
          created_at: string
          document_id: number
          document_name: string | null
          document_type: Database["public"]["Enums"]["document_type"] | null
          item_id: number | null
        }
        Insert: {
          agendaitem_id?: number | null
          created_at?: string
          document_id?: number
          document_name?: string | null
          document_type?: Database["public"]["Enums"]["document_type"] | null
          item_id?: number | null
        }
        Update: {
          agendaitem_id?: number | null
          created_at?: string
          document_id?: number
          document_name?: string | null
          document_type?: Database["public"]["Enums"]["document_type"] | null
          item_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "agenda_documents_agendaitem_id_fkey"
            columns: ["agendaitem_id"]
            isOneToOne: false
            referencedRelation: "agenda_topic_items"
            referencedColumns: ["agendaitem_id"]
          },
          {
            foreignKeyName: "agenda_documents_agendaitem_id_fkey"
            columns: ["agendaitem_id"]
            isOneToOne: false
            referencedRelation: "documents_agendas_topics"
            referencedColumns: ["agenda_item_id"]
          },
          {
            foreignKeyName: "agenda_documents_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "agenda_primary_topics"
            referencedColumns: ["topic_id"]
          },
        ]
      }
      agenda_items_fix: {
        Row: {
          "Agenda Item": string | null
          "Agenda Name": string
          "Applicable Criteria": string | null
          "Associated Strategies": string | null
          Description: string | null
          "Periodic Review": string | null
          "Potential Product Solutions": string | null
          "Related Deliverables": string | null
          "Related Documents": string | null
          "Related Questionnaires": string | null
          "Related Softwares": string | null
          "Review Topic": string | null
        }
        Insert: {
          "Agenda Item"?: string | null
          "Agenda Name": string
          "Applicable Criteria"?: string | null
          "Associated Strategies"?: string | null
          Description?: string | null
          "Periodic Review"?: string | null
          "Potential Product Solutions"?: string | null
          "Related Deliverables"?: string | null
          "Related Documents"?: string | null
          "Related Questionnaires"?: string | null
          "Related Softwares"?: string | null
          "Review Topic"?: string | null
        }
        Update: {
          "Agenda Item"?: string | null
          "Agenda Name"?: string
          "Applicable Criteria"?: string | null
          "Associated Strategies"?: string | null
          Description?: string | null
          "Periodic Review"?: string | null
          "Potential Product Solutions"?: string | null
          "Related Deliverables"?: string | null
          "Related Documents"?: string | null
          "Related Questionnaires"?: string | null
          "Related Softwares"?: string | null
          "Review Topic"?: string | null
        }
        Relationships: []
      }
      agenda_primary_topics: {
        Row: {
          agenda_topic: string
          created_at: string
          recommended_review_quarter: string | null
          topic_id: number
          type: Database["public"]["Enums"]["agenda_item_type"] | null
        }
        Insert: {
          agenda_topic: string
          created_at: string
          recommended_review_quarter?: string | null
          topic_id?: number
          type?: Database["public"]["Enums"]["agenda_item_type"] | null
        }
        Update: {
          agenda_topic?: string
          created_at?: string
          recommended_review_quarter?: string | null
          topic_id?: number
          type?: Database["public"]["Enums"]["agenda_item_type"] | null
        }
        Relationships: []
      }
      agenda_topic_items: {
        Row: {
          agenda_description: string | null
          agenda_item_name: string
          agenda_subdescription: string | null
          agendaitem_id: number
          created_at: string
          tooltip_description: string | null
          topic_id: number
        }
        Insert: {
          agenda_description?: string | null
          agenda_item_name: string
          agenda_subdescription?: string | null
          agendaitem_id?: number
          created_at?: string
          tooltip_description?: string | null
          topic_id: number
        }
        Update: {
          agenda_description?: string | null
          agenda_item_name?: string
          agenda_subdescription?: string | null
          agendaitem_id?: number
          created_at?: string
          tooltip_description?: string | null
          topic_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "agenda_topic_items_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "agenda_primary_topics"
            referencedColumns: ["topic_id"]
          },
        ]
      }
      annuities: {
        Row: {
          annuity_id: number
          annuity_type: string | null
          created_at: string
          hh_id: number | null
        }
        Insert: {
          annuity_id?: number
          annuity_type?: string | null
          created_at?: string
          hh_id?: number | null
        }
        Update: {
          annuity_id?: number
          annuity_type?: string | null
          created_at?: string
          hh_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "annuities_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "annuities_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      annuities_fixed: {
        Row: {
          annuity_id: number
          created_at: string
        }
        Insert: {
          annuity_id?: number
          created_at?: string
        }
        Update: {
          annuity_id?: number
          created_at?: string
        }
        Relationships: []
      }
      annuties_variable: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      behavioral_bias: {
        Row: {
          bias_id: number
          corrective_action: string | null
          created_at: string
          definition: string | null
          name: string | null
          type: string | null
        }
        Insert: {
          bias_id?: number
          corrective_action?: string | null
          created_at?: string
          definition?: string | null
          name?: string | null
          type?: string | null
        }
        Update: {
          bias_id?: number
          corrective_action?: string | null
          created_at?: string
          definition?: string | null
          name?: string | null
          type?: string | null
        }
        Relationships: []
      }
      business_details: {
        Row: {
          business_id: number
          business_name: string
          city: string | null
          corporate_url: string | null
          created_at: string
          industry: string | null
          publicly_traded: boolean | null
          sic_code: string | null
          state_id: string | null
          street_address: string | null
          street_address_2: string | null
          zip_code: string | null
        }
        Insert: {
          business_id?: number
          business_name: string
          city?: string | null
          corporate_url?: string | null
          created_at?: string
          industry?: string | null
          publicly_traded?: boolean | null
          sic_code?: string | null
          state_id?: string | null
          street_address?: string | null
          street_address_2?: string | null
          zip_code?: string | null
        }
        Update: {
          business_id?: number
          business_name?: string
          city?: string | null
          corporate_url?: string | null
          created_at?: string
          industry?: string | null
          publicly_traded?: boolean | null
          sic_code?: string | null
          state_id?: string | null
          street_address?: string | null
          street_address_2?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_details_industry_fkey"
            columns: ["industry"]
            isOneToOne: false
            referencedRelation: "data_gics_industry_groups"
            referencedColumns: ["industry_group_name"]
          },
          {
            foreignKeyName: "business_details_sic_code_fkey"
            columns: ["sic_code"]
            isOneToOne: false
            referencedRelation: "data_irs_activity_codes"
            referencedColumns: ["activity_code"]
          },
          {
            foreignKeyName: "business_details_state_id_fkey"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_code"]
          },
        ]
      }
      business_expenses: {
        Row: {
          business_id: number | null
          created_at: string
          expense_date: string | null
          expense_id: number
          expense_type: string | null
        }
        Insert: {
          business_id?: number | null
          created_at?: string
          expense_date?: string | null
          expense_id?: number
          expense_type?: string | null
        }
        Update: {
          business_id?: number | null
          created_at?: string
          expense_date?: string | null
          expense_id?: number
          expense_type?: string | null
        }
        Relationships: []
      }
      business_income: {
        Row: {
          business_id: number | null
          created_at: string
          income_date: string | null
          income_id: number
          income_type: string | null
        }
        Insert: {
          business_id?: number | null
          created_at?: string
          income_date?: string | null
          income_id?: number
          income_type?: string | null
        }
        Update: {
          business_id?: number | null
          created_at?: string
          income_date?: string | null
          income_id?: number
          income_type?: string | null
        }
        Relationships: []
      }
      business_interests: {
        Row: {
          business_name: string | null
          business_tax_type:
            | Database["public"]["Enums"]["entity_tax_type"]
            | null
          business_type: Database["public"]["Enums"]["business_type"] | null
          businesses_id: number | null
          created_at: string | null
          doing_business_as: string | null
          entity_state: string | null
          hh_id: number
          interest_id: number
          ownership_type:
            | Database["public"]["Enums"]["business_ownership_options"]
            | null
          specialty_service_trade_business: boolean | null
          start_date: string | null
          tax_basis: string | null
        }
        Insert: {
          business_name?: string | null
          business_tax_type?:
            | Database["public"]["Enums"]["entity_tax_type"]
            | null
          business_type?: Database["public"]["Enums"]["business_type"] | null
          businesses_id?: number | null
          created_at?: string | null
          doing_business_as?: string | null
          entity_state?: string | null
          hh_id: number
          interest_id?: number
          ownership_type?:
            | Database["public"]["Enums"]["business_ownership_options"]
            | null
          specialty_service_trade_business?: boolean | null
          start_date?: string | null
          tax_basis?: string | null
        }
        Update: {
          business_name?: string | null
          business_tax_type?:
            | Database["public"]["Enums"]["entity_tax_type"]
            | null
          business_type?: Database["public"]["Enums"]["business_type"] | null
          businesses_id?: number | null
          created_at?: string | null
          doing_business_as?: string | null
          entity_state?: string | null
          hh_id?: number
          interest_id?: number
          ownership_type?:
            | Database["public"]["Enums"]["business_ownership_options"]
            | null
          specialty_service_trade_business?: boolean | null
          start_date?: string | null
          tax_basis?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_interests_businesses_id_fkey"
            columns: ["businesses_id"]
            isOneToOne: false
            referencedRelation: "business_details"
            referencedColumns: ["business_id"]
          },
          {
            foreignKeyName: "business_interests_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "business_interests_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      business_ownership: {
        Row: {
          active_in_business: boolean | null
          business_id: number
          owner_business_id: number | null
          owner_id: number | null
          owner_trust_id: number | null
          owner_type: string
          ownership_id: number
          ownership_percentage: number
        }
        Insert: {
          active_in_business?: boolean | null
          business_id: number
          owner_business_id?: number | null
          owner_id?: number | null
          owner_trust_id?: number | null
          owner_type: string
          ownership_id?: never
          ownership_percentage: number
        }
        Update: {
          active_in_business?: boolean | null
          business_id?: number
          owner_business_id?: number | null
          owner_id?: number | null
          owner_trust_id?: number | null
          owner_type?: string
          ownership_id?: never
          ownership_percentage?: number
        }
        Relationships: [
          {
            foreignKeyName: "business_ownership_owner_business_id_fkey"
            columns: ["owner_business_id"]
            isOneToOne: false
            referencedRelation: "business_details"
            referencedColumns: ["business_id"]
          },
          {
            foreignKeyName: "business_ownership_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "business_ownership_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "business_ownership_owner_trust_id_fkey"
            columns: ["owner_trust_id"]
            isOneToOne: false
            referencedRelation: "estate_trusts"
            referencedColumns: ["trust_id"]
          },
        ]
      }
      client_attributes: {
        Row: {
          accredited_investor: boolean | null
          citizenship: string | null
          client_acquired_from: string[] | null
          client_id: number
          client_since: string | null
          created_at: string
          finance_associated: boolean | null
          insurance_rating: Database["public"]["Enums"]["li_risk_class"] | null
          qualified_purchaser: boolean | null
          religious_identity:
            | Database["public"]["Enums"]["religious_identity"]
            | null
          shareholder_tenpercent: boolean | null
          sophistication_level: string | null
          voter_registration:
            | Database["public"]["Enums"]["voter_registration_type"]
            | null
        }
        Insert: {
          accredited_investor?: boolean | null
          citizenship?: string | null
          client_acquired_from?: string[] | null
          client_id: number
          client_since?: string | null
          created_at?: string
          finance_associated?: boolean | null
          insurance_rating?: Database["public"]["Enums"]["li_risk_class"] | null
          qualified_purchaser?: boolean | null
          religious_identity?:
            | Database["public"]["Enums"]["religious_identity"]
            | null
          shareholder_tenpercent?: boolean | null
          sophistication_level?: string | null
          voter_registration?:
            | Database["public"]["Enums"]["voter_registration_type"]
            | null
        }
        Update: {
          accredited_investor?: boolean | null
          citizenship?: string | null
          client_acquired_from?: string[] | null
          client_id?: number
          client_since?: string | null
          created_at?: string
          finance_associated?: boolean | null
          insurance_rating?: Database["public"]["Enums"]["li_risk_class"] | null
          qualified_purchaser?: boolean | null
          religious_identity?:
            | Database["public"]["Enums"]["religious_identity"]
            | null
          shareholder_tenpercent?: boolean | null
          sophistication_level?: string | null
          voter_registration?:
            | Database["public"]["Enums"]["voter_registration_type"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "client_attributes_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "client_attributes_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
        ]
      }
      client_behavioral_profile: {
        Row: {
          anchoring_bias: string | null
          client_id: number
          confirmation_bias: string | null
          created_at: string
          hindsight_bias: string | null
          loss_aversion: string | null
          recency_bias: string | null
          regret_aversion: string | null
          risk_aversion: string | null
        }
        Insert: {
          anchoring_bias?: string | null
          client_id?: number
          confirmation_bias?: string | null
          created_at?: string
          hindsight_bias?: string | null
          loss_aversion?: string | null
          recency_bias?: string | null
          regret_aversion?: string | null
          risk_aversion?: string | null
        }
        Update: {
          anchoring_bias?: string | null
          client_id?: number
          confirmation_bias?: string | null
          created_at?: string
          hindsight_bias?: string | null
          loss_aversion?: string | null
          recency_bias?: string | null
          regret_aversion?: string | null
          risk_aversion?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_behavioral_profile_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "client_behavioral_profile_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
        ]
      }
      client_employment_details: {
        Row: {
          business_id: number
          client_id: number
          company_stability_score: string | null
          created_at: string
          current_employer: boolean | null
          employee_owner: boolean | null
          employment_classification:
            | Database["public"]["Enums"]["employment_classification_type"]
            | null
          employment_id: number
          end_date: string | null
          hce: boolean | null
          income: Database["public"]["Enums"]["income_type_type"][] | null
          income_type: Database["public"]["Enums"]["income_type_type"] | null
          industry_stability_score: string | null
          job_title: string | null
          key_employee: boolean | null
          pay_structure: string | null
          relocation_risk_score: string | null
          start_date: string | null
        }
        Insert: {
          business_id: number
          client_id: number
          company_stability_score?: string | null
          created_at?: string
          current_employer?: boolean | null
          employee_owner?: boolean | null
          employment_classification?:
            | Database["public"]["Enums"]["employment_classification_type"]
            | null
          employment_id?: number
          end_date?: string | null
          hce?: boolean | null
          income?: Database["public"]["Enums"]["income_type_type"][] | null
          income_type?: Database["public"]["Enums"]["income_type_type"] | null
          industry_stability_score?: string | null
          job_title?: string | null
          key_employee?: boolean | null
          pay_structure?: string | null
          relocation_risk_score?: string | null
          start_date?: string | null
        }
        Update: {
          business_id?: number
          client_id?: number
          company_stability_score?: string | null
          created_at?: string
          current_employer?: boolean | null
          employee_owner?: boolean | null
          employment_classification?:
            | Database["public"]["Enums"]["employment_classification_type"]
            | null
          employment_id?: number
          end_date?: string | null
          hce?: boolean | null
          income?: Database["public"]["Enums"]["income_type_type"][] | null
          income_type?: Database["public"]["Enums"]["income_type_type"] | null
          industry_stability_score?: string | null
          job_title?: string | null
          key_employee?: boolean | null
          pay_structure?: string | null
          relocation_risk_score?: string | null
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_employment_details_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "business_details"
            referencedColumns: ["business_id"]
          },
          {
            foreignKeyName: "client_employment_details_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "client_employment_details_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
        ]
      }
      client_future_income: {
        Row: {
          alternate_end_date: string | null
          alternate2_end_date: string | null
          client_id: number | null
          created_at: string
          date_received: string | null
          document_record: number | null
          end_date: string | null
          gross_amount: number | null
          income_id: number
          income_type: string | null
          source: string | null
          ssi: boolean | null
          start_date: string | null
          statement_date: string | null
        }
        Insert: {
          alternate_end_date?: string | null
          alternate2_end_date?: string | null
          client_id?: number | null
          created_at?: string
          date_received?: string | null
          document_record?: number | null
          end_date?: string | null
          gross_amount?: number | null
          income_id?: number
          income_type?: string | null
          source?: string | null
          ssi?: boolean | null
          start_date?: string | null
          statement_date?: string | null
        }
        Update: {
          alternate_end_date?: string | null
          alternate2_end_date?: string | null
          client_id?: number | null
          created_at?: string
          date_received?: string | null
          document_record?: number | null
          end_date?: string | null
          gross_amount?: number | null
          income_id?: number
          income_type?: string | null
          source?: string | null
          ssi?: boolean | null
          start_date?: string | null
          statement_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_future_income_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "client_future_income_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
        ]
      }
      client_investor_profile: {
        Row: {
          asset_class_bias: string | null
          client_id: number
          created_at: string
          current_economic_sentiment: string | null
          current_market_sentiment: string | null
          primary_investment_infosource: string | null
        }
        Insert: {
          asset_class_bias?: string | null
          client_id?: number
          created_at?: string
          current_economic_sentiment?: string | null
          current_market_sentiment?: string | null
          primary_investment_infosource?: string | null
        }
        Update: {
          asset_class_bias?: string | null
          client_id?: number
          created_at?: string
          current_economic_sentiment?: string | null
          current_market_sentiment?: string | null
          primary_investment_infosource?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_investor_profile_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "client_investor_profile_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "client_investor_profile_current_economic_sentiment_fkey"
            columns: ["current_economic_sentiment"]
            isOneToOne: false
            referencedRelation: "details_investor_sentiment"
            referencedColumns: ["sentiment"]
          },
          {
            foreignKeyName: "client_investor_profile_current_market_sentiment_fkey"
            columns: ["current_market_sentiment"]
            isOneToOne: false
            referencedRelation: "details_investor_sentiment"
            referencedColumns: ["sentiment"]
          },
        ]
      }
      client_outlook_expectations: {
        Row: {
          corrective_measure: string | null
          created_at: string
          definition: string | null
          name: string | null
          outlook_id: number
          type: string | null
        }
        Insert: {
          corrective_measure?: string | null
          created_at?: string
          definition?: string | null
          name?: string | null
          outlook_id?: number
          type?: string | null
        }
        Update: {
          corrective_measure?: string | null
          created_at?: string
          definition?: string | null
          name?: string | null
          outlook_id?: number
          type?: string | null
        }
        Relationships: []
      }
      data_gics_industries: {
        Row: {
          created_at: string
          indgrp_id: number
          industry_group_name: string | null
          industry_name: string
        }
        Insert: {
          created_at?: string
          indgrp_id?: number
          industry_group_name?: string | null
          industry_name: string
        }
        Update: {
          created_at?: string
          indgrp_id?: number
          industry_group_name?: string | null
          industry_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "data_gics_industries_industry_group_name_fkey"
            columns: ["industry_group_name"]
            isOneToOne: false
            referencedRelation: "data_gics_industry_groups"
            referencedColumns: ["industry_group_name"]
          },
        ]
      }
      data_gics_industry_groups: {
        Row: {
          created_at: string
          indgroup_id: number
          industry_group_name: string
          sector_name: string | null
        }
        Insert: {
          created_at?: string
          indgroup_id?: number
          industry_group_name: string
          sector_name?: string | null
        }
        Update: {
          created_at?: string
          indgroup_id?: number
          industry_group_name?: string
          sector_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "data_gics_industry_groups_sector_name_fkey"
            columns: ["sector_name"]
            isOneToOne: false
            referencedRelation: "data_gics_sectors"
            referencedColumns: ["sector_name"]
          },
        ]
      }
      data_gics_sectors: {
        Row: {
          created_at: string
          sector_id: number
          sector_name: string
        }
        Insert: {
          created_at?: string
          sector_id?: number
          sector_name: string
        }
        Update: {
          created_at?: string
          sector_id?: number
          sector_name?: string
        }
        Relationships: []
      }
      data_irs_activity_codes: {
        Row: {
          activity_code: string
          activity_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          activity_code: string
          activity_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          activity_code?: string
          activity_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "data_irs_activity_codes_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "irs_principal_business_lists"
            referencedColumns: ["id"]
          },
        ]
      }
      data_us_states: {
        Row: {
          community_property: boolean | null
          community_property_opt_in: boolean | null
          created_at: string
          jt_ten_by_entirety_personal: boolean | null
          jt_ten_by_entirety_real: boolean | null
          jt_ten_jt_trusts: boolean | null
          state_code: string
          state_id: number
          state_name: string
          ugma_age: string | null
          utma_age: string | null
        }
        Insert: {
          community_property?: boolean | null
          community_property_opt_in?: boolean | null
          created_at?: string
          jt_ten_by_entirety_personal?: boolean | null
          jt_ten_by_entirety_real?: boolean | null
          jt_ten_jt_trusts?: boolean | null
          state_code: string
          state_id?: number
          state_name: string
          ugma_age?: string | null
          utma_age?: string | null
        }
        Update: {
          community_property?: boolean | null
          community_property_opt_in?: boolean | null
          created_at?: string
          jt_ten_by_entirety_personal?: boolean | null
          jt_ten_by_entirety_real?: boolean | null
          jt_ten_jt_trusts?: boolean | null
          state_code?: string
          state_id?: number
          state_name?: string
          ugma_age?: string | null
          utma_age?: string | null
        }
        Relationships: []
      }
      dc_investment_menu: {
        Row: {
          asset_class: string | null
          created_at: string
          fund_name: string | null
          menu_id: number
          plan_id: number
          ticker: string
        }
        Insert: {
          asset_class?: string | null
          created_at?: string
          fund_name?: string | null
          menu_id?: number
          plan_id: number
          ticker: string
        }
        Update: {
          asset_class?: string | null
          created_at?: string
          fund_name?: string | null
          menu_id?: number
          plan_id?: number
          ticker?: string
        }
        Relationships: [
          {
            foreignKeyName: "dc_investment_menu_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "dc_plan_list"
            referencedColumns: ["plan_id"]
          },
        ]
      }
      dc_plan_list: {
        Row: {
          broker_of_record: boolean
          business_id: number | null
          created_at: string
          employer_match_100: string | null
          employer_match_50: string | null
          last_menu_update: string | null
          plan_id: number
          plan_name: string | null
          plan_provider: string | null
          profit_sharing: boolean | null
          safe_harbor: boolean | null
          self_directed_option: boolean | null
          total_funds: string | null
        }
        Insert: {
          broker_of_record: boolean
          business_id?: number | null
          created_at?: string
          employer_match_100?: string | null
          employer_match_50?: string | null
          last_menu_update?: string | null
          plan_id?: number
          plan_name?: string | null
          plan_provider?: string | null
          profit_sharing?: boolean | null
          safe_harbor?: boolean | null
          self_directed_option?: boolean | null
          total_funds?: string | null
        }
        Update: {
          broker_of_record?: boolean
          business_id?: number | null
          created_at?: string
          employer_match_100?: string | null
          employer_match_50?: string | null
          last_menu_update?: string | null
          plan_id?: number
          plan_name?: string | null
          plan_provider?: string | null
          profit_sharing?: boolean | null
          safe_harbor?: boolean | null
          self_directed_option?: boolean | null
          total_funds?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dc_plan_list_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "business_details"
            referencedColumns: ["business_id"]
          },
        ]
      }
      details_investor_sentiment: {
        Row: {
          created_at: string
          description: string | null
          sentiment: string | null
          sentiment_id: number
          sentiment_type: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          sentiment?: string | null
          sentiment_id?: number
          sentiment_type?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          sentiment?: string | null
          sentiment_id?: number
          sentiment_type?: string | null
        }
        Relationships: []
      }
      disclosures: {
        Row: {
          content: string | null
          created_at: string
          description: string | null
          disclosure_id: number
          name: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          description?: string | null
          disclosure_id?: number
          name?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          description?: string | null
          disclosure_id?: number
          name?: string | null
        }
        Relationships: []
      }
      earnings_statements: {
        Row: {
          annual_salary: string | null
          awards: string[] | null
          basis_of_pay: string | null
          "car allowance": string[] | null
          charity: string[] | null
          deferred_comp: string[] | null
          dental_pretax: string[] | null
          employer_id: number | null
          er_basic_add: string[] | null
          er_basic_life: string[] | null
          er_dental: string[] | null
          er_ltd: string[] | null
          er_medical: string[] | null
          er_qp: string[] | null
          er_std: string[] | null
          er_vision: string[] | null
          frequency: string | null
          fsa_pretax: string[] | null
          health_plan: string[] | null
          hh_id: number | null
          hours: string | null
          hsa_pretax: string[] | null
          imputed_income: string[] | null
          lt_disability: string[] | null
          medical_pretax: string[] | null
          pay_date: string | null
          period_begin: string | null
          period_end: string | null
          pto_payout: string[] | null
          qp_pretax: string[] | null
          rate: string | null
          regular_pay: string[] | null
          resricted_stock: string[] | null
          roth_401k: string[] | null
          spouse_li_add: string[] | null
          st_disability: string[] | null
          statement_id: number
          stock_plan: string[] | null
          supp_ladd: string[] | null
          supp_plan_pretax: string[] | null
          vision_pretax: string[] | null
          vol_accident: string[] | null
          vol_crit_illness: string[] | null
          vol_life: string[] | null
        }
        Insert: {
          annual_salary?: string | null
          awards?: string[] | null
          basis_of_pay?: string | null
          "car allowance"?: string[] | null
          charity?: string[] | null
          deferred_comp?: string[] | null
          dental_pretax?: string[] | null
          employer_id?: number | null
          er_basic_add?: string[] | null
          er_basic_life?: string[] | null
          er_dental?: string[] | null
          er_ltd?: string[] | null
          er_medical?: string[] | null
          er_qp?: string[] | null
          er_std?: string[] | null
          er_vision?: string[] | null
          frequency?: string | null
          fsa_pretax?: string[] | null
          health_plan?: string[] | null
          hh_id?: number | null
          hours?: string | null
          hsa_pretax?: string[] | null
          imputed_income?: string[] | null
          lt_disability?: string[] | null
          medical_pretax?: string[] | null
          pay_date?: string | null
          period_begin?: string | null
          period_end?: string | null
          pto_payout?: string[] | null
          qp_pretax?: string[] | null
          rate?: string | null
          regular_pay?: string[] | null
          resricted_stock?: string[] | null
          roth_401k?: string[] | null
          spouse_li_add?: string[] | null
          st_disability?: string[] | null
          statement_id: number
          stock_plan?: string[] | null
          supp_ladd?: string[] | null
          supp_plan_pretax?: string[] | null
          vision_pretax?: string[] | null
          vol_accident?: string[] | null
          vol_crit_illness?: string[] | null
          vol_life?: string[] | null
        }
        Update: {
          annual_salary?: string | null
          awards?: string[] | null
          basis_of_pay?: string | null
          "car allowance"?: string[] | null
          charity?: string[] | null
          deferred_comp?: string[] | null
          dental_pretax?: string[] | null
          employer_id?: number | null
          er_basic_add?: string[] | null
          er_basic_life?: string[] | null
          er_dental?: string[] | null
          er_ltd?: string[] | null
          er_medical?: string[] | null
          er_qp?: string[] | null
          er_std?: string[] | null
          er_vision?: string[] | null
          frequency?: string | null
          fsa_pretax?: string[] | null
          health_plan?: string[] | null
          hh_id?: number | null
          hours?: string | null
          hsa_pretax?: string[] | null
          imputed_income?: string[] | null
          lt_disability?: string[] | null
          medical_pretax?: string[] | null
          pay_date?: string | null
          period_begin?: string | null
          period_end?: string | null
          pto_payout?: string[] | null
          qp_pretax?: string[] | null
          rate?: string | null
          regular_pay?: string[] | null
          resricted_stock?: string[] | null
          roth_401k?: string[] | null
          spouse_li_add?: string[] | null
          st_disability?: string[] | null
          statement_id?: number
          stock_plan?: string[] | null
          supp_ladd?: string[] | null
          supp_plan_pretax?: string[] | null
          vision_pretax?: string[] | null
          vol_accident?: string[] | null
          vol_crit_illness?: string[] | null
          vol_life?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "earnings_statements_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "earnings_statements_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      education_plans529: {
        Row: {
          advisor_or_direct: string | null
          created_at: string
          id: number
          in_state_only: boolean | null
          plan_name: string | null
          state: string | null
          total_funds: string | null
        }
        Insert: {
          advisor_or_direct?: string | null
          created_at?: string
          id?: number
          in_state_only?: boolean | null
          plan_name?: string | null
          state?: string | null
          total_funds?: string | null
        }
        Update: {
          advisor_or_direct?: string | null
          created_at?: string
          id?: number
          in_state_only?: boolean | null
          plan_name?: string | null
          state?: string | null
          total_funds?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "education_plans529_state_fkey"
            columns: ["state"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_name"]
          },
        ]
      }
      email_attachments: {
        Row: {
          associatedsegmentid: number | null
          description: string | null
          resourceid: number
          url: string | null
        }
        Insert: {
          associatedsegmentid?: number | null
          description?: string | null
          resourceid?: number
          url?: string | null
        }
        Update: {
          associatedsegmentid?: number | null
          description?: string | null
          resourceid?: number
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_attachments_associatedsegmentid_fkey"
            columns: ["associatedsegmentid"]
            isOneToOne: false
            referencedRelation: "email_segments"
            referencedColumns: ["segment_id"]
          },
        ]
      }
      email_client_custom: {
        Row: {
          client_id: number | null
          customizationdetails: string | null
          customizationid: number
          segment_id: number | null
        }
        Insert: {
          client_id?: number | null
          customizationdetails?: string | null
          customizationid?: number
          segment_id?: number | null
        }
        Update: {
          client_id?: number | null
          customizationdetails?: string | null
          customizationid?: number
          segment_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "email_client_custom_segment_id_fkey"
            columns: ["segment_id"]
            isOneToOne: false
            referencedRelation: "email_segments"
            referencedColumns: ["segment_id"]
          },
        ]
      }
      email_custom_sections: {
        Row: {
          body: string | null
          customsectionid: number
          lastupdated: string | null
          title: string | null
        }
        Insert: {
          body?: string | null
          customsectionid?: number
          lastupdated?: string | null
          title?: string | null
        }
        Update: {
          body?: string | null
          customsectionid?: number
          lastupdated?: string | null
          title?: string | null
        }
        Relationships: []
      }
      email_segment_to_template_mapping: {
        Row: {
          mapping_id: number
          segment_id: number
          segment_order: number
          template_id: number
        }
        Insert: {
          mapping_id?: number
          segment_id: number
          segment_order: number
          template_id: number
        }
        Update: {
          mapping_id?: number
          segment_id?: number
          segment_order?: number
          template_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "email_segment_to_template_mapping_segment_id_fkey"
            columns: ["segment_id"]
            isOneToOne: false
            referencedRelation: "email_segments"
            referencedColumns: ["segment_id"]
          },
          {
            foreignKeyName: "email_segment_to_template_mapping_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "email_templates"
            referencedColumns: ["template_id"]
          },
        ]
      }
      email_segments: {
        Row: {
          default_order: number | null
          email_type: Database["public"]["Enums"]["email_type"] | null
          last_updated: string | null
          segment_body: string | null
          segment_description: string | null
          segment_id: number
          segment_type: Database["public"]["Enums"]["segment_type"] | null
          tags: string | null
          target_audience: string | null
          topic_type: Database["public"]["Enums"]["topic_type"] | null
        }
        Insert: {
          default_order?: number | null
          email_type?: Database["public"]["Enums"]["email_type"] | null
          last_updated?: string | null
          segment_body?: string | null
          segment_description?: string | null
          segment_id?: number
          segment_type?: Database["public"]["Enums"]["segment_type"] | null
          tags?: string | null
          target_audience?: string | null
          topic_type?: Database["public"]["Enums"]["topic_type"] | null
        }
        Update: {
          default_order?: number | null
          email_type?: Database["public"]["Enums"]["email_type"] | null
          last_updated?: string | null
          segment_body?: string | null
          segment_description?: string | null
          segment_id?: number
          segment_type?: Database["public"]["Enums"]["segment_type"] | null
          tags?: string | null
          target_audience?: string | null
          topic_type?: Database["public"]["Enums"]["topic_type"] | null
        }
        Relationships: []
      }
      email_sending_log: {
        Row: {
          client_id: number | null
          logid: number
          senddate: string | null
          status: string | null
          template_id: number | null
        }
        Insert: {
          client_id?: number | null
          logid?: number
          senddate?: string | null
          status?: string | null
          template_id?: number | null
        }
        Update: {
          client_id?: number | null
          logid?: number
          senddate?: string | null
          status?: string | null
          template_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "email_sending_log_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "email_templates"
            referencedColumns: ["template_id"]
          },
        ]
      }
      email_template_types: {
        Row: {
          description: string | null
          templatetypeid: number
          templatetypename: string
        }
        Insert: {
          description?: string | null
          templatetypeid?: number
          templatetypename: string
        }
        Update: {
          description?: string | null
          templatetypeid?: number
          templatetypename?: string
        }
        Relationships: []
      }
      email_templates: {
        Row: {
          created_at: string
          last_updated: string | null
          mapping_id: number | null
          target_audience: string | null
          template_description: string | null
          template_id: number
          template_name: string | null
        }
        Insert: {
          created_at?: string
          last_updated?: string | null
          mapping_id?: number | null
          target_audience?: string | null
          template_description?: string | null
          template_id?: number
          template_name?: string | null
        }
        Update: {
          created_at?: string
          last_updated?: string | null
          mapping_id?: number | null
          target_audience?: string | null
          template_description?: string | null
          template_id?: number
          template_name?: string | null
        }
        Relationships: []
      }
      employer_hi_benefits: {
        Row: {
          benefit_id: number | null
          created_at: string
          employer_id: number
        }
        Insert: {
          benefit_id?: number | null
          created_at?: string
          employer_id?: number
        }
        Update: {
          benefit_id?: number | null
          created_at?: string
          employer_id?: number
        }
        Relationships: []
      }
      employer_hsa: {
        Row: {
          account_id: number
          created_at: string
          employer_id: number | null
        }
        Insert: {
          account_id?: number
          created_at?: string
          employer_id?: number | null
        }
        Update: {
          account_id?: number
          created_at?: string
          employer_id?: number | null
        }
        Relationships: []
      }
      employer_life_add_benefits: {
        Row: {
          created_at: string
          employer_id: number
        }
        Insert: {
          created_at?: string
          employer_id?: number
        }
        Update: {
          created_at?: string
          employer_id?: number
        }
        Relationships: []
      }
      equity_factor_sets: {
        Row: {
          created_at: string
          factor_id: number
          factor_set: string | null
          factor_source: string | null
        }
        Insert: {
          created_at?: string
          factor_id?: number
          factor_set?: string | null
          factor_source?: string | null
        }
        Update: {
          created_at?: string
          factor_id?: number
          factor_set?: string | null
          factor_source?: string | null
        }
        Relationships: []
      }
      estate_trust_beneficiaries: {
        Row: {
          beneficiary_name: string | null
          beneficiary_percentage: string | null
          created_at: string
          id: number
        }
        Insert: {
          beneficiary_name?: string | null
          beneficiary_percentage?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          beneficiary_name?: string | null
          beneficiary_percentage?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      estate_trust_trustees: {
        Row: {
          client_id: number | null
          grantor_trustee: boolean | null
          trust_id: number
          trustee_id: number
          trustee_percentage: number
          trustee_type: string | null
        }
        Insert: {
          client_id?: number | null
          grantor_trustee?: boolean | null
          trust_id: number
          trustee_id?: never
          trustee_percentage: number
          trustee_type?: string | null
        }
        Update: {
          client_id?: number | null
          grantor_trustee?: boolean | null
          trust_id?: number
          trustee_id?: never
          trustee_percentage?: number
          trustee_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estate_trust_trustees_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "estate_trust_trustees_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "estate_trust_trustees_trust_id_fkey"
            columns: ["trust_id"]
            isOneToOne: false
            referencedRelation: "estate_trusts"
            referencedColumns: ["trust_id"]
          },
        ]
      }
      estate_trusts: {
        Row: {
          created_at: string
          hh_id: number | null
          trust_id: number
          trust_type: Database["public"]["Enums"]["trust_type"] | null
        }
        Insert: {
          created_at?: string
          hh_id?: number | null
          trust_id?: number
          trust_type?: Database["public"]["Enums"]["trust_type"] | null
        }
        Update: {
          created_at?: string
          hh_id?: number | null
          trust_id?: number
          trust_type?: Database["public"]["Enums"]["trust_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "estate_trusts_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "estate_trusts_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      estate_trusts_clt: {
        Row: {
          created_at: string
          establish_at_death: boolean | null
          grantor_trust: boolean | null
          trust_date: string | null
          trust_domicile: string | null
          trust_id: number
          trust_name: string | null
        }
        Insert: {
          created_at?: string
          establish_at_death?: boolean | null
          grantor_trust?: boolean | null
          trust_date?: string | null
          trust_domicile?: string | null
          trust_id?: number
          trust_name?: string | null
        }
        Update: {
          created_at?: string
          establish_at_death?: boolean | null
          grantor_trust?: boolean | null
          trust_date?: string | null
          trust_domicile?: string | null
          trust_id?: number
          trust_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estate_trusts_clt_trust_domicile_fkey"
            columns: ["trust_domicile"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_code"]
          },
          {
            foreignKeyName: "estate_trusts_clt_trust_id_fkey"
            columns: ["trust_id"]
            isOneToOne: true
            referencedRelation: "estate_trusts"
            referencedColumns: ["trust_id"]
          },
        ]
      }
      estate_trusts_crt: {
        Row: {
          created_at: string
          irc_rate: string | null
          payment_type: Database["public"]["Enums"]["trust_payment_type"] | null
          term_years: string | null
          trust_date: string | null
          trust_domicile: string | null
          trust_id: number
          trust_name: string | null
        }
        Insert: {
          created_at?: string
          irc_rate?: string | null
          payment_type?:
            | Database["public"]["Enums"]["trust_payment_type"]
            | null
          term_years?: string | null
          trust_date?: string | null
          trust_domicile?: string | null
          trust_id?: number
          trust_name?: string | null
        }
        Update: {
          created_at?: string
          irc_rate?: string | null
          payment_type?:
            | Database["public"]["Enums"]["trust_payment_type"]
            | null
          term_years?: string | null
          trust_date?: string | null
          trust_domicile?: string | null
          trust_id?: number
          trust_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estate_trusts_crt_trust_domicile_fkey"
            columns: ["trust_domicile"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_code"]
          },
          {
            foreignKeyName: "estate_trusts_crt_trust_id_fkey"
            columns: ["trust_id"]
            isOneToOne: true
            referencedRelation: "estate_trusts"
            referencedColumns: ["trust_id"]
          },
        ]
      }
      estate_trusts_cst: {
        Row: {
          created_at: string
          trust_id: number
        }
        Insert: {
          created_at?: string
          trust_id?: number
        }
        Update: {
          created_at?: string
          trust_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "estate_trusts_cst_trust_id_fkey"
            columns: ["trust_id"]
            isOneToOne: true
            referencedRelation: "estate_trusts"
            referencedColumns: ["trust_id"]
          },
        ]
      }
      estate_trusts_grt: {
        Row: {
          created_at: string
          grantor: number | null
          irc_rate: string | null
          payment_type: Database["public"]["Enums"]["trust_payment_type"] | null
          rolling_grat: boolean | null
          rolling_terms: string | null
          trust_date: string | null
          trust_domicile: string | null
          trust_id: number
          trust_name: string | null
          trust_term: string | null
          with_reversion: boolean | null
        }
        Insert: {
          created_at?: string
          grantor?: number | null
          irc_rate?: string | null
          payment_type?:
            | Database["public"]["Enums"]["trust_payment_type"]
            | null
          rolling_grat?: boolean | null
          rolling_terms?: string | null
          trust_date?: string | null
          trust_domicile?: string | null
          trust_id?: number
          trust_name?: string | null
          trust_term?: string | null
          with_reversion?: boolean | null
        }
        Update: {
          created_at?: string
          grantor?: number | null
          irc_rate?: string | null
          payment_type?:
            | Database["public"]["Enums"]["trust_payment_type"]
            | null
          rolling_grat?: boolean | null
          rolling_terms?: string | null
          trust_date?: string | null
          trust_domicile?: string | null
          trust_id?: number
          trust_name?: string | null
          trust_term?: string | null
          with_reversion?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "estate_trusts_grt_trust_domicile_fkey"
            columns: ["trust_domicile"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_code"]
          },
          {
            foreignKeyName: "estate_trusts_grt_trust_id_fkey"
            columns: ["trust_id"]
            isOneToOne: true
            referencedRelation: "estate_trusts"
            referencedColumns: ["trust_id"]
          },
        ]
      }
      estate_trusts_idgt: {
        Row: {
          created_at: string
          irc_rate: string | null
          term_years: string | null
          trust_date: string | null
          trust_domicile: string | null
          trust_id: number
          trust_name: string | null
        }
        Insert: {
          created_at?: string
          irc_rate?: string | null
          term_years?: string | null
          trust_date?: string | null
          trust_domicile?: string | null
          trust_id?: number
          trust_name?: string | null
        }
        Update: {
          created_at?: string
          irc_rate?: string | null
          term_years?: string | null
          trust_date?: string | null
          trust_domicile?: string | null
          trust_id?: number
          trust_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estate_trusts_idgt_trust_domicile_fkey"
            columns: ["trust_domicile"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_code"]
          },
          {
            foreignKeyName: "estate_trusts_idgt_trust_id_fkey"
            columns: ["trust_id"]
            isOneToOne: true
            referencedRelation: "estate_trusts"
            referencedColumns: ["trust_id"]
          },
        ]
      }
      estate_trusts_ilit: {
        Row: {
          created_at: string
          crummey_powers: boolean | null
          li_policy_id: string | null
          sprinkle_provisions: boolean | null
          trust_date: string | null
          trust_domicile: string | null
          trust_id: number
          trust_name: string | null
          trust_tin: string | null
        }
        Insert: {
          created_at?: string
          crummey_powers?: boolean | null
          li_policy_id?: string | null
          sprinkle_provisions?: boolean | null
          trust_date?: string | null
          trust_domicile?: string | null
          trust_id?: number
          trust_name?: string | null
          trust_tin?: string | null
        }
        Update: {
          created_at?: string
          crummey_powers?: boolean | null
          li_policy_id?: string | null
          sprinkle_provisions?: boolean | null
          trust_date?: string | null
          trust_domicile?: string | null
          trust_id?: number
          trust_name?: string | null
          trust_tin?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estate_trusts_ilit_trust_domicile_fkey"
            columns: ["trust_domicile"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_code"]
          },
          {
            foreignKeyName: "estate_trusts_ilit_trust_id_fkey"
            columns: ["trust_id"]
            isOneToOne: true
            referencedRelation: "estate_trusts"
            referencedColumns: ["trust_id"]
          },
        ]
      }
      estate_trusts_irrevocable: {
        Row: {
          created_at: string
          trust_date: string | null
          trust_id: number
          trust_name: string | null
        }
        Insert: {
          created_at?: string
          trust_date?: string | null
          trust_id?: number
          trust_name?: string | null
        }
        Update: {
          created_at?: string
          trust_date?: string | null
          trust_id?: number
          trust_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estate_trusts_irrevocable_trust_id_fkey"
            columns: ["trust_id"]
            isOneToOne: true
            referencedRelation: "estate_trusts"
            referencedColumns: ["trust_id"]
          },
        ]
      }
      estate_trusts_qprt: {
        Row: {
          created_at: string
          grantor: number | null
          irc_rate: string | null
          remainder_interest: string | null
          residence: number | null
          retained_interest: string | null
          term_years: string | null
          trust_date: string | null
          trust_id: number
          trust_name: string | null
          trust_state: string | null
          with_reversion: boolean | null
        }
        Insert: {
          created_at?: string
          grantor?: number | null
          irc_rate?: string | null
          remainder_interest?: string | null
          residence?: number | null
          retained_interest?: string | null
          term_years?: string | null
          trust_date?: string | null
          trust_id?: number
          trust_name?: string | null
          trust_state?: string | null
          with_reversion?: boolean | null
        }
        Update: {
          created_at?: string
          grantor?: number | null
          irc_rate?: string | null
          remainder_interest?: string | null
          residence?: number | null
          retained_interest?: string | null
          term_years?: string | null
          trust_date?: string | null
          trust_id?: number
          trust_name?: string | null
          trust_state?: string | null
          with_reversion?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "estate_trusts_qprt_residence_fkey"
            columns: ["residence"]
            isOneToOne: false
            referencedRelation: "property_personal_re"
            referencedColumns: ["property_id"]
          },
          {
            foreignKeyName: "estate_trusts_qprt_trust_id_fkey"
            columns: ["trust_id"]
            isOneToOne: true
            referencedRelation: "estate_trusts"
            referencedColumns: ["trust_id"]
          },
          {
            foreignKeyName: "estate_trusts_qprt_trust_state_fkey"
            columns: ["trust_state"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_code"]
          },
        ]
      }
      estate_trusts_qtip: {
        Row: {
          created_at: string
          grantor: number | null
          sprinkle_provision: boolean | null
          trust_date: string | null
          trust_id: number
          trust_name: string | null
        }
        Insert: {
          created_at?: string
          grantor?: number | null
          sprinkle_provision?: boolean | null
          trust_date?: string | null
          trust_id?: number
          trust_name?: string | null
        }
        Update: {
          created_at?: string
          grantor?: number | null
          sprinkle_provision?: boolean | null
          trust_date?: string | null
          trust_id?: number
          trust_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estate_trusts_qtip_trust_id_fkey"
            columns: ["trust_id"]
            isOneToOne: true
            referencedRelation: "estate_trusts"
            referencedColumns: ["trust_id"]
          },
        ]
      }
      estate_trusts_revocable: {
        Row: {
          cot_on_file: boolean | null
          created_at: string
          full_trust_on_file: boolean | null
          last_amended: string | null
          trust_date: string | null
          trust_domicile: string | null
          trust_id: number
          trust_name: string | null
        }
        Insert: {
          cot_on_file?: boolean | null
          created_at?: string
          full_trust_on_file?: boolean | null
          last_amended?: string | null
          trust_date?: string | null
          trust_domicile?: string | null
          trust_id?: number
          trust_name?: string | null
        }
        Update: {
          cot_on_file?: boolean | null
          created_at?: string
          full_trust_on_file?: boolean | null
          last_amended?: string | null
          trust_date?: string | null
          trust_domicile?: string | null
          trust_id?: number
          trust_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estate_trusts_revocable_trust_domicile_fkey"
            columns: ["trust_domicile"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_code"]
          },
          {
            foreignKeyName: "estate_trusts_revocable_trust_id_fkey"
            columns: ["trust_id"]
            isOneToOne: true
            referencedRelation: "estate_trusts"
            referencedColumns: ["trust_id"]
          },
        ]
      }
      estate_trusts_slat: {
        Row: {
          created_at: string
          trust_id: number
        }
        Insert: {
          created_at?: string
          trust_id?: number
        }
        Update: {
          created_at?: string
          trust_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "estate_trusts_slat_trust_id_fkey"
            columns: ["trust_id"]
            isOneToOne: true
            referencedRelation: "estate_trusts"
            referencedColumns: ["trust_id"]
          },
        ]
      }
      expenses: {
        Row: {
          category: string | null
          created_at: string
          end_date: string | null
          estimated_expense: boolean | null
          expense__due_date: string | null
          expense_amount: string | null
          expense_description: string | null
          expense_frequency: Database["public"]["Enums"]["expense_frequency"]
          expense_id: number
          hh_id: number | null
          is_essential: boolean | null
          recurring_expense: boolean | null
          start_date: string | null
          sub_category: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          end_date?: string | null
          estimated_expense?: boolean | null
          expense__due_date?: string | null
          expense_amount?: string | null
          expense_description?: string | null
          expense_frequency: Database["public"]["Enums"]["expense_frequency"]
          expense_id?: number
          hh_id?: number | null
          is_essential?: boolean | null
          recurring_expense?: boolean | null
          start_date?: string | null
          sub_category?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          end_date?: string | null
          estimated_expense?: boolean | null
          expense__due_date?: string | null
          expense_amount?: string | null
          expense_description?: string | null
          expense_frequency?: Database["public"]["Enums"]["expense_frequency"]
          expense_id?: number
          hh_id?: number | null
          is_essential?: boolean | null
          recurring_expense?: boolean | null
          start_date?: string | null
          sub_category?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expenses_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "expenses_category"
            referencedColumns: ["category_name"]
          },
          {
            foreignKeyName: "expenses_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "expenses_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "expenses_sub_category_fkey"
            columns: ["sub_category"]
            isOneToOne: false
            referencedRelation: "expenses_subcategory"
            referencedColumns: ["subcategory_name"]
          },
        ]
      }
      expenses_category: {
        Row: {
          category_id: number
          category_name: string
          created_at: string
        }
        Insert: {
          category_id?: number
          category_name: string
          created_at?: string
        }
        Update: {
          category_id?: number
          category_name?: string
          created_at?: string
        }
        Relationships: []
      }
      expenses_subcategory: {
        Row: {
          budget_category: string | null
          category_id: number
          created_at: string
          subcategory_id: number
          subcategory_name: string
        }
        Insert: {
          budget_category?: string | null
          category_id: number
          created_at?: string
          subcategory_id?: number
          subcategory_name: string
        }
        Update: {
          budget_category?: string | null
          category_id?: number
          created_at?: string
          subcategory_id?: number
          subcategory_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "expenses_subcategory_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "expenses_category"
            referencedColumns: ["category_id"]
          },
        ]
      }
      fenrisk_advisors: {
        Row: {
          advisor_id: number
          crd_number: string | null
          created_at: string | null
          primary_title: string | null
          secondary_title: string | null
          specialist_roles: string[] | null
        }
        Insert: {
          advisor_id?: number
          crd_number?: string | null
          created_at?: string | null
          primary_title?: string | null
          secondary_title?: string | null
          specialist_roles?: string[] | null
        }
        Update: {
          advisor_id?: number
          crd_number?: string | null
          created_at?: string | null
          primary_title?: string | null
          secondary_title?: string | null
          specialist_roles?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "fenrisk_advisors_advisor_id_fkey"
            columns: ["advisor_id"]
            isOneToOne: true
            referencedRelation: "fenrisk_members"
            referencedColumns: ["fenrisk_id"]
          },
        ]
      }
      fenrisk_advisorteams: {
        Row: {
          advisor_group_id: number | null
          advisor_id: number | null
          advisor_role: string | null
          advisorteam_id: number
          created_at: string
        }
        Insert: {
          advisor_group_id?: number | null
          advisor_id?: number | null
          advisor_role?: string | null
          advisorteam_id?: number
          created_at?: string
        }
        Update: {
          advisor_group_id?: number | null
          advisor_id?: number | null
          advisor_role?: string | null
          advisorteam_id?: number
          created_at?: string
        }
        Relationships: []
      }
      fenrisk_alerts: {
        Row: {
          alert_code: string | null
          alert_id: number
          alert_language: string | null
          alert_type: string | null
          client_id: number | null
          client_language: string | null
          created_at: string
          days_in_drift: number | null
          drift_difference: number | null
          implication: string | null
          score_id: number
          trigger_id: number | null
        }
        Insert: {
          alert_code?: string | null
          alert_id?: number
          alert_language?: string | null
          alert_type?: string | null
          client_id?: number | null
          client_language?: string | null
          created_at?: string
          days_in_drift?: number | null
          drift_difference?: number | null
          implication?: string | null
          score_id: number
          trigger_id?: number | null
        }
        Update: {
          alert_code?: string | null
          alert_id?: number
          alert_language?: string | null
          alert_type?: string | null
          client_id?: number | null
          client_language?: string | null
          created_at?: string
          days_in_drift?: number | null
          drift_difference?: number | null
          implication?: string | null
          score_id?: number
          trigger_id?: number | null
        }
        Relationships: []
      }
      fenrisk_answers: {
        Row: {
          answer_id: number
          answer_text: string | null
          created_at: string
          next_question_id: number | null
          question_id: number
          question_key: string | null
        }
        Insert: {
          answer_id?: number
          answer_text?: string | null
          created_at?: string
          next_question_id?: number | null
          question_id: number
          question_key?: string | null
        }
        Update: {
          answer_id?: number
          answer_text?: string | null
          created_at?: string
          next_question_id?: number | null
          question_id?: number
          question_key?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fenrisk_answers_next_question_id_fkey"
            columns: ["next_question_id"]
            isOneToOne: false
            referencedRelation: "fenrisk_questions"
            referencedColumns: ["question_id"]
          },
          {
            foreignKeyName: "fenrisk_answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "fenrisk_questions"
            referencedColumns: ["question_id"]
          },
        ]
      }
      fenrisk_client_scores: {
        Row: {
          client_id: number
          created_at: string
          current_risk: number[] | null
          expected_risk: number[] | null
          required_risk: number[] | null
          risk_appetite: number[] | null
          risk_aptitude: number[] | null
          score_date: string[] | null
        }
        Insert: {
          client_id?: number
          created_at?: string
          current_risk?: number[] | null
          expected_risk?: number[] | null
          required_risk?: number[] | null
          risk_appetite?: number[] | null
          risk_aptitude?: number[] | null
          score_date?: string[] | null
        }
        Update: {
          client_id?: number
          created_at?: string
          current_risk?: number[] | null
          expected_risk?: number[] | null
          required_risk?: number[] | null
          risk_appetite?: number[] | null
          risk_aptitude?: number[] | null
          score_date?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "fenrisk_client_scores_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "fenrisk_client_scores_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
        ]
      }
      fenrisk_documents: {
        Row: {
          created_at: string
          document: string | null
          document_id: number
          document_subtype: string | null
          document_type: Database["public"]["Enums"]["document_type"] | null
        }
        Insert: {
          created_at?: string
          document?: string | null
          document_id?: number
          document_subtype?: string | null
          document_type?: Database["public"]["Enums"]["document_type"] | null
        }
        Update: {
          created_at?: string
          document?: string | null
          document_id?: number
          document_subtype?: string | null
          document_type?: Database["public"]["Enums"]["document_type"] | null
        }
        Relationships: []
      }
      fenrisk_financial_plan_assumptions: {
        Row: {
          alt_retirement_date: string | null
          alt2_retirement_date: string | null
          broad_inflation_assumption: string | null
          client_id: number | null
          created_at: string
          education_inflation: string | null
          fp_id: number
          healthcare_inflation: string | null
          irs_life_expectancy: string | null
          plan_id: number | null
          plan_life_expectancy: string | null
          plan_ltcma: string | null
          retirement_date: string | null
          testresults_life_expectancy: string | null
        }
        Insert: {
          alt_retirement_date?: string | null
          alt2_retirement_date?: string | null
          broad_inflation_assumption?: string | null
          client_id?: number | null
          created_at?: string
          education_inflation?: string | null
          fp_id?: number
          healthcare_inflation?: string | null
          irs_life_expectancy?: string | null
          plan_id?: number | null
          plan_life_expectancy?: string | null
          plan_ltcma?: string | null
          retirement_date?: string | null
          testresults_life_expectancy?: string | null
        }
        Update: {
          alt_retirement_date?: string | null
          alt2_retirement_date?: string | null
          broad_inflation_assumption?: string | null
          client_id?: number | null
          created_at?: string
          education_inflation?: string | null
          fp_id?: number
          healthcare_inflation?: string | null
          irs_life_expectancy?: string | null
          plan_id?: number | null
          plan_life_expectancy?: string | null
          plan_ltcma?: string | null
          retirement_date?: string | null
          testresults_life_expectancy?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fenrisk_financial_plan_assumptions_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "fenrisk_financial_plan_assumptions_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "fenrisk_financial_plan_assumptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "fenrisk_financial_plans"
            referencedColumns: ["plan_id"]
          },
        ]
      }
      fenrisk_financial_plans: {
        Row: {
          created_at: string
          hh_id: number | null
          joint_plan: boolean | null
          multi_generational_plan: boolean | null
          plan_id: number
          plan_name: string | null
        }
        Insert: {
          created_at?: string
          hh_id?: number | null
          joint_plan?: boolean | null
          multi_generational_plan?: boolean | null
          plan_id?: number
          plan_name?: string | null
        }
        Update: {
          created_at?: string
          hh_id?: number | null
          joint_plan?: boolean | null
          multi_generational_plan?: boolean | null
          plan_id?: number
          plan_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fenrisk_financial_plans_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "fenrisk_financial_plans_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      fenrisk_fp_cashflow_goals: {
        Row: {
          created_at: string
          goal_amount: string | null
          goal_category: string | null
          goal_duration: string | null
          goal_frequency: Database["public"]["Enums"]["goal_frequency"] | null
          goal_id: number
          goal_name: string | null
          goal_rank: string | null
          hh_id: number | null
          start_date: string | null
        }
        Insert: {
          created_at?: string
          goal_amount?: string | null
          goal_category?: string | null
          goal_duration?: string | null
          goal_frequency?: Database["public"]["Enums"]["goal_frequency"] | null
          goal_id?: number
          goal_name?: string | null
          goal_rank?: string | null
          hh_id?: number | null
          start_date?: string | null
        }
        Update: {
          created_at?: string
          goal_amount?: string | null
          goal_category?: string | null
          goal_duration?: string | null
          goal_frequency?: Database["public"]["Enums"]["goal_frequency"] | null
          goal_id?: number
          goal_name?: string | null
          goal_rank?: string | null
          hh_id?: number | null
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fenrisk_fp_cashflow_goals_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "fenrisk_fp_cashflow_goals_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      fenrisk_fp_investment_goals: {
        Row: {
          client_id: number | null
          created_at: string
          current_assets_earmarked: string | null
          goal_amount: string | null
          goal_frequency: string | null
          goal_id: number
          hh_id: number | null
          joint_goal: boolean | null
          plan_id: number | null
          start_date: string | null
        }
        Insert: {
          client_id?: number | null
          created_at?: string
          current_assets_earmarked?: string | null
          goal_amount?: string | null
          goal_frequency?: string | null
          goal_id?: number
          hh_id?: number | null
          joint_goal?: boolean | null
          plan_id?: number | null
          start_date?: string | null
        }
        Update: {
          client_id?: number | null
          created_at?: string
          current_assets_earmarked?: string | null
          goal_amount?: string | null
          goal_frequency?: string | null
          goal_id?: number
          hh_id?: number | null
          joint_goal?: boolean | null
          plan_id?: number | null
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fenrisk_fp_investment_goals_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "fenrisk_fp_investment_goals_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "fenrisk_fp_investment_goals_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "fenrisk_fp_investment_goals_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      fenrisk_members: {
        Row: {
          advisor: boolean | null
          created_at: string
          fenrisk_id: number
          first_name: string
          last_name: string
        }
        Insert: {
          advisor?: boolean | null
          created_at?: string
          fenrisk_id?: number
          first_name: string
          last_name: string
        }
        Update: {
          advisor?: boolean | null
          created_at?: string
          fenrisk_id?: number
          first_name?: string
          last_name?: string
        }
        Relationships: []
      }
      fenrisk_questionnaires: {
        Row: {
          created_at: string
          description: string | null
          questionnaire_id: number
          questionnaire_name: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          questionnaire_id?: number
          questionnaire_name?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          questionnaire_id?: number
          questionnaire_name?: string | null
          type?: string | null
        }
        Relationships: []
      }
      fenrisk_questions: {
        Row: {
          created_at: string
          is_branching: boolean | null
          is_followup_question: number | null
          question_description: string | null
          question_id: number
          question_name: string | null
          question_subtype: string | null
          question_text: string | null
          question_type: string | null
        }
        Insert: {
          created_at?: string
          is_branching?: boolean | null
          is_followup_question?: number | null
          question_description?: string | null
          question_id?: number
          question_name?: string | null
          question_subtype?: string | null
          question_text?: string | null
          question_type?: string | null
        }
        Update: {
          created_at?: string
          is_branching?: boolean | null
          is_followup_question?: number | null
          question_description?: string | null
          question_id?: number
          question_name?: string | null
          question_subtype?: string | null
          question_text?: string | null
          question_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fenrisk_questions_is_followup_question_fkey"
            columns: ["is_followup_question"]
            isOneToOne: false
            referencedRelation: "fenrisk_questions"
            referencedColumns: ["question_id"]
          },
        ]
      }
      fenrisk_recommendations: {
        Row: {
          created_at: string
          recommendation_id: number
        }
        Insert: {
          created_at?: string
          recommendation_id?: number
        }
        Update: {
          created_at?: string
          recommendation_id?: number
        }
        Relationships: []
      }
      fenrisk_risk_appetite: {
        Row: {
          appetite_id: number
          created_at: string
        }
        Insert: {
          appetite_id?: number
          created_at?: string
        }
        Update: {
          appetite_id?: number
          created_at?: string
        }
        Relationships: []
      }
      fenrisk_risk_capacity: {
        Row: {
          created_at: string
          dependents_score: number | null
          dual_income_score: number | null
          earnings_variability_score: number | null
          expense_ratio_score: number | null
          id: number
          income_replace_score: number | null
          job_stability_score: number | null
          location_score: number | null
          spending_pattern_score: number | null
          years_to_retire_score: number | null
        }
        Insert: {
          created_at?: string
          dependents_score?: number | null
          dual_income_score?: number | null
          earnings_variability_score?: number | null
          expense_ratio_score?: number | null
          id?: number
          income_replace_score?: number | null
          job_stability_score?: number | null
          location_score?: number | null
          spending_pattern_score?: number | null
          years_to_retire_score?: number | null
        }
        Update: {
          created_at?: string
          dependents_score?: number | null
          dual_income_score?: number | null
          earnings_variability_score?: number | null
          expense_ratio_score?: number | null
          id?: number
          income_replace_score?: number | null
          job_stability_score?: number | null
          location_score?: number | null
          spending_pattern_score?: number | null
          years_to_retire_score?: number | null
        }
        Relationships: []
      }
      fenrisk_staff: {
        Row: {
          created_at: string
          fenrisk_id: number
          primary_title: string | null
          secondary_title: string | null
        }
        Insert: {
          created_at?: string
          fenrisk_id?: number
          primary_title?: string | null
          secondary_title?: string | null
        }
        Update: {
          created_at?: string
          fenrisk_id?: number
          primary_title?: string | null
          secondary_title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fenrisk_staff_fenrisk_id_fkey"
            columns: ["fenrisk_id"]
            isOneToOne: true
            referencedRelation: "fenrisk_members"
            referencedColumns: ["fenrisk_id"]
          },
        ]
      }
      fenrisk_subtask_type: {
        Row: {
          created_at: string
          subtype_id: number
          type_id: number | null
        }
        Insert: {
          created_at?: string
          subtype_id?: number
          type_id?: number | null
        }
        Update: {
          created_at?: string
          subtype_id?: number
          type_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fenrisk_subtask_type_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "fenrisk_task_type"
            referencedColumns: ["type_id"]
          },
        ]
      }
      fenrisk_task_comments: {
        Row: {
          comment: string | null
          comment_by: number | null
          comment_id: number
          created_at: string
          date: string | null
          task_id: number | null
        }
        Insert: {
          comment?: string | null
          comment_by?: number | null
          comment_id?: number
          created_at?: string
          date?: string | null
          task_id?: number | null
        }
        Update: {
          comment?: string | null
          comment_by?: number | null
          comment_id?: number
          created_at?: string
          date?: string | null
          task_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fenrisk_task_comments_comment_by_fkey"
            columns: ["comment_by"]
            isOneToOne: false
            referencedRelation: "fenrisk_members"
            referencedColumns: ["fenrisk_id"]
          },
          {
            foreignKeyName: "fenrisk_task_comments_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "fenrisk_tasks"
            referencedColumns: ["task_id"]
          },
        ]
      }
      fenrisk_task_reminders: {
        Row: {
          created_at: string
          reminder_date: string | null
          reminder_id: number
          reminder_interval: string | null
          reminder_type: string | null
          task_id: number | null
        }
        Insert: {
          created_at?: string
          reminder_date?: string | null
          reminder_id?: number
          reminder_interval?: string | null
          reminder_type?: string | null
          task_id?: number | null
        }
        Update: {
          created_at?: string
          reminder_date?: string | null
          reminder_id?: number
          reminder_interval?: string | null
          reminder_type?: string | null
          task_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fenrisk_task_reminders_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "fenrisk_tasks"
            referencedColumns: ["task_id"]
          },
        ]
      }
      fenrisk_task_type: {
        Row: {
          created_at: string
          description: string | null
          type_id: number
          type_name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          type_id?: number
          type_name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          type_id?: number
          type_name?: string | null
        }
        Relationships: []
      }
      fenrisk_tasks: {
        Row: {
          completion_date: string | null
          created_at: string
          description: string | null
          due_date: string | null
          member_id: number | null
          priority: Database["public"]["Enums"]["priority_enum"] | null
          start_date: string | null
          status: Database["public"]["Enums"]["status_enum"] | null
          task_id: number
          task_type: string | null
          team_id: number | null
          title: string | null
        }
        Insert: {
          completion_date?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          member_id?: number | null
          priority?: Database["public"]["Enums"]["priority_enum"] | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["status_enum"] | null
          task_id?: number
          task_type?: string | null
          team_id?: number | null
          title?: string | null
        }
        Update: {
          completion_date?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          member_id?: number | null
          priority?: Database["public"]["Enums"]["priority_enum"] | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["status_enum"] | null
          task_id?: number
          task_type?: string | null
          team_id?: number | null
          title?: string | null
        }
        Relationships: []
      }
      fenrisk_teams: {
        Row: {
          created_at: string
          description: string | null
          team_id: number
          team_name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          team_id?: number
          team_name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          team_id?: number
          team_name?: string | null
        }
        Relationships: []
      }
      fenrisk_triggers: {
        Row: {
          alert_language: string | null
          alert_negative: boolean | null
          alert_type: string | null
          client_language: string | null
          created_at: string
          implication: string | null
          trigger_id: number
          trigger_name: string
        }
        Insert: {
          alert_language?: string | null
          alert_negative?: boolean | null
          alert_type?: string | null
          client_language?: string | null
          created_at?: string
          implication?: string | null
          trigger_id?: number
          trigger_name: string
        }
        Update: {
          alert_language?: string | null
          alert_negative?: boolean | null
          alert_type?: string | null
          client_language?: string | null
          created_at?: string
          implication?: string | null
          trigger_id?: number
          trigger_name?: string
        }
        Relationships: []
      }
      household_budgets: {
        Row: {
          alcoholic_beverages: string | null
          benchmark_budget: boolean | null
          budget_id: number
          budget_year: number | null
          cash_contributions: string | null
          cellular_phone_service: string | null
          clothing_items_and_services: string | null
          education: string | null
          electricity: string | null
          fees_and_admissions: string | null
          food_home: string | null
          food_out: string | null
          furniture_and_appliances: string | null
          gasoline: string | null
          health_insurance: string | null
          heating_fuels_other: string | null
          hh_id: number | null
          home_maintenance_and_repairs: string | null
          household_operations: string | null
          housekeeping_supplies: string | null
          life_and_personal_insurance: string | null
          media_hardware_and_services: string | null
          medical_services: string | null
          medical_supplies: string | null
          miscellaneous: string | null
          mortgage_and_rent: string | null
          natural_gas: string | null
          other_debt_payments: string | null
          other_lodging: string | null
          personal_care: string | null
          pets: string | null
          prescription_drugs: string | null
          public_and_other_transportation: string | null
          reading: string | null
          residential_phone_service: string | null
          savings: string | null
          tobacco_and_smoking: string | null
          toys_and_hobbies: string | null
          vehicle_insurance: string | null
          vehicle_maintenance_and_repairs: string | null
          vehicle_purchase_and_lease: string | null
          water_and_public_services: string | null
        }
        Insert: {
          alcoholic_beverages?: string | null
          benchmark_budget?: boolean | null
          budget_id: number
          budget_year?: number | null
          cash_contributions?: string | null
          cellular_phone_service?: string | null
          clothing_items_and_services?: string | null
          education?: string | null
          electricity?: string | null
          fees_and_admissions?: string | null
          food_home?: string | null
          food_out?: string | null
          furniture_and_appliances?: string | null
          gasoline?: string | null
          health_insurance?: string | null
          heating_fuels_other?: string | null
          hh_id?: number | null
          home_maintenance_and_repairs?: string | null
          household_operations?: string | null
          housekeeping_supplies?: string | null
          life_and_personal_insurance?: string | null
          media_hardware_and_services?: string | null
          medical_services?: string | null
          medical_supplies?: string | null
          miscellaneous?: string | null
          mortgage_and_rent?: string | null
          natural_gas?: string | null
          other_debt_payments?: string | null
          other_lodging?: string | null
          personal_care?: string | null
          pets?: string | null
          prescription_drugs?: string | null
          public_and_other_transportation?: string | null
          reading?: string | null
          residential_phone_service?: string | null
          savings?: string | null
          tobacco_and_smoking?: string | null
          toys_and_hobbies?: string | null
          vehicle_insurance?: string | null
          vehicle_maintenance_and_repairs?: string | null
          vehicle_purchase_and_lease?: string | null
          water_and_public_services?: string | null
        }
        Update: {
          alcoholic_beverages?: string | null
          benchmark_budget?: boolean | null
          budget_id?: number
          budget_year?: number | null
          cash_contributions?: string | null
          cellular_phone_service?: string | null
          clothing_items_and_services?: string | null
          education?: string | null
          electricity?: string | null
          fees_and_admissions?: string | null
          food_home?: string | null
          food_out?: string | null
          furniture_and_appliances?: string | null
          gasoline?: string | null
          health_insurance?: string | null
          heating_fuels_other?: string | null
          hh_id?: number | null
          home_maintenance_and_repairs?: string | null
          household_operations?: string | null
          housekeeping_supplies?: string | null
          life_and_personal_insurance?: string | null
          media_hardware_and_services?: string | null
          medical_services?: string | null
          medical_supplies?: string | null
          miscellaneous?: string | null
          mortgage_and_rent?: string | null
          natural_gas?: string | null
          other_debt_payments?: string | null
          other_lodging?: string | null
          personal_care?: string | null
          pets?: string | null
          prescription_drugs?: string | null
          public_and_other_transportation?: string | null
          reading?: string | null
          residential_phone_service?: string | null
          savings?: string | null
          tobacco_and_smoking?: string | null
          toys_and_hobbies?: string | null
          vehicle_insurance?: string | null
          vehicle_maintenance_and_repairs?: string | null
          vehicle_purchase_and_lease?: string | null
          water_and_public_services?: string | null
        }
        Relationships: []
      }
      household_children: {
        Row: {
          age: string | null
          birthdate: string | null
          child_id: number
          created_at: string
          dependent: boolean | null
          first_name: string | null
          full_time_student: boolean | null
          hh_id: number | null
          last_name: string | null
          parents: Json | null
          prior_marriage: boolean
        }
        Insert: {
          age?: string | null
          birthdate?: string | null
          child_id?: number
          created_at?: string
          dependent?: boolean | null
          first_name?: string | null
          full_time_student?: boolean | null
          hh_id?: number | null
          last_name?: string | null
          parents?: Json | null
          prior_marriage?: boolean
        }
        Update: {
          age?: string | null
          birthdate?: string | null
          child_id?: number
          created_at?: string
          dependent?: boolean | null
          first_name?: string | null
          full_time_student?: boolean | null
          hh_id?: number | null
          last_name?: string | null
          parents?: Json | null
          prior_marriage?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "household_children_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_children_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      household_details: {
        Row: {
          address_is_primary_residence: boolean | null
          city: string | null
          created_at: string
          details_id: number
          filing_state: string | null
          filing_status:
            | Database["public"]["Enums"]["filing_status_enum"]
            | null
          hh_id: number
          hh_summary: string | null
          household_stage:
            | Database["public"]["Enums"]["household_stage_type"]
            | null
          residence_owned: boolean | null
          state: string | null
          street_address: string | null
          street_address2: string | null
          wealth_level: string | null
          zip_code: string | null
        }
        Insert: {
          address_is_primary_residence?: boolean | null
          city?: string | null
          created_at?: string
          details_id?: number
          filing_state?: string | null
          filing_status?:
            | Database["public"]["Enums"]["filing_status_enum"]
            | null
          hh_id: number
          hh_summary?: string | null
          household_stage?:
            | Database["public"]["Enums"]["household_stage_type"]
            | null
          residence_owned?: boolean | null
          state?: string | null
          street_address?: string | null
          street_address2?: string | null
          wealth_level?: string | null
          zip_code?: string | null
        }
        Update: {
          address_is_primary_residence?: boolean | null
          city?: string | null
          created_at?: string
          details_id?: number
          filing_state?: string | null
          filing_status?:
            | Database["public"]["Enums"]["filing_status_enum"]
            | null
          hh_id?: number
          hh_summary?: string | null
          household_stage?:
            | Database["public"]["Enums"]["household_stage_type"]
            | null
          residence_owned?: boolean | null
          state?: string | null
          street_address?: string | null
          street_address2?: string | null
          wealth_level?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "household_details_filing_state_fkey"
            columns: ["filing_state"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_code"]
          },
          {
            foreignKeyName: "household_details_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_details_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_details_state_fkey"
            columns: ["state"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_code"]
          },
        ]
      }
      household_doc_details: {
        Row: {
          created_at: string
          document_id: number
          hh_docs_id: number
          hh_id: number
          last_document_date: string | null
          related_to: string | null
          request_frequency: string | null
          status: Database["public"]["Enums"]["status_enum"] | null
          tied_to: string | null
        }
        Insert: {
          created_at?: string
          document_id: number
          hh_docs_id?: number
          hh_id: number
          last_document_date?: string | null
          related_to?: string | null
          request_frequency?: string | null
          status?: Database["public"]["Enums"]["status_enum"] | null
          tied_to?: string | null
        }
        Update: {
          created_at?: string
          document_id?: number
          hh_docs_id?: number
          hh_id?: number
          last_document_date?: string | null
          related_to?: string | null
          request_frequency?: string | null
          status?: Database["public"]["Enums"]["status_enum"] | null
          tied_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "household_doc_details_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents_agendas_topics"
            referencedColumns: ["fenrisk_document_id"]
          },
          {
            foreignKeyName: "household_doc_details_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "fenrisk_documents"
            referencedColumns: ["document_id"]
          },
          {
            foreignKeyName: "household_doc_details_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_doc_details_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      household_documents: {
        Row: {
          created_at: string
          current_version: boolean | null
          doc_url: string | null
          doc_version_id: number
          document_date: string | null
          document_name: string | null
          document_received: string | null
          hh_docs_id: number
        }
        Insert: {
          created_at?: string
          current_version?: boolean | null
          doc_url?: string | null
          doc_version_id?: number
          document_date?: string | null
          document_name?: string | null
          document_received?: string | null
          hh_docs_id: number
        }
        Update: {
          created_at?: string
          current_version?: boolean | null
          doc_url?: string | null
          doc_version_id?: number
          document_date?: string | null
          document_name?: string | null
          document_received?: string | null
          hh_docs_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "household_documents_hh_docs_id_fkey"
            columns: ["hh_docs_id"]
            isOneToOne: false
            referencedRelation: "documents_agendas_topics"
            referencedColumns: ["hh_docs_id"]
          },
          {
            foreignKeyName: "household_documents_hh_docs_id_fkey"
            columns: ["hh_docs_id"]
            isOneToOne: false
            referencedRelation: "household_doc_details"
            referencedColumns: ["hh_docs_id"]
          },
          {
            foreignKeyName: "household_documents_hh_docs_id_fkey"
            columns: ["hh_docs_id"]
            isOneToOne: false
            referencedRelation: "household_documents_combined"
            referencedColumns: ["hh_docs_id"]
          },
        ]
      }
      household_family: {
        Row: {
          birthdate: string | null
          created_at: string
          email: string | null
          family_id: number
          family_relationship:
            | Database["public"]["Enums"]["family_member_type"]
            | null
          phone: string | null
          related_to: number | null
        }
        Insert: {
          birthdate?: string | null
          created_at?: string
          email?: string | null
          family_id?: number
          family_relationship?:
            | Database["public"]["Enums"]["family_member_type"]
            | null
          phone?: string | null
          related_to?: number | null
        }
        Update: {
          birthdate?: string | null
          created_at?: string
          email?: string | null
          family_id?: number
          family_relationship?:
            | Database["public"]["Enums"]["family_member_type"]
            | null
          phone?: string | null
          related_to?: number | null
        }
        Relationships: []
      }
      household_key_dates: {
        Row: {
          applies_to: string | null
          created_at: string
          date_id: number
          description: string | null
          hh_id: number
          key_date: string | null
          next_date: string | null
          recurring: string | null
          type: string | null
        }
        Insert: {
          applies_to?: string | null
          created_at?: string
          date_id?: number
          description?: string | null
          hh_id: number
          key_date?: string | null
          next_date?: string | null
          recurring?: string | null
          type?: string | null
        }
        Update: {
          applies_to?: string | null
          created_at?: string
          date_id?: number
          description?: string | null
          hh_id?: number
          key_date?: string | null
          next_date?: string | null
          recurring?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "household_key_dates_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_key_dates_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      household_meeting_agenda_items: {
        Row: {
          created_at: string
          hh_agendatopicid: number | null
          hh_topicitemid: number
          meeting_id: number | null
          topic_name: string | null
        }
        Insert: {
          created_at?: string
          hh_agendatopicid?: number | null
          hh_topicitemid?: number
          meeting_id?: number | null
          topic_name?: string | null
        }
        Update: {
          created_at?: string
          hh_agendatopicid?: number | null
          hh_topicitemid?: number
          meeting_id?: number | null
          topic_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "household_meeting_agenda_items_hh_agendatopicid_fkey"
            columns: ["hh_agendatopicid"]
            isOneToOne: false
            referencedRelation: "combined_meeting_tables"
            referencedColumns: ["topic_agenda_topic_id"]
          },
          {
            foreignKeyName: "household_meeting_agenda_items_hh_agendatopicid_fkey"
            columns: ["hh_agendatopicid"]
            isOneToOne: false
            referencedRelation: "household_meeting_primary_topics"
            referencedColumns: ["hh_agendatopicid"]
          },
          {
            foreignKeyName: "household_meeting_agenda_items_topic_name_fkey"
            columns: ["topic_name"]
            isOneToOne: false
            referencedRelation: "agenda_topic_items"
            referencedColumns: ["agenda_item_name"]
          },
          {
            foreignKeyName: "household_meeting_agenda_items_topic_name_fkey"
            columns: ["topic_name"]
            isOneToOne: false
            referencedRelation: "documents_agendas_topics"
            referencedColumns: ["agenda_item_name"]
          },
        ]
      }
      household_meeting_primary_topics: {
        Row: {
          created_at: string
          hh_agendatopicid: number
          meeting_id: number
          primary_agenda_topic: string | null
        }
        Insert: {
          created_at?: string
          hh_agendatopicid?: number
          meeting_id?: number
          primary_agenda_topic?: string | null
        }
        Update: {
          created_at?: string
          hh_agendatopicid?: number
          meeting_id?: number
          primary_agenda_topic?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "household_meeting_primary_topics_primary_agenda_topic_fkey"
            columns: ["primary_agenda_topic"]
            isOneToOne: false
            referencedRelation: "agenda_primary_topics"
            referencedColumns: ["agenda_topic"]
          },
          {
            foreignKeyName: "household_meeting_primary_topics_primary_agenda_topic_fkey"
            columns: ["primary_agenda_topic"]
            isOneToOne: false
            referencedRelation: "documents_agendas_topics"
            referencedColumns: ["agenda_topic"]
          },
        ]
      }
      household_meeting_type: {
        Row: {
          created_at: string
          meeting_type: Database["public"]["Enums"]["meeting_type"] | null
          meetingtype_id: number
          type_description: string | null
        }
        Insert: {
          created_at?: string
          meeting_type?: Database["public"]["Enums"]["meeting_type"] | null
          meetingtype_id?: number
          type_description?: string | null
        }
        Update: {
          created_at?: string
          meeting_type?: Database["public"]["Enums"]["meeting_type"] | null
          meetingtype_id?: number
          type_description?: string | null
        }
        Relationships: []
      }
      household_meetings: {
        Row: {
          actual_meeting_length: string | null
          confirmed_datetime: string | null
          created_at: string
          hh_id: number | null
          is_deleted: boolean | null
          meeting_action: Database["public"]["Enums"]["meeting_action"] | null
          meeting_id: number
          meeting_location: string | null
          meeting_types2: Database["public"]["Enums"]["meeting_type"] | null
          meetings_status: Database["public"]["Enums"]["meetings_status"] | null
          proposed_meeting_length: string | null
          service_id: number | null
          tentative_date: string | null
        }
        Insert: {
          actual_meeting_length?: string | null
          confirmed_datetime?: string | null
          created_at?: string
          hh_id?: number | null
          is_deleted?: boolean | null
          meeting_action?: Database["public"]["Enums"]["meeting_action"] | null
          meeting_id?: number
          meeting_location?: string | null
          meeting_types2?: Database["public"]["Enums"]["meeting_type"] | null
          meetings_status?:
            | Database["public"]["Enums"]["meetings_status"]
            | null
          proposed_meeting_length?: string | null
          service_id?: number | null
          tentative_date?: string | null
        }
        Update: {
          actual_meeting_length?: string | null
          confirmed_datetime?: string | null
          created_at?: string
          hh_id?: number | null
          is_deleted?: boolean | null
          meeting_action?: Database["public"]["Enums"]["meeting_action"] | null
          meeting_id?: number
          meeting_location?: string | null
          meeting_types2?: Database["public"]["Enums"]["meeting_type"] | null
          meetings_status?:
            | Database["public"]["Enums"]["meetings_status"]
            | null
          proposed_meeting_length?: string | null
          service_id?: number | null
          tentative_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "household_meetings_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_meetings_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_meetings_meeting_types2_fkey"
            columns: ["meeting_types2"]
            isOneToOne: false
            referencedRelation: "household_meeting_type"
            referencedColumns: ["meeting_type"]
          },
        ]
      }
      household_member_roles: {
        Row: {
          hh_id: number
          individual_id: number
          role_id: number
        }
        Insert: {
          hh_id: number
          individual_id: number
          role_id: number
        }
        Update: {
          hh_id?: number
          individual_id?: number
          role_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "household_member_roles_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_member_roles_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_member_roles_individual_id_fkey"
            columns: ["individual_id"]
            isOneToOne: false
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "household_member_roles_individual_id_fkey"
            columns: ["individual_id"]
            isOneToOne: false
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "household_member_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "household_roles"
            referencedColumns: ["role_id"]
          },
        ]
      }
      household_members: {
        Row: {
          hh_id: number
          individual_id: number
          is_dependent: boolean | null
          is_primary: boolean | null
        }
        Insert: {
          hh_id: number
          individual_id: number
          is_dependent?: boolean | null
          is_primary?: boolean | null
        }
        Update: {
          hh_id?: number
          individual_id?: number
          is_dependent?: boolean | null
          is_primary?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "household_members_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_members_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_members_individual_id_fkey"
            columns: ["individual_id"]
            isOneToOne: false
            referencedRelation: "client_overview"
            referencedColumns: ["individual_id"]
          },
          {
            foreignKeyName: "household_members_individual_id_fkey"
            columns: ["individual_id"]
            isOneToOne: false
            referencedRelation: "individuals"
            referencedColumns: ["individual_id"]
          },
        ]
      }
      household_planning_segments: {
        Row: {
          business_planning: boolean | null
          charitable_planning: boolean | null
          college_planning: boolean | null
          created_at: string
          estate_planning: boolean | null
          hh_id: number
          tax_planning: boolean | null
        }
        Insert: {
          business_planning?: boolean | null
          charitable_planning?: boolean | null
          college_planning?: boolean | null
          created_at?: string
          estate_planning?: boolean | null
          hh_id?: number
          tax_planning?: boolean | null
        }
        Update: {
          business_planning?: boolean | null
          charitable_planning?: boolean | null
          college_planning?: boolean | null
          created_at?: string
          estate_planning?: boolean | null
          hh_id?: number
          tax_planning?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "household_planning_segments_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: true
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_planning_segments_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: true
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      household_professionals: {
        Row: {
          created_at: string
          professional_id: number
          professional_role: string | null
        }
        Insert: {
          created_at?: string
          professional_id?: number
          professional_role?: string | null
        }
        Update: {
          created_at?: string
          professional_id?: number
          professional_role?: string | null
        }
        Relationships: []
      }
      household_roles: {
        Row: {
          household_role:
            | Database["public"]["Enums"]["household_role_type"]
            | null
          role_id: number
          role_name: string | null
        }
        Insert: {
          household_role?:
            | Database["public"]["Enums"]["household_role_type"]
            | null
          role_id?: number
          role_name?: string | null
        }
        Update: {
          household_role?:
            | Database["public"]["Enums"]["household_role_type"]
            | null
          role_id?: number
          role_name?: string | null
        }
        Relationships: []
      }
      household_service_model: {
        Row: {
          created_at: string
          fp_agreement: boolean | null
          hh_id: number
          managed_accounts: string | null
          meeting_frequency: string | null
          meeting_months: string[] | null
          outside_professional_meeting: boolean | null
          planning_tier: string | null
          service_attributes: string[] | null
          service_id: number
          service_model: string | null
          service_segment: string | null
          tax_planning: boolean | null
        }
        Insert: {
          created_at?: string
          fp_agreement?: boolean | null
          hh_id: number
          managed_accounts?: string | null
          meeting_frequency?: string | null
          meeting_months?: string[] | null
          outside_professional_meeting?: boolean | null
          planning_tier?: string | null
          service_attributes?: string[] | null
          service_id?: number
          service_model?: string | null
          service_segment?: string | null
          tax_planning?: boolean | null
        }
        Update: {
          created_at?: string
          fp_agreement?: boolean | null
          hh_id?: number
          managed_accounts?: string | null
          meeting_frequency?: string | null
          meeting_months?: string[] | null
          outside_professional_meeting?: boolean | null
          planning_tier?: string | null
          service_attributes?: string[] | null
          service_id?: number
          service_model?: string | null
          service_segment?: string | null
          tax_planning?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "household_service_model_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_service_model_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      households: {
        Row: {
          created_at: string
          hh_id: number
          household_name: string
        }
        Insert: {
          created_at?: string
          hh_id?: number
          household_name: string
        }
        Update: {
          created_at?: string
          hh_id?: number
          household_name?: string
        }
        Relationships: []
      }
      individuals: {
        Row: {
          avatar_url: string | null
          birthdate: string | null
          client_acquired_from: string | null
          created_at: string
          date_of_death: string | null
          deceased: boolean | null
          employment_status:
            | Database["public"]["Enums"]["employment_status_enum"]
            | null
          first_name: string | null
          gender: Database["public"]["Enums"]["gender_enum"] | null
          individual_id: number
          is_client: boolean | null
          last_name: string | null
          middle_name: string | null
          preferred_email: string | null
          preferred_phone: string | null
          preferred_phone_type: string | null
          primary_hh_id: number | null
        }
        Insert: {
          avatar_url?: string | null
          birthdate?: string | null
          client_acquired_from?: string | null
          created_at?: string
          date_of_death?: string | null
          deceased?: boolean | null
          employment_status?:
            | Database["public"]["Enums"]["employment_status_enum"]
            | null
          first_name?: string | null
          gender?: Database["public"]["Enums"]["gender_enum"] | null
          individual_id?: number
          is_client?: boolean | null
          last_name?: string | null
          middle_name?: string | null
          preferred_email?: string | null
          preferred_phone?: string | null
          preferred_phone_type?: string | null
          primary_hh_id?: number | null
        }
        Update: {
          avatar_url?: string | null
          birthdate?: string | null
          client_acquired_from?: string | null
          created_at?: string
          date_of_death?: string | null
          deceased?: boolean | null
          employment_status?:
            | Database["public"]["Enums"]["employment_status_enum"]
            | null
          first_name?: string | null
          gender?: Database["public"]["Enums"]["gender_enum"] | null
          individual_id?: number
          is_client?: boolean | null
          last_name?: string | null
          middle_name?: string | null
          preferred_email?: string | null
          preferred_phone?: string | null
          preferred_phone_type?: string | null
          primary_hh_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "individuals_primary_hh_id_fkey"
            columns: ["primary_hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "individuals_primary_hh_id_fkey"
            columns: ["primary_hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      insurance: {
        Row: {
          created_at: string
          hh_id: number | null
          policy_id: number
          policy_name: string
          policy_type: string | null
        }
        Insert: {
          created_at?: string
          hh_id?: number | null
          policy_id?: number
          policy_name: string
          policy_type?: string | null
        }
        Update: {
          created_at?: string
          hh_id?: number | null
          policy_id?: number
          policy_name?: string
          policy_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "insurance_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "insurance_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      insurance_casualty: {
        Row: {
          created_at: string
          policy_id: number
        }
        Insert: {
          created_at?: string
          policy_id?: number
        }
        Update: {
          created_at?: string
          policy_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "insurance_casualty_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: true
            referencedRelation: "insurance"
            referencedColumns: ["policy_id"]
          },
        ]
      }
      insurance_disability: {
        Row: {
          created_at: string
          policy_id: number
        }
        Insert: {
          created_at?: string
          policy_id?: number
        }
        Update: {
          created_at?: string
          policy_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "insurance_disability_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: true
            referencedRelation: "insurance"
            referencedColumns: ["policy_id"]
          },
        ]
      }
      insurance_hybrid_lifeltc: {
        Row: {
          created_at: string
          policy_id: number
        }
        Insert: {
          created_at?: string
          policy_id?: number
        }
        Update: {
          created_at?: string
          policy_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "insurance_hybrid_lifeltc_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: true
            referencedRelation: "insurance"
            referencedColumns: ["policy_id"]
          },
        ]
      }
      insurance_life: {
        Row: {
          created_at: string
          death_benefit: string | null
          insured: string | null
          policy_id: number
          policy_owner: string | null
          policy_type: Database["public"]["Enums"]["life_insurance_type"]
          purchase_date: string | null
        }
        Insert: {
          created_at?: string
          death_benefit?: string | null
          insured?: string | null
          policy_id?: number
          policy_owner?: string | null
          policy_type: Database["public"]["Enums"]["life_insurance_type"]
          purchase_date?: string | null
        }
        Update: {
          created_at?: string
          death_benefit?: string | null
          insured?: string | null
          policy_id?: number
          policy_owner?: string | null
          policy_type?: Database["public"]["Enums"]["life_insurance_type"]
          purchase_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "insurance_life_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: true
            referencedRelation: "insurance"
            referencedColumns: ["policy_id"]
          },
        ]
      }
      insurance_ltc: {
        Row: {
          benefit_period: string | null
          benefit_type: string | null
          cola: boolean | null
          cola_type: string | null
          created_at: string
          elimination_period: string | null
          insured: string | null
          policy_id: number
          policy_number: string | null
          policy_owner: string | null
        }
        Insert: {
          benefit_period?: string | null
          benefit_type?: string | null
          cola?: boolean | null
          cola_type?: string | null
          created_at?: string
          elimination_period?: string | null
          insured?: string | null
          policy_id?: number
          policy_number?: string | null
          policy_owner?: string | null
        }
        Update: {
          benefit_period?: string | null
          benefit_type?: string | null
          cola?: boolean | null
          cola_type?: string | null
          created_at?: string
          elimination_period?: string | null
          insured?: string | null
          policy_id?: number
          policy_number?: string | null
          policy_owner?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "insurance_ltc_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: true
            referencedRelation: "insurance"
            referencedColumns: ["policy_id"]
          },
        ]
      }
      insurance_medical: {
        Row: {
          co_pay_emergency: string | null
          co_pay_primary: string | null
          co_pay_specialist: string | null
          coverage: string | null
          created_at: string
          deductible: string | null
          employer_plan: boolean | null
          plan_type: string | null
          policy_id: number
          premium_amount: string | null
          premium_frequency: string | null
        }
        Insert: {
          co_pay_emergency?: string | null
          co_pay_primary?: string | null
          co_pay_specialist?: string | null
          coverage?: string | null
          created_at?: string
          deductible?: string | null
          employer_plan?: boolean | null
          plan_type?: string | null
          policy_id?: number
          premium_amount?: string | null
          premium_frequency?: string | null
        }
        Update: {
          co_pay_emergency?: string | null
          co_pay_primary?: string | null
          co_pay_specialist?: string | null
          coverage?: string | null
          created_at?: string
          deductible?: string | null
          employer_plan?: boolean | null
          plan_type?: string | null
          policy_id?: number
          premium_amount?: string | null
          premium_frequency?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "insurance_medical_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: true
            referencedRelation: "insurance"
            referencedColumns: ["policy_id"]
          },
        ]
      }
      insurance_property: {
        Row: {
          created_at: string
          insurance_company: string | null
          policy_id: number
        }
        Insert: {
          created_at?: string
          insurance_company?: string | null
          policy_id?: number
        }
        Update: {
          created_at?: string
          insurance_company?: string | null
          policy_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "insurance_property_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: true
            referencedRelation: "insurance"
            referencedColumns: ["policy_id"]
          },
        ]
      }
      insurance_vehicle: {
        Row: {
          created_at: string
          insurance_id: number
        }
        Insert: {
          created_at?: string
          insurance_id?: number
        }
        Update: {
          created_at?: string
          insurance_id?: number
        }
        Relationships: []
      }
      irs_principal_business_lists: {
        Row: {
          business_activity: string | null
          created_at: string
          id: number
        }
        Insert: {
          business_activity?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          business_activity?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      li_policy_information: {
        Row: {
          created_at: string
          hh_id: number | null
          policy_id: number
          policy_name: string | null
          policy_type: string | null
        }
        Insert: {
          created_at?: string
          hh_id?: number | null
          policy_id?: number
          policy_name?: string | null
          policy_type?: string | null
        }
        Update: {
          created_at?: string
          hh_id?: number | null
          policy_id?: number
          policy_name?: string | null
          policy_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "li_policy_information_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "li_policy_information_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      liabilities: {
        Row: {
          created_at: string
          hh_id: number
          liability_id: number
          liability_name: string
          liability_type: Database["public"]["Enums"]["liabiity_type"]
        }
        Insert: {
          created_at?: string
          hh_id: number
          liability_id?: number
          liability_name: string
          liability_type: Database["public"]["Enums"]["liabiity_type"]
        }
        Update: {
          created_at?: string
          hh_id?: number
          liability_id?: number
          liability_name?: string
          liability_type?: Database["public"]["Enums"]["liabiity_type"]
        }
        Relationships: [
          {
            foreignKeyName: "liabilities_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "liabilities_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      liability_business_loan: {
        Row: {
          balance_as_of: string | null
          balloon_period: string | null
          created_at: string
          current_balance: string | null
          fixed_rate: boolean | null
          interest_deductible: boolean | null
          interest_only: boolean | null
          interest_rate: string | null
          liability_id: number
          linked_business: number | null
          loan_amount: string | null
          loan_term: string | null
          loan_type: string | null
          payment_frequency: string | null
          start_date: string | null
        }
        Insert: {
          balance_as_of?: string | null
          balloon_period?: string | null
          created_at?: string
          current_balance?: string | null
          fixed_rate?: boolean | null
          interest_deductible?: boolean | null
          interest_only?: boolean | null
          interest_rate?: string | null
          liability_id?: number
          linked_business?: number | null
          loan_amount?: string | null
          loan_term?: string | null
          loan_type?: string | null
          payment_frequency?: string | null
          start_date?: string | null
        }
        Update: {
          balance_as_of?: string | null
          balloon_period?: string | null
          created_at?: string
          current_balance?: string | null
          fixed_rate?: boolean | null
          interest_deductible?: boolean | null
          interest_only?: boolean | null
          interest_rate?: string | null
          liability_id?: number
          linked_business?: number | null
          loan_amount?: string | null
          loan_term?: string | null
          loan_type?: string | null
          payment_frequency?: string | null
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "liability_business_loan_linked_business_fkey"
            columns: ["linked_business"]
            isOneToOne: false
            referencedRelation: "business_interests"
            referencedColumns: ["interest_id"]
          },
        ]
      }
      liability_home_loan: {
        Row: {
          balance_as_of: string | null
          balloon_period: string | null
          created_at: string
          current_balance: string | null
          escrow_balance: string | null
          escrow_paymnet: string | null
          fixed_rate: boolean | null
          interest_deductible: boolean | null
          interest_only: boolean | null
          interest_rate: string | null
          liability_id: number
          linked_property: number | null
          loan_amount: string | null
          loan_term_months: string | null
          loan_type: string | null
          modified_payments: boolean | null
          payment_frequency: string | null
          pi_payment: string | null
          start_date: string | null
        }
        Insert: {
          balance_as_of?: string | null
          balloon_period?: string | null
          created_at?: string
          current_balance?: string | null
          escrow_balance?: string | null
          escrow_paymnet?: string | null
          fixed_rate?: boolean | null
          interest_deductible?: boolean | null
          interest_only?: boolean | null
          interest_rate?: string | null
          liability_id?: number
          linked_property?: number | null
          loan_amount?: string | null
          loan_term_months?: string | null
          loan_type?: string | null
          modified_payments?: boolean | null
          payment_frequency?: string | null
          pi_payment?: string | null
          start_date?: string | null
        }
        Update: {
          balance_as_of?: string | null
          balloon_period?: string | null
          created_at?: string
          current_balance?: string | null
          escrow_balance?: string | null
          escrow_paymnet?: string | null
          fixed_rate?: boolean | null
          interest_deductible?: boolean | null
          interest_only?: boolean | null
          interest_rate?: string | null
          liability_id?: number
          linked_property?: number | null
          loan_amount?: string | null
          loan_term_months?: string | null
          loan_type?: string | null
          modified_payments?: boolean | null
          payment_frequency?: string | null
          pi_payment?: string | null
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "liability_home_loan_liability_id_fkey"
            columns: ["liability_id"]
            isOneToOne: true
            referencedRelation: "liabilities"
            referencedColumns: ["liability_id"]
          },
          {
            foreignKeyName: "liability_home_loan_linked_property_fkey"
            columns: ["linked_property"]
            isOneToOne: false
            referencedRelation: "property_real_estate"
            referencedColumns: ["property_id"]
          },
        ]
      }
      liability_personal_loan: {
        Row: {
          balance_as_of: string | null
          created_at: string
          current_balance: string | null
          fixed_rate: boolean | null
          interest_rate: string | null
          liability_id: number
          loan_amount: string | null
          loan_term: string | null
          loan_type: string | null
          payment_frequency: string | null
          start_date: string | null
          unsecured: boolean | null
        }
        Insert: {
          balance_as_of?: string | null
          created_at?: string
          current_balance?: string | null
          fixed_rate?: boolean | null
          interest_rate?: string | null
          liability_id?: number
          loan_amount?: string | null
          loan_term?: string | null
          loan_type?: string | null
          payment_frequency?: string | null
          start_date?: string | null
          unsecured?: boolean | null
        }
        Update: {
          balance_as_of?: string | null
          created_at?: string
          current_balance?: string | null
          fixed_rate?: boolean | null
          interest_rate?: string | null
          liability_id?: number
          loan_amount?: string | null
          loan_term?: string | null
          loan_type?: string | null
          payment_frequency?: string | null
          start_date?: string | null
          unsecured?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "liability_personal_loan_liability_id_fkey"
            columns: ["liability_id"]
            isOneToOne: true
            referencedRelation: "liabilities"
            referencedColumns: ["liability_id"]
          },
        ]
      }
      liability_recreational_loan: {
        Row: {
          balance_as_of: string | null
          balloon_period: string | null
          created_at: string
          current_balance: string | null
          fixed_rate: boolean | null
          interest_deductible: boolean | null
          interest_only: boolean | null
          interest_rate: string | null
          liability_id: number
          linked_vehicle: number | null
          loan_amount: string | null
          loan_term: string | null
          loan_type: string | null
          payment_frequency: string | null
          start_date: string | null
        }
        Insert: {
          balance_as_of?: string | null
          balloon_period?: string | null
          created_at?: string
          current_balance?: string | null
          fixed_rate?: boolean | null
          interest_deductible?: boolean | null
          interest_only?: boolean | null
          interest_rate?: string | null
          liability_id?: number
          linked_vehicle?: number | null
          loan_amount?: string | null
          loan_term?: string | null
          loan_type?: string | null
          payment_frequency?: string | null
          start_date?: string | null
        }
        Update: {
          balance_as_of?: string | null
          balloon_period?: string | null
          created_at?: string
          current_balance?: string | null
          fixed_rate?: boolean | null
          interest_deductible?: boolean | null
          interest_only?: boolean | null
          interest_rate?: string | null
          liability_id?: number
          linked_vehicle?: number | null
          loan_amount?: string | null
          loan_term?: string | null
          loan_type?: string | null
          payment_frequency?: string | null
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "liability_recreational_loan_linked_vehicle_fkey"
            columns: ["linked_vehicle"]
            isOneToOne: false
            referencedRelation: "property_vehicle"
            referencedColumns: ["vehicle_id"]
          },
        ]
      }
      liability_vehicle_loan: {
        Row: {
          balance_as_of: string | null
          balloon_period: string | null
          created_at: string
          current_balance: string | null
          fixed_rate: boolean | null
          interest_deductible: boolean | null
          interest_only: boolean | null
          interest_rate: string | null
          liability_id: number
          linked_vehicle: number | null
          loan_amount: string | null
          loan_term: string | null
          loan_type: string | null
          payment_frequency: string | null
          start_date: string | null
        }
        Insert: {
          balance_as_of?: string | null
          balloon_period?: string | null
          created_at?: string
          current_balance?: string | null
          fixed_rate?: boolean | null
          interest_deductible?: boolean | null
          interest_only?: boolean | null
          interest_rate?: string | null
          liability_id?: number
          linked_vehicle?: number | null
          loan_amount?: string | null
          loan_term?: string | null
          loan_type?: string | null
          payment_frequency?: string | null
          start_date?: string | null
        }
        Update: {
          balance_as_of?: string | null
          balloon_period?: string | null
          created_at?: string
          current_balance?: string | null
          fixed_rate?: boolean | null
          interest_deductible?: boolean | null
          interest_only?: boolean | null
          interest_rate?: string | null
          liability_id?: number
          linked_vehicle?: number | null
          loan_amount?: string | null
          loan_term?: string | null
          loan_type?: string | null
          payment_frequency?: string | null
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "liability_vehicle_loan_linked_vehicle_fkey"
            columns: ["linked_vehicle"]
            isOneToOne: false
            referencedRelation: "property_vehicle"
            referencedColumns: ["vehicle_id"]
          },
        ]
      }
      maybe_strategy_detail: {
        Row: {
          detail_content: string | null
          strategydetailid: number
          topic_id: number | null
        }
        Insert: {
          detail_content?: string | null
          strategydetailid?: number
          topic_id?: number | null
        }
        Update: {
          detail_content?: string | null
          strategydetailid?: number
          topic_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "maybe_strategy_detail_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "agenda_primary_topics"
            referencedColumns: ["topic_id"]
          },
        ]
      }
      meeting_agendas: {
        Row: {
          agenda_description: string | null
          agenda_id: number
          agenda_quarter: string | null
          created_at: string
          primary_topic1: string | null
          primary_topic2: string | null
          situational_topic: string | null
        }
        Insert: {
          agenda_description?: string | null
          agenda_id?: number
          agenda_quarter?: string | null
          created_at?: string
          primary_topic1?: string | null
          primary_topic2?: string | null
          situational_topic?: string | null
        }
        Update: {
          agenda_description?: string | null
          agenda_id?: number
          agenda_quarter?: string | null
          created_at?: string
          primary_topic1?: string | null
          primary_topic2?: string | null
          situational_topic?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "meeting_agendas_primary_topic1_fkey"
            columns: ["primary_topic1"]
            isOneToOne: false
            referencedRelation: "agenda_primary_topics"
            referencedColumns: ["agenda_topic"]
          },
          {
            foreignKeyName: "meeting_agendas_primary_topic1_fkey"
            columns: ["primary_topic1"]
            isOneToOne: false
            referencedRelation: "documents_agendas_topics"
            referencedColumns: ["agenda_topic"]
          },
          {
            foreignKeyName: "meeting_agendas_primary_topic2_fkey"
            columns: ["primary_topic2"]
            isOneToOne: false
            referencedRelation: "agenda_primary_topics"
            referencedColumns: ["agenda_topic"]
          },
          {
            foreignKeyName: "meeting_agendas_primary_topic2_fkey"
            columns: ["primary_topic2"]
            isOneToOne: false
            referencedRelation: "documents_agendas_topics"
            referencedColumns: ["agenda_topic"]
          },
          {
            foreignKeyName: "meeting_agendas_situational_topic_fkey"
            columns: ["situational_topic"]
            isOneToOne: false
            referencedRelation: "agenda_primary_topics"
            referencedColumns: ["agenda_topic"]
          },
          {
            foreignKeyName: "meeting_agendas_situational_topic_fkey"
            columns: ["situational_topic"]
            isOneToOne: false
            referencedRelation: "documents_agendas_topics"
            referencedColumns: ["agenda_topic"]
          },
        ]
      }
      meeting_subtasks: {
        Row: {
          created_at: string | null
          subtask_id: number
          subtask_name: string | null
          task_id: number | null
        }
        Insert: {
          created_at?: string | null
          subtask_id?: number
          subtask_name?: string | null
          task_id?: number | null
        }
        Update: {
          created_at?: string | null
          subtask_id?: number
          subtask_name?: string | null
          task_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "meeting_subtasks_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "meeting_tasks"
            referencedColumns: ["task_id"]
          },
        ]
      }
      meeting_tasks: {
        Row: {
          created_at: string | null
          meeting_id: number
          task_id: number
          task_name: string | null
          task_type: string | null
        }
        Insert: {
          created_at?: string | null
          meeting_id: number
          task_id?: number
          task_name?: string | null
          task_type?: string | null
        }
        Update: {
          created_at?: string | null
          meeting_id?: number
          task_id?: number
          task_name?: string | null
          task_type?: string | null
        }
        Relationships: []
      }
      portfolio_metrics: {
        Row: {
          created_at: string
          downcapt_ratio: string | null
          gl_ratio: string | null
          max_drawdown: string | null
          mdd_3y: string | null
          "mdd-5y": string | null
          metric_id: number
          sharpe_ratio_3y: string | null
          sharpe_ratio_5y: string | null
          sortino_ratio_3y: string | null
          sortino_ratio_5y: string | null
          upcapt_ratio: string | null
        }
        Insert: {
          created_at?: string
          downcapt_ratio?: string | null
          gl_ratio?: string | null
          max_drawdown?: string | null
          mdd_3y?: string | null
          "mdd-5y"?: string | null
          metric_id?: number
          sharpe_ratio_3y?: string | null
          sharpe_ratio_5y?: string | null
          sortino_ratio_3y?: string | null
          sortino_ratio_5y?: string | null
          upcapt_ratio?: string | null
        }
        Update: {
          created_at?: string
          downcapt_ratio?: string | null
          gl_ratio?: string | null
          max_drawdown?: string | null
          mdd_3y?: string | null
          "mdd-5y"?: string | null
          metric_id?: number
          sharpe_ratio_3y?: string | null
          sharpe_ratio_5y?: string | null
          sortino_ratio_3y?: string | null
          sortino_ratio_5y?: string | null
          upcapt_ratio?: string | null
        }
        Relationships: []
      }
      property_assets: {
        Row: {
          asset_type: Database["public"]["Enums"]["asset_type"]
          created_at: string
          hh_id: number | null
          property_id: number
        }
        Insert: {
          asset_type: Database["public"]["Enums"]["asset_type"]
          created_at?: string
          hh_id?: number | null
          property_id?: number
        }
        Update: {
          asset_type?: Database["public"]["Enums"]["asset_type"]
          created_at?: string
          hh_id?: number | null
          property_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "property_assets_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "property_assets_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      property_commercial_re: {
        Row: {
          cost_basis: string | null
          created_at: string
          current_value: string | null
          mortgage: boolean | null
          mortgage_id: string | null
          property_id: number
          property_type:
            | Database["public"]["Enums"]["commercial_re_type"]
            | null
          purchase_date: string | null
          purchase_price: string | null
        }
        Insert: {
          cost_basis?: string | null
          created_at?: string
          current_value?: string | null
          mortgage?: boolean | null
          mortgage_id?: string | null
          property_id?: number
          property_type?:
            | Database["public"]["Enums"]["commercial_re_type"]
            | null
          purchase_date?: string | null
          purchase_price?: string | null
        }
        Update: {
          cost_basis?: string | null
          created_at?: string
          current_value?: string | null
          mortgage?: boolean | null
          mortgage_id?: string | null
          property_id?: number
          property_type?:
            | Database["public"]["Enums"]["commercial_re_type"]
            | null
          purchase_date?: string | null
          purchase_price?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "property_commercial_re_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: true
            referencedRelation: "property_real_estate"
            referencedColumns: ["property_id"]
          },
        ]
      }
      property_hard_assets: {
        Row: {
          created_at: string
          property_id: number
        }
        Insert: {
          created_at?: string
          property_id?: number
        }
        Update: {
          created_at?: string
          property_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "property_hard_assets_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: true
            referencedRelation: "property_assets"
            referencedColumns: ["property_id"]
          },
        ]
      }
      property_ownership: {
        Row: {
          created_at: string
          ownership_id: number
        }
        Insert: {
          created_at?: string
          ownership_id?: number
        }
        Update: {
          created_at?: string
          ownership_id?: number
        }
        Relationships: []
      }
      property_personal_re: {
        Row: {
          cost_basis: string | null
          created_at: string
          current_value: string | null
          mortgage: boolean | null
          mortgage_id: string | null
          property_id: number
          purchase_date: string | null
          purchase_price: string | null
          re_property_use: string | null
        }
        Insert: {
          cost_basis?: string | null
          created_at?: string
          current_value?: string | null
          mortgage?: boolean | null
          mortgage_id?: string | null
          property_id?: number
          purchase_date?: string | null
          purchase_price?: string | null
          re_property_use?: string | null
        }
        Update: {
          cost_basis?: string | null
          created_at?: string
          current_value?: string | null
          mortgage?: boolean | null
          mortgage_id?: string | null
          property_id?: number
          purchase_date?: string | null
          purchase_price?: string | null
          re_property_use?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "property_personal_re_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: true
            referencedRelation: "property_real_estate"
            referencedColumns: ["property_id"]
          },
        ]
      }
      property_re_expenses: {
        Row: {
          created_at: string
          expense_id: number
        }
        Insert: {
          created_at?: string
          expense_id?: number
        }
        Update: {
          created_at?: string
          expense_id?: number
        }
        Relationships: []
      }
      property_re_income: {
        Row: {
          created_at: string
          income_id: number
        }
        Insert: {
          created_at?: string
          income_id?: number
        }
        Update: {
          created_at?: string
          income_id?: number
        }
        Relationships: []
      }
      property_real_estate: {
        Row: {
          city: string | null
          created_at: string
          hh_id: number | null
          property_appraisal_url: string | null
          property_id: number
          property_name: string
          property_tax_url: string | null
          property_type: Database["public"]["Enums"]["re_property_type"]
          state: string | null
          street_address: string | null
          street_address2: string | null
          zip_code: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          hh_id?: number | null
          property_appraisal_url?: string | null
          property_id?: number
          property_name: string
          property_tax_url?: string | null
          property_type: Database["public"]["Enums"]["re_property_type"]
          state?: string | null
          street_address?: string | null
          street_address2?: string | null
          zip_code?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          hh_id?: number | null
          property_appraisal_url?: string | null
          property_id?: number
          property_name?: string
          property_tax_url?: string | null
          property_type?: Database["public"]["Enums"]["re_property_type"]
          state?: string | null
          street_address?: string | null
          street_address2?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "property_real_estate_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "property_real_estate_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "property_real_estate_state_fkey"
            columns: ["state"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_code"]
          },
        ]
      }
      property_recreational_asset: {
        Row: {
          asset_type: string | null
          created_at: string
          hh_id: number
          property_id: number
          purchase_price: string | null
        }
        Insert: {
          asset_type?: string | null
          created_at?: string
          hh_id: number
          property_id?: number
          purchase_price?: string | null
        }
        Update: {
          asset_type?: string | null
          created_at?: string
          hh_id?: number
          property_id?: number
          purchase_price?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "property_recreational_asset_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "property_recreational_asset_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      property_rental_details: {
        Row: {
          created_at: string
          lease_end_date: string | null
          lease_start_date: string | null
          property_id: number | null
          rental_id: number
        }
        Insert: {
          created_at?: string
          lease_end_date?: string | null
          lease_start_date?: string | null
          property_id?: number | null
          rental_id?: number
        }
        Update: {
          created_at?: string
          lease_end_date?: string | null
          lease_start_date?: string | null
          property_id?: number | null
          rental_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "property_rental_details_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "property_real_estate"
            referencedColumns: ["property_id"]
          },
        ]
      }
      property_residential_re: {
        Row: {
          cost_basis: string | null
          created_at: string
          current_value: string | null
          mortgage: boolean | null
          mortgage_id: string | null
          property_id: number
          purchase_date: string | null
          purchase_price: string | null
          rental_property: boolean | null
        }
        Insert: {
          cost_basis?: string | null
          created_at?: string
          current_value?: string | null
          mortgage?: boolean | null
          mortgage_id?: string | null
          property_id?: number
          purchase_date?: string | null
          purchase_price?: string | null
          rental_property?: boolean | null
        }
        Update: {
          cost_basis?: string | null
          created_at?: string
          current_value?: string | null
          mortgage?: boolean | null
          mortgage_id?: string | null
          property_id?: number
          purchase_date?: string | null
          purchase_price?: string | null
          rental_property?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "property_residential_re_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: true
            referencedRelation: "property_real_estate"
            referencedColumns: ["property_id"]
          },
        ]
      }
      property_vehicle: {
        Row: {
          business_use: boolean | null
          created_at: string
          current_mileage: string | null
          hh_id: number
          vehicle_id: number
          vehicle_make: string | null
          vehicle_model: string | null
          vehicle_name: string
          vehicle_year: string | null
        }
        Insert: {
          business_use?: boolean | null
          created_at?: string
          current_mileage?: string | null
          hh_id: number
          vehicle_id?: number
          vehicle_make?: string | null
          vehicle_model?: string | null
          vehicle_name: string
          vehicle_year?: string | null
        }
        Update: {
          business_use?: boolean | null
          created_at?: string
          current_mileage?: string | null
          hh_id?: number
          vehicle_id?: number
          vehicle_make?: string | null
          vehicle_model?: string | null
          vehicle_name?: string
          vehicle_year?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "property_vehicle_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "property_vehicle_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "property_vehicle_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: true
            referencedRelation: "property_assets"
            referencedColumns: ["property_id"]
          },
        ]
      }
      scenario_mortgage: {
        Row: {
          created_at: string
          scenario_id: number
        }
        Insert: {
          created_at?: string
          scenario_id?: number
        }
        Update: {
          created_at?: string
          scenario_id?: number
        }
        Relationships: []
      }
      stock_options: {
        Row: {
          account_id: number
          created_at: string
        }
        Insert: {
          account_id?: number
          created_at?: string
        }
        Update: {
          account_id?: number
          created_at?: string
        }
        Relationships: []
      }
      tax_returns_1040_historical: {
        Row: {
          created_at: string
          return_id: number
        }
        Insert: {
          created_at?: string
          return_id?: number
        }
        Update: {
          created_at?: string
          return_id?: number
        }
        Relationships: []
      }
      tax_returns_1040_projected: {
        Row: {
          created_at: string
          return_id: number
        }
        Insert: {
          created_at?: string
          return_id?: number
        }
        Update: {
          created_at?: string
          return_id?: number
        }
        Relationships: []
      }
    }
    Views: {
      client_overview: {
        Row: {
          accredited_investor: boolean | null
          anchoring_bias: string | null
          avatar_url: string | null
          birthdate: string | null
          business_id: number | null
          ca_client_acquired_from: string[] | null
          ca_created_at: string | null
          citizenship: string | null
          client_since: string | null
          company_stability_score: string | null
          confirmation_bias: string | null
          current_employer: boolean | null
          date_of_death: string | null
          deceased: boolean | null
          employee_owner: boolean | null
          employment_classification:
            | Database["public"]["Enums"]["employment_classification_type"]
            | null
          employment_status:
            | Database["public"]["Enums"]["employment_status_enum"]
            | null
          end_date: string | null
          finance_associated: boolean | null
          first_name: string | null
          gender: Database["public"]["Enums"]["gender_enum"] | null
          hce: boolean | null
          hindsight_bias: string | null
          income: Database["public"]["Enums"]["income_type_type"][] | null
          income_type: Database["public"]["Enums"]["income_type_type"] | null
          individual_client_acquired_from: string | null
          individual_id: number | null
          industry_stability_score: string | null
          insurance_rating: Database["public"]["Enums"]["li_risk_class"] | null
          job_title: string | null
          key_employee: boolean | null
          last_name: string | null
          loss_aversion: string | null
          middle_name: string | null
          pay_structure: string | null
          preferred_email: string | null
          preferred_phone: string | null
          preferred_phone_type: string | null
          primary_hh_id: number | null
          qualified_purchaser: boolean | null
          recency_bias: string | null
          regret_aversion: string | null
          religious_identity:
            | Database["public"]["Enums"]["religious_identity"]
            | null
          relocation_risk_score: string | null
          risk_aversion: string | null
          shareholder_tenpercent: boolean | null
          sophistication_level: string | null
          start_date: string | null
          voter_registration:
            | Database["public"]["Enums"]["voter_registration_type"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "client_employment_details_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "business_details"
            referencedColumns: ["business_id"]
          },
          {
            foreignKeyName: "individuals_primary_hh_id_fkey"
            columns: ["primary_hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "individuals_primary_hh_id_fkey"
            columns: ["primary_hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      combined_meeting_tables: {
        Row: {
          actual_meeting_length: string | null
          confirmed_datetime: string | null
          fp_agreement: boolean | null
          hh_agendatopicid: number | null
          hh_id: number | null
          hh_topicitemid: number | null
          household_name: string | null
          managed_accounts: string | null
          meeting_action: Database["public"]["Enums"]["meeting_action"] | null
          meeting_frequency: string | null
          meeting_id: number | null
          meeting_is_deleted: boolean | null
          meeting_location: string | null
          meeting_months: string[] | null
          meeting_service_id: number | null
          meeting_type: Database["public"]["Enums"]["meeting_type"] | null
          meetings_status: Database["public"]["Enums"]["meetings_status"] | null
          outside_professional_meeting: boolean | null
          planning_tier: string | null
          primary_agenda_topic: string | null
          proposed_meeting_length: string | null
          service_attributes: string[] | null
          service_model: string | null
          service_segment: string | null
          tax_planning: boolean | null
          tentative_date: string | null
          topic_agenda_topic_id: number | null
          topic_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "household_meeting_agenda_items_hh_agendatopicid_fkey"
            columns: ["hh_agendatopicid"]
            isOneToOne: false
            referencedRelation: "household_meeting_primary_topics"
            referencedColumns: ["hh_agendatopicid"]
          },
          {
            foreignKeyName: "household_meeting_agenda_items_hh_agendatopicid_fkey"
            columns: ["hh_agendatopicid"]
            isOneToOne: false
            referencedRelation: "combined_meeting_tables"
            referencedColumns: ["topic_agenda_topic_id"]
          },
          {
            foreignKeyName: "household_meeting_agenda_items_topic_name_fkey"
            columns: ["topic_name"]
            isOneToOne: false
            referencedRelation: "agenda_topic_items"
            referencedColumns: ["agenda_item_name"]
          },
          {
            foreignKeyName: "household_meeting_agenda_items_topic_name_fkey"
            columns: ["topic_name"]
            isOneToOne: false
            referencedRelation: "documents_agendas_topics"
            referencedColumns: ["agenda_item_name"]
          },
          {
            foreignKeyName: "household_meeting_primary_topics_primary_agenda_topic_fkey"
            columns: ["primary_agenda_topic"]
            isOneToOne: false
            referencedRelation: "agenda_primary_topics"
            referencedColumns: ["agenda_topic"]
          },
          {
            foreignKeyName: "household_meeting_primary_topics_primary_agenda_topic_fkey"
            columns: ["primary_agenda_topic"]
            isOneToOne: false
            referencedRelation: "documents_agendas_topics"
            referencedColumns: ["agenda_topic"]
          },
          {
            foreignKeyName: "household_meetings_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_meetings_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_meetings_meeting_types2_fkey"
            columns: ["meeting_type"]
            isOneToOne: false
            referencedRelation: "household_meeting_type"
            referencedColumns: ["meeting_type"]
          },
        ]
      }
      documents_agendas_topics: {
        Row: {
          agenda_description: string | null
          agenda_document_id: number | null
          agenda_id: number | null
          agenda_item_id: number | null
          agenda_item_name: string | null
          agenda_quarter: string | null
          agenda_subdescription: string | null
          agenda_topic: string | null
          fenrisk_document_id: number | null
          hh_docs_id: number | null
          hh_id: number | null
          household_document_current_version: boolean | null
          household_document_date: string | null
          household_document_name: string | null
          household_document_received: string | null
          household_document_url: string | null
          meeting_agenda_description: string | null
          primary_topic_review_quarter: string | null
          primary_topic_type:
            | Database["public"]["Enums"]["agenda_item_type"]
            | null
          situational_topic: string | null
          tooltip_description: string | null
        }
        Relationships: [
          {
            foreignKeyName: "household_doc_details_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_doc_details_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "meeting_agendas_situational_topic_fkey"
            columns: ["situational_topic"]
            isOneToOne: false
            referencedRelation: "agenda_primary_topics"
            referencedColumns: ["agenda_topic"]
          },
          {
            foreignKeyName: "meeting_agendas_situational_topic_fkey"
            columns: ["situational_topic"]
            isOneToOne: false
            referencedRelation: "documents_agendas_topics"
            referencedColumns: ["agenda_topic"]
          },
        ]
      }
      household_documents_combined: {
        Row: {
          created_at: string | null
          current_version: boolean | null
          doc_url: string | null
          doc_version_id: number | null
          document: string | null
          document_date: string | null
          document_id: number | null
          document_name: string | null
          document_received: string | null
          document_subtype: string | null
          document_type: Database["public"]["Enums"]["document_type"] | null
          hh_docs_id: number | null
          hh_id: number | null
          last_document_date: string | null
          related_to: string | null
          request_frequency: string | null
          status: Database["public"]["Enums"]["status_enum"] | null
          tied_to: string | null
        }
        Relationships: [
          {
            foreignKeyName: "household_doc_details_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "fenrisk_documents"
            referencedColumns: ["document_id"]
          },
          {
            foreignKeyName: "household_doc_details_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents_agendas_topics"
            referencedColumns: ["fenrisk_document_id"]
          },
          {
            foreignKeyName: "household_doc_details_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "households"
            referencedColumns: ["hh_id"]
          },
          {
            foreignKeyName: "household_doc_details_hh_id_fkey"
            columns: ["hh_id"]
            isOneToOne: false
            referencedRelation: "household_overview"
            referencedColumns: ["hh_id"]
          },
        ]
      }
      household_overview: {
        Row: {
          address_is_primary_residence: boolean | null
          city: string | null
          details_id: number | null
          filing_state: string | null
          filing_status:
            | Database["public"]["Enums"]["filing_status_enum"]
            | null
          fp_agreement: boolean | null
          hh_id: number | null
          hh_summary: string | null
          household_name: string | null
          household_stage:
            | Database["public"]["Enums"]["household_stage_type"]
            | null
          managed_accounts: string | null
          meeting_frequency: string | null
          meeting_months: string[] | null
          outside_professional_meeting: boolean | null
          planning_tier: string | null
          residence_owned: boolean | null
          service_attributes: string[] | null
          service_id: number | null
          service_model: string | null
          service_segment: string | null
          state: string | null
          street_address: string | null
          street_address2: string | null
          tax_planning: boolean | null
          wealth_level: string | null
          zip_code: string | null
        }
        Relationships: [
          {
            foreignKeyName: "household_details_filing_state_fkey"
            columns: ["filing_state"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_code"]
          },
          {
            foreignKeyName: "household_details_state_fkey"
            columns: ["state"]
            isOneToOne: false
            referencedRelation: "data_us_states"
            referencedColumns: ["state_code"]
          },
        ]
      }
    }
    Functions: {
      check_business_ownership:
        | {
            Args: {
              business_id: number
            }
            Returns: boolean
          }
        | {
            Args: {
              business_id: number
            }
            Returns: boolean
          }
    }
    Enums: {
      account_owner: "household.hh_primaryid" | "household.hh_coprimaryid"
      account_type:
        | "Qualified Retirement Account"
        | "Qualified DC Plan"
        | "Non-Qualified Banking"
        | "Non-Qualified Investment"
        | "Education Account"
        | "Custodial Account"
      agenda_item_type: "Primary" | "Situational"
      alert_code: "Low" | "Medium" | "High" | "Action Required" | "Suitable"
      asset_type:
        | "Vehicle"
        | "Boat"
        | "Motorcycle"
        | "RV"
        | "Private Plane"
        | "Jewelry"
        | "Fine Art"
        | "Precious Metals"
        | "Collectibles"
        | "Antiques"
        | "Other Assets"
      beneficiary_type: "Individual" | "Trust" | "Charitable Organization"
      business_entity_type:
        | "Limited Liability Company"
        | "Limited Liability Partnership"
        | "Corporation"
        | "Limited Liability Limited Partnership"
        | "General Partnership"
        | "Limited Partnership"
        | "Sole Proprietorship"
        | "Non-Profit 501(c)(3)"
        | "Club 501(c)(7)"
      business_ownership_options:
        | "Individual"
        | "JT Household"
        | "JT Other"
        | "Multiple"
        | "Business"
        | "Trust"
      business_type:
        | "Limited Liability Company"
        | "Limited Liability Partnership"
        | "Corporation"
        | "Limited Liability Limited Partnership"
        | "General Partnership"
        | "Limited Partnership"
        | "Sole Proprietorship"
        | "Non-Profit 501(c)(3)"
        | "Tax Exempt Club 501 (c)(7)"
      commercial_re_type:
        | "Retail"
        | "Multi-Family"
        | "Office"
        | "Industrial"
        | "Hotel/Hospitality"
        | "Mixed-Use"
        | "Special Purpose"
        | "Land"
      confirmed_meeting_status:
        | "Confirmed"
        | "Rescheduled"
        | "Canceled"
        | "Completed"
      document_type: "Questionnaire" | "Deliverable" | "Document" | "Statement"
      email_type:
        | "Pre-Meeting"
        | "Post-Meeting"
        | "Meeting Confirmation"
        | "Quarterly Review"
        | "Annual Review"
        | "General Update"
      employment_classification_type:
        | "Full-Time Employee"
        | "Part-Time Employee"
        | "Part-Time Excluding Benefits"
        | "Temp Employee"
        | "Seasonal Employee"
        | "Intern"
        | "Contract Employee"
        | "General Contractor"
      employment_status_enum:
        | "Employed"
        | "Self Employed"
        | "Retired"
        | "Semi-Retired"
        | "Disabled"
        | "Unemployed"
        | "Homemaker"
        | "Student"
      entity_tax_type:
        | "S-Corp"
        | "C-Corp"
        | "Partnership"
        | "Schedule C"
        | "Tax-Exempt"
      expense_frequency:
        | "Weekly"
        | "Bi-Weekly"
        | "Bi-Monthly"
        | "Monthly"
        | "Quarterly"
        | "Semi-Annually"
        | "Annually"
      family_member_type:
        | "Grandparent"
        | "Parent"
        | "Brother"
        | "Sister"
        | "Aunt"
        | "Uncle"
        | "Cousin"
        | "Niece"
        | "Nephew"
        | "Child"
        | "Grandchild"
        | "Son"
        | "Daughter"
        | "Grandson"
        | "Granddaughter"
      filing_status_enum:
        | "Single"
        | "Married Filing Joint"
        | "Married Filing Single"
        | "Head of Household"
        | "Qualifying Widow"
        | "Dependent"
      gender_enum: "Male" | "Female" | "Male-Other" | "Female-Other"
      goal_frequency:
        | "One-Time"
        | "Annual"
        | "Semi-Annual"
        | "Quarterly"
        | "Monthly"
        | "Semi-Monthly"
        | "Bi-Weekly"
        | "Weekly"
      household_role_type:
        | "Primary"
        | "Family Member"
        | "Professional"
        | "Other"
      household_stage_type:
        | "Career Focused"
        | "Family Formation"
        | "Pre-Retirement"
        | "Retirement"
        | "Legacy Focused"
        | "Managed Care Planning"
        | "AIF Directive"
      income_type_type: "W2-Wages" | "1099-NEC" | "1099-Misc" | "Schedule K1"
      li_risk_class:
        | "Preferred Plus"
        | "Preferred"
        | "Standard Plus"
        | "Standard"
        | "Preferred Plus Nicotine"
        | "Preferred Nicotine"
        | "Standard Plus Nicotine"
        | "Standard Nicotine"
        | "Table Rated"
        | "Uninsurable"
      liabiity_type:
        | "Mortgage"
        | "HELOC"
        | "Home Equity Loan"
        | "Reverse Mortgage"
        | "Vehicle Loan"
        | "Recreational Loan"
        | "Student Loan"
        | "Personal Loan"
        | "Debt Consolidation"
        | "Small Business Loan"
        | "Credit Card"
      life_insurance_type:
        | "Term Life"
        | "Group Life"
        | "Variable Life"
        | "Whole Life"
        | "Variable Whole Life"
        | "Universal Life"
        | "Variable Universal Life"
        | "Other"
      meeting_action:
        | "No Action"
        | "Need to Schedule"
        | "Scheduling Started"
        | "Scheduled"
      meeting_month_options:
        | "Proposed Month"
        | "Actual Month"
        | "Proposed & Actual"
      meeting_status:
        | "No Action"
        | "Need to Schedule"
        | "Scheduling in Process "
        | "Confirmed"
        | "Tentative"
        | "Completed"
      meeting_type:
        | "Service Model Meeting"
        | "Client Requested Meeting"
        | "Advice Meeting"
        | "Proactive Meeting"
        | "Other"
      meetings_status:
        | "Tenative"
        | "Scheduling Started"
        | "Confirmed"
        | "Canceled"
        | "Completed"
      ownership_type:
        | "Joint"
        | "Joint WROS"
        | "Joint TIC"
        | "Joint Tenants by Entirety"
        | "Individual"
        | "Revocable Trust"
        | "Irrevocable Trust"
        | "Business Ownership"
      portfolio_risk_objective_type:
        | "Principal Protection"
        | "Income"
        | "Total Return"
        | "Growth"
        | "Aggressive Growth"
        | "Speculative Growth"
      portfolio_risk_profile_type:
        | "Conservative"
        | "Moderately Conservative"
        | "Moderate"
        | "Moderately Aggressive"
        | "Aggressive"
      priority_enum: "Urgent" | "High" | "Medium" | "Low"
      qp_dc_account_type:
        | "401(k)"
        | "401(k) ROTH"
        | "403(b)"
        | "403(b) ROTH"
        | "457 Plan"
        | "SIMPLE IRA"
        | "Cash Balance"
        | "401(a)"
      re_property_type: "Personal" | "Residential" | "Commercial" | "Raw Land"
      real_estate_type: "Personal" | "Residential" | "Commercial" | "Raw Land"
      religious_identity:
        | "Catholic"
        | "Protestant"
        | "Methodist"
        | "Eastern Orthodox"
        | "Muslim"
        | "Hindu"
        | "Buddhist"
        | "Evangelical"
        | "Mormon"
        | "Atheist"
        | "Agnostic"
        | "Shinto"
        | "Sikh"
        | "Jewish"
        | "Other"
      retirement_account_type:
        | "Traditional IRA"
        | "ROTH IRA"
        | "SEP IRA"
        | "SEP ROTH IRA"
        | "Inherited IRA"
        | "Spousal IRA"
      segment_type:
        | "Introduction/Opening Paragraph"
        | "Meeting Primary Topics"
        | "Meeting Recap"
        | "Goals and Objectives Update"
        | "Strategies and Recommendations"
        | "Action Items and Follow-Up"
        | "Loose Ends"
        | "Closing"
        | "General"
        | "Client Comments/Concerns"
      status_enum: "Begin" | "In-Process" | "Pending" | "Completed"
      topic_type:
        | "Tax Planning"
        | "Retirement Planning"
        | "Estate Planning"
        | "Family Wealth Planning"
        | "Cash Flow Management"
        | "Legacy Planning"
        | "Financial Health Check"
        | "General"
      trade_type: "Buy" | "Sell" | "Reinvestment"
      trust_payment_type: "Income" | "Annuity" | "Unitrust"
      trust_type:
        | "Revocable Trust"
        | "Irrevocable Trust"
        | "Irrevocable Life Insurance Trust"
        | "Grantor Retained Trust"
        | "Intentionally Defective Grantor Trust"
        | "Qualified Personal Residence Trust"
        | "Spousal Lifetime Access Trust"
        | "Charitable Remainder Trust"
        | "Charitable Lead Trust"
        | "Credit Shelter Trust"
        | "QTIP Trust"
        | "Qualified Income Trust"
        | "Foreign Grantor Trust"
        | "Foreign Non-Grantor Trust"
      voter_registration_type: "Republican" | "Democrat" | "NPA"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
