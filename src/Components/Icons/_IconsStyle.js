import styled from 'react-emotion'

// Logo Here
import LogoOVO from './assets/logo-ovo.png'
// Illustration Here
import MudikIllustrationThanks from './assets/mudik-illustration-thanks.png'

// Icon Here
import IconTooltip from './assets/icon-tooltip.svg'
import IconTips from './assets/icon-tips.svg'
import IconCategory from './assets/icon-chevron-down.png'

const FintechIcon = styled('i')`
  display: inline-block;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  vertical-align: middle;

  &.logo--ovo {
    background-image: url(${LogoOVO});
    height: 30px;
    width: 30px;
  }

  &.mudik__illustration--thanks {
    background-image: url(${MudikIllustrationThanks});
    height: 135px;
    width: 200px;
  }

  &.icon--tooltip {
    background-image: url(${IconTooltip});
    height: 16px;
    width: 16px;
  }

  &.icon--asuransi {
    background-size: 75%;
    background-position: center;
    height: 40px;
    width: 40px;
    border-radius: 12px;
    box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);
  }

  &.icon--tips {
    background-image: url(${IconTips});
    background-color: #ffffff;
    background-size: 42%;
    background-position: center;
    height: 40px;
    width: 40px;
    position: absolute;
    top: -20px;
    border-radius: 12px;
    box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);
  }

  &.icon--category {
    height: 18px;
    width: 18px;
    background-image: url(${IconCategory});
  }
`

export default FintechIcon
