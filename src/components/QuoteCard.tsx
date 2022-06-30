import React, { useRef, useEffect } from 'react'
import { Card, Row, Col } from 'antd'
import './Quote.css'

type props = {
  author: String,
  authorSlug: String,
  date: String,
  content: String
}

const QuoteCard = ({ author, authorSlug, content, date }: props) => {
  const quoteRef: any = useRef(null)

  const scrollToBottom = () => {
    quoteRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [date])

  return (
    <>
      <Card className='quote-card' ref={quoteRef}>
        <Row className='quote-card-detail'>
          <div className='quote-name'>
            {author}
            <span className='quote-author'>@{authorSlug}</span>
          </div>
          <div className='quote-date'>{date.split('-')[0]}</div>
        </Row>

        <p className='quote-card-description'> {content} </p>
      </Card>
    </>
  )
}

export default QuoteCard
