export const formatTitle = (title: string) => {
  return title.length > 15 ? `${title.slice(0, 15)}...` : title
}
