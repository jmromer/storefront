const eachSlice = (arr, n) => {
  const grouped = []

  let i = 0
  while (i < arr.length) {
    grouped.push(arr.slice(i, i + n))
    i += n
  }

  return grouped
}

export default eachSlice
