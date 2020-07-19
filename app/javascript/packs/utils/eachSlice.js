// Partition the given array `arr` into slices of max length `n`.
//
// Return an array of arrays
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
