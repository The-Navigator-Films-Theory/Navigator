import type { Database } from '../../types/database.types';
import { supabase } from '../supabase/client';

type VocabularyRow = Database['public']['Tables']['vocabulary_terms']['Row'];