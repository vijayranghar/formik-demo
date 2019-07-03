import styled from 'react-emotion'
import { colors } from './styles'

import iconStopWatch from './Components/Icons/assets/icon-stopwatch.svg'
import BgCardSummary from './Components/Icons/assets/bg-card-form-summary.svg'

const FormContainer = styled('div')`
  padding: 24px 16px;

  .form__summary--short {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${BgCardSummary});
    background-size: contain;
    background-position: left center;
    background-repeat: no-repeat;
    overflow: hidden;

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

    .form__label-chips {
      margin-left: 8px;
      padding: 2px 8px;
      border-radius: 999px;
      color: #03ac0e;
      font-size: 10px;
      background-color: #ebffef;
      border: 1px solid #26dc46;
      vertical-align: middle;

      &::before {
        content: '';
        display: inline-block;
        height: 12px;
        width: 12px;
        margin-right: 4px;
        background-image: url(${iconStopWatch});
        background-size: contain;
        background-position: center;
        vertical-align: middle;
      }
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

    .form__agreement--wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 16px;

      .text {
        margin: 0;
        padding-left: 10px;
        font-size: 12px;
        color: ${colors.blackLight};

        a {
          font-size: 12px;
        }
      }
    }
  }
`

export { FormContainer }
