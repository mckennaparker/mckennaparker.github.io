export type SortableByDate = {
  date: string
}

export function sortByDateDesc<T extends SortableByDate>(items: T[]) {
  return [...items].sort((left, right) => Date.parse(right.date) - Date.parse(left.date))
}

export function formatDisplayDate(date: string) {
  const parsedDate = new Date(date)

  if (Number.isNaN(parsedDate.getTime())) {
    return date
  }

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(parsedDate)
}

export function takeFirst<T>(items: T[], count: number) {
  return items.slice(0, count)
}