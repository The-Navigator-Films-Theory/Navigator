// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../types/database.types';

const url = import.meta.env.VITE_SUPABASE_URL!;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY!;

const ADMIN_UUID_HEADER = 'x-admin-uuid';

function getInitialAdminUuid(): string | null {
	if (typeof window === 'undefined') return null;
	return sessionStorage.getItem('admin_user_id');
}

const initialAdminUuid = getInitialAdminUuid();

function buildClient(userId: string | null) {
	return createClient<Database>(url, key, {
		global: {
			headers: userId ? { [ADMIN_UUID_HEADER]: userId } : {},
		},
	});
}

let currentAdminUuid = initialAdminUuid;

export let supabase = buildClient(currentAdminUuid);

export function setAdminRequestHeader(userId: string | null): void {
	currentAdminUuid = userId?.trim() || null;
	supabase = buildClient(currentAdminUuid);
}
