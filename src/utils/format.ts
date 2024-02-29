
export function markdownToHtml(markdown: string) {
  return markdown
    .split("\n")
    .map((line) => line.trim().replaceAll(/\*(.+)\*/g, "<strong>$1</strong>"))
    .map((line) => line.trim().replaceAll(/\_(.+)\_/g, "<em>$1</em>"))
    .join("<br />")
}
