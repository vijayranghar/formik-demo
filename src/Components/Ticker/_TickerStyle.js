import styled from 'react-emotion'
import { colors } from '../../styles'

export const MessageTickerContainer = styled('div')`
  padding: 12px 16px;
  margin-bottom: 16px;
  background-color: ${colors.grayAlabaster};
  border-radius: 8px;

  p {
    margin: 0;
    font-size: 12px;
    color: ${colors.blackLight};
  }
`