import React, { useState, useEffect } from 'react'
import Quote from '../components/Quote'

type resultType = {
  author: String
  authorSlug: String
  content: String
  dateAdded: String
  dateModified: String
  length: Number
}

const QuoteFeedContainer = () => {
  const [result, setResult] = useState<Array<resultType>>([])
  const [pageNo, setPageNo] = useState<number>(1)

  useEffect(() => {
    const getQuotes = async () => {
      const data = await fetch(
        `https://api.quotable.io/quotes?page=${pageNo}&limit=3`,
        {
          method: 'GET'
        }
      )
      const jsonData = await data.json()
      const newResults: any = [...result, ...jsonData.results]

      setResult(newResults)
    }

    getQuotes()
  }, [pageNo])

  return (
    <>
      <Quote quoteData={result} setPageNo={setPageNo} />
    </>
  )
}

export default QuoteFeedContainer
