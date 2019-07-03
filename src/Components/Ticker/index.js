import React from 'react'
import { string } from 'prop-types'
import Ticker from 'unify-react-mobile/build/Ticker'

import { MessageTickerContainer } from './_TickerStyle'

export const InfoTicker  = (props) => {
  const { text } = props
  return (
    <Ticker 
      className="ft-ticker" 
      style={{ margin: 0, marginBottom: 24, minHeight: 0 }}
      items={[{ text }]}
    />
    )
  }

InfoTicker.prototype = {
  text: string.isRequired,
}

export const MessageTicker = (props) => {
  const { text } = props
  return (
    <MessageTickerContainer>
      <p>
        {text}
      </p>
    </MessageTickerContainer>
  )
}

MessageTicker.prototype = {
  text: string.isRequired,
}
