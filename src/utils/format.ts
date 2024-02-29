export function markdownToHtml(markdown: string) {
  return markdown
    .split("\n")
    .map((line) => line.trim().replaceAll(/\*(.+)\*/g, "<strong>$1</strong>"))
    .map((line) => line.trim().replaceAll(/\_(.+)\_/g, "<em>$1</em>"))
    .join("<br />")
}

export function dateFormat(dateStr: string) {
  const date = new Date(dateStr)
  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short"
  })
  return dtf.format(date)
}

// Using Intl.RelativeTimeFormat to format the relative time between two dates
export function relativeTime(startDateStr: string, endDateStr: string) {
  const startDate = new Date(startDateStr)
  const endDate = new Date(endDateStr)
  const diff = endDate.getTime() - startDate.getTime()
  const rtf = new Intl.RelativeTimeFormat("en", { style: "short" })
  const days = Math.round(diff / (1000 * 60 * 60 * 24))

  if (days > 15 && days < 365)
    return rtf
      .format(Math.round(days / 30), "months")
      .replace("in", "")
      .trim()
  else if (days > 365) {
    const years = Math.floor(days / 365)
    const months = Math.round((days % 365) / 30)
    const yearsStr = rtf.format(years, "years").replace("in", "").trim()
    const monthsStr = rtf.format(months, "months").replace("in", "").trim()
    return `${yearsStr} ${monthsStr}`
  } else return rtf.format(0, "months").replace("in", "").trim()
}
