## RLS Policy Notes

1. Enable RLS on `theories`.
2. Public read policy: allow `SELECT` only when `status = 'published'`.
3. Admin CRUD policy: gate `INSERT`, `UPDATE`, `DELETE` through membership in `admin_users` by `auth.uid()`.
