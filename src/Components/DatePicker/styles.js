import styled from 'react-emotion'
import { colors } from '../../styles'

//import iconStopWatch from '../../../components/Icons/assets/icon-stopwatch.svg'
//import BgCardSummary from '../../../components/Icons/assets/bg-card-form-summary.svg'

const DateContainer = styled('div')`
 .form__textfield--wrapper {
  .placeholder {
    pointer-events: none;
  }
  .ft-semantic__textfield {
    outline: none;
    position: relative;
    &:focus {
      &:before {
        width: 100%;
      }
    }
    &:before {
      content: "";
      width: 0;
      height: 1px;
      background-color: #42B549;
      position: absolute;
      bottom: -1px;
      left: 0;
      z-index: 2;
      -webkit-transition: width 280ms ease;
      transition: width 280ms ease;
    }
    &.error {
      &:before {
        background-color: ${colors.redBase};
        width: 100%;
      }
    }
  }
 }
  .form__summary--short {
    .content {
      &__text--wrapper {
        width: calc(100% - 70px);
        padding-right: 16px;
      }

      &__cta--wrapper {
        width: 70px;
      }
    }

    .label {
      color: ${colors.blackLighter};
      font-size: 10px;
      text-transform: uppercase;
    }

    .title {
      margin: 0;
    }
  }

  .form__container {
    margin-top: 24px;

    .form__title {
      margin: 0 0 8px;
      font-size: 18px;
    }
    .form__subheading {
      margin: 0;
      font-size: 12px;
      color: ${colors.blackLighter};
    }

    .form__content--wrapper {
      margin-top: 24px;
    }

    .form__label {
      color: ${colors.blackLight};
      font-size: 12px;
      line-height: 1.5;
      font-weight: normal;
      pointer-events: none;
      transition: color 280ms ease;
    }

    .form__textfield--wrapper {
      margin-bottom: 8px;
    
      .ft-form__textfield,
      .unf_input {
        margin: 0;
      }

      .unf-input {
        margin-bottom: 0;
      }
    }

    .form__info--wrapper {
      padding: 12px 16px;
      margin-bottom: 16px;
      background-color: ${colors.grayAlabaster};
      border-radius: 8px;

      p {
        margin: 0;
        font-size: 12px;
        color: ${colors.blackLight};
      }
    }
  }
`

export default DateContainer
