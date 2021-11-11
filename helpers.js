// Retrieves and parses api-data
export async function fetchApi(apiUrl) {
  try {
    const response = await fetch(apiUrl)
    const rawData = await response.json()
    return rawData
  } catch {

    function error(err) {
      alert(`Something went wrong: ${err}`)
    }
  }
}