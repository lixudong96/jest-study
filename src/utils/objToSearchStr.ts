const objToSearchStr = (obj: Record<string, string | number>) => {
  const strPairs: string[] = []

  Object.entries(obj).forEach((keyValue) => {
    const [key, value] = keyValue
    const pair = `${key}=${String(value)}`
    strPairs.push(pair)
  }, [])
  return strPairs.join('&')
}

export default objToSearchStr
