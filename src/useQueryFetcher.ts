import React from 'react'

interface TypeHookProps<ResponseType> {
  search?: string,
  apiEndpoint: string,
  searchEndpoint?: string,
  initialValue: ResponseType,
  parseResponse?(response: any): ResponseType,
}

interface HookReturnType<ResponseType> {
  loading: boolean,
  data: ResponseType,
}

function useQueryFetcher<ResponseType>({ apiEndpoint, searchEndpoint, initialValue, parseResponse, search = '' }: TypeHookProps<ResponseType>): HookReturnType<ResponseType> {
  const [loading, updateLoading] = React.useState<boolean>(false)
  const [data, updateData] = React.useState<ResponseType>(initialValue)

  const startFetching = () => updateLoading(true)
  const finishFetching = () => updateLoading(false)

  const getData = React.useCallback(
    (currSearchValue?: string): void => {
      const baseUrl = process.env.REACT_APP_BASE_URL
      const apiKey = process.env.REACT_APP_API_KEY

      const endpoint = !currSearchValue
        ? `${baseUrl}/${apiEndpoint}?api_key=${apiKey}`
        : `${baseUrl}/${searchEndpoint}?api_key=${apiKey}&query=${currSearchValue}`

      startFetching()
      window.fetch(endpoint)
        .then(response => response.json())
        .then(response => parseResponse ? parseResponse(response) : response.results)
        .then(updateData)
        .then(finishFetching)
    },
    [apiEndpoint, searchEndpoint, parseResponse]
  )

  React.useEffect(() => { getData(search) }, [getData, search])

  return { loading, data }
}

export default useQueryFetcher
