import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { theorists } from '../data/theorists';

dotenv.config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.VITE_SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error('Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

async function seedTheorists() {
  console.log('Seeding theorists...');

  const theoristsPayload = theorists.map((th) => ({
    id: th.id,
    name: th.name,
    birth_year: th.birthYear ?? null,
    death_year: th.deathYear ?? null,
    nationality: th.nationality ?? null,
    bio: th.bio ?? null,
    key_works: th.keyWorks ?? [],
    associated_theories: th.associatedTheories ?? [],
    image: th.image ?? null,
    key_contributions: th.keyContributions ?? [],
    status: 'published',
  }));

  const { error: seedError } = await supabase
    .from('theorists')
    .upsert(theoristsPayload, { onConflict: 'id' });

  if (seedError) {
    console.error('Error seeding theorists:', seedError.message);
    process.exit(1);
  }

  const { count, error: countError } = await supabase
    .from('theorists')
    .select('*', { count: 'exact', head: true });

  if (countError) {
    console.error('Seeded, but count verification failed:', countError.message);
    process.exit(1);
  }

  console.log(`Inserted/updated ${theoristsPayload.length} theorists.`);
  console.log(`Theorists table row count: ${count ?? 'unknown'}`);
}

seedTheorists();
