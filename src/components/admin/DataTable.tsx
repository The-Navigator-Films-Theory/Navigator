import { type ReactNode } from 'react';
import styles from './DataTable.module.scss';

export type Column<T> = {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
  width?: string;
  className?: string;
};

type DataTableProps<T extends { id: string | number }> = {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  emptyMessage?: string;
  rowActions?: (row: T) => ReactNode;
};

export default function DataTable<T extends { id: string | number }>({
  columns,
  data,
  isLoading = false,
  emptyMessage = 'No items found.',
  rowActions,
}: DataTableProps<T>) {
  if (isLoading) {
    return (
      <div className={styles.tableContainer}>
        <div className={styles.emptyState}>
          <p className={styles.emptyText}>Loading...</p>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={styles.tableContainer}>
        <div className={styles.emptyState}>
          <p className={styles.emptyText}>{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className={styles.headerCell}>
                {col.label}
              </th>
            ))}
            {rowActions && <th className={styles.headerCell}>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={styles.row}>
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={`${styles.cell} ${col.className || ''}`}
                  style={{ width: col.width }}
                >
                  {col.render ? col.render(row[col.key], row) : String(row[col.key])}
                </td>
              ))}
              {rowActions && (
                <td className={styles.cell}>
                  <div className={styles.cellActions}>{rowActions(row)}</div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
