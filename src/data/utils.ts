export const normalize = (string: string): string => {
  return string.toLowerCase().trim()
}

export const formatSentence = (string: string): string => {
  const firstLetter = string.charAt(0).toUpperCase()
  const restOfString = string.slice(1)
  const maybeTrailingPeriod = string[string.length - 1] == '.' ? '' : '.'
  return firstLetter + restOfString + maybeTrailingPeriod
}
