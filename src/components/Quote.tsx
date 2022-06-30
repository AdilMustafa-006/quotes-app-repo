import React, { useEffect, useState } from 'react'
import QuoteCard from './QuoteCard'
import './Quote.css'

type resultType = {
  author: String
  authorSlug: String
  content: String
  dateAdded: String
  dateModified: String
  length: Number
}
type quoteProps = {
  quoteData: resultType[]
  setPageNo: Function
}
const Quote = ({ quoteData, setPageNo }: quoteProps) => {
  const [loading, setLoading] = useState<Boolean>(false)
  const [count, setCount] = useState<number>(1)

  useEffect(() => {
    setLoading(true)
  }, [quoteData])

  return (
    <div className='quote-box-wrapper'>
      <div className='quote-box'>
        <div className='quote-wrapper'>
          <div className='quote-box-title'>
            Hello, here are your morning quotes!
          </div>
          <>
            {quoteData.map((el: any, key) => (
              <QuoteCard
                author={el.author}
                content={el.content}
                authorSlug={el.authorSlug}
                date={el.dateAdded}
                key={key}
              />
            ))}
          </>
        </div>
        <div
          className='quote-footer-btn'
          onClick={() => {
            const newCount = count + 1
            setCount(newCount)
            setPageNo(newCount)
            setLoading(!loading)
          }}
        >
          {loading ? (
            <span>Load More </span>
          ) : (
            <span style={{ color: '#BDB8B8' }}> Loading ...</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Quote
