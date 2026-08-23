import { projects, type Project, type Category, categories } from '../data/site';

const MONTHS: Record<string, number> = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
};

/**
 * Turn a display date into a sortable number (YYYYMM).
 *
 * Accepts a single point ("Apr 2026") or a range ("Aug 2025 – May 2026"),
 * with either an en dash or a hyphen, and tolerates a trailing "(Expected)".
 * Ranges sort by their end, so ongoing work stays near the top.
 */
export function endKey(dates: string): number {
  const cleaned = dates.replace(/\(.*?\)/g, '').trim();
  const parts = cleaned.split(/\s*[–—-]\s*/).filter(Boolean);
  const last = parts[parts.length - 1] ?? cleaned;

  const match = last.match(/([A-Za-z]{3})[a-z]*\.?\s+(\d{4})/);
  if (match) {
    const month = MONTHS[match[1].toLowerCase()] ?? 12;
    return Number(match[2]) * 100 + month;
  }

  // Bare year, or anything we could not parse: sort it to the end of its year.
  const year = last.match(/(\d{4})/);
  return year ? Number(year[1]) * 100 + 12 : 0;
}

/** The year a project wrapped up — the heading it files under on /work. */
export function endYear(dates: string): number {
  return Math.floor(endKey(dates) / 100);
}

const byRecency = (a: Project, b: Project) => endKey(b.dates) - endKey(a.dates);

/** Every project, newest first. */
export const allProjects: Project[] = [...projects].sort(byRecency);

/** Home-page picks. Flip `featured` in site.ts to change what lands here. */
export const featuredProjects: Project[] = allProjects.filter((p) => p.featured);

/** Only the categories that actually have projects, in their declared order. */
export const activeCategories: Category[] = categories.filter((c) =>
  projects.some((p) => p.category === c)
);

export type YearGroup = { year: number; items: Project[] };

/** Group projects under year headings, newest year first. */
export function groupByYear(list: Project[]): YearGroup[] {
  const buckets = new Map<number, Project[]>();
  for (const p of list) {
    const y = endYear(p.dates);
    const bucket = buckets.get(y);
    if (bucket) bucket.push(p);
    else buckets.set(y, [p]);
  }
  return [...buckets.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, items]) => ({ year, items }));
}

/** A slug is safe in a DOM id / data attribute; category labels are not. */
export const categorySlug = (c: string) =>
  c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
