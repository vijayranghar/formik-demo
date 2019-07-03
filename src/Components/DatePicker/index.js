import React, { Component, Fragment } from 'react'
import BottomSheetV2 from 'unify-react-mobile/build/BottomSheetV2'
import List from 'unify-react-mobile/build/List'
import classnames from 'classnames'
import {
  generateDates,
  setInitialDates,
  monthList,
  generateYears
} from '../../utils'

import DateContainer from './styles'

class DateOfBirth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDate: false,
      showMonth: false,
      showYear: false,
      dates: setInitialDates(),
      months: monthList,
      years: generateYears(1930),
      selectedDate: '',
      selectedMonth: '',
      selectedYear: '',
    }
  }
  
  handleBlur = (type) => {
    //const attribute = e.target.getAttribute('data-dob') 
    //this.props.onBlur(type, true)
    this.props.setFieldTouched(`${this.props.name}.${type}`)
  }
  updateDateList = () => {
    const { selectedDate, selectedMonth, selectedYear } = this.state
    let dates
    const leapYears = []  
    for (let i = 1928; i < 3000; i += 4) {
      leapYears.push(i.toString())
    }
    const isLeapYear = leapYears.includes(selectedYear)
    const isFebruary = selectedMonth === 'February'
    const isLeapMonth = isLeapYear && isFebruary
    const is31Days = ['January', 'March', 'May', 'July', 'August', 'October', 'December'].includes(selectedMonth)
    if (is31Days) {
      dates = setInitialDates()
    } 
    else {
      if (isFebruary) {
        if (isLeapMonth) {
          dates = generateDates(29)
          if (selectedDate > 29) {
            this.setState({ selectedDate: '29' })
          }
        } 
        else {
          dates = generateDates(28)
          if (selectedDate > 28) {
            this.setState({ selectedDate: '28' })
          }
        }
      } 
      else {
        dates = generateDates(30)
        if (selectedDate > 30) {
          this.setState({ selectedDate: '30' })
        }
      }
    }
    this.setState({ dates })
  }

  toggleDateOfBirth = e => {
    const attribute = e.target.getAttribute('data-dob') 
    if(attribute) {
      this.setState({ [attribute]: !this.state[attribute] })
    }
  }

  toggleBottomSheets = displayType => () => {
    this.setState({ [displayType]: !this.state[displayType] })
  }

  updateDOB = (dobType, value) => () => {
    this.props.setFieldValue(this.props.name, {...this.props.value, [dobType]: value }, true)
    this.setState({ [dobType]: value },() => this.updateDateList())
  }

  render() {
    const { 
      dates, 
      months, 
      years,
      showDate,
      showMonth,
      showYear,
      selectedDate, 
      selectedMonth, 
      selectedYear, 
    } = this.state
    const { error={} } = this.props
    const datesList = dates.map((date) => ({
      onClick: () => {
          this.updateDOB('selectedDate', date.toString())()
          this.toggleBottomSheets('showDate')()
        },
      text: date,
    }))
    const monthsList = months.map((month) => ({
      onClick: () => {
        this.updateDOB("selectedMonth", month)()
        this.toggleBottomSheets('showMonth')()
      },
      text: month,
    }))
    const yearsList = years.map((year) => ({
      onClick: () => {
        this.updateDOB("selectedYear", year.toString())()
        this.toggleBottomSheets('showYear')()
      },
      text: year,
    }))
    const renderErrors =  error.selectedDate || error.selectedMonth || error.selectedYear ? (
      <small
        style={{
          display: 'block',
          marginTop: '-22px',
          marginBottom: 10,
          color: '#D50000'
        }}
      >
        {error.selectedDate || error.selectedMonth || error.selectedYear}
      </small>
    ) : null 
    return (
      <Fragment>
        <DateContainer>
          <section className="dob__container">
            <div className="form__textfield--wrapper">
            <label htmlFor="" className="form__label">
                  Tanggal Lahir
                </label>
                <div className="form__textfield--wrapper content--multiple-three" style={{'display':'flex', 'marginBottom': '38px'}}>
                  {/* you can add class error and success */}
                  <div
                    role="presentation"
                    className="ft-semantic__textfield--wrapper" style={{'width':'33%'}}>
                    <div
                      role="presentation"
                      className={classnames('ft-semantic__textfield',{'error': error.selectedDate})}
                      data-dob="showDate"
                      onClick={this.toggleDateOfBirth}
                      onBlur={() => this.handleBlur('selectedDate')}
                      tabIndex="0"  
                    >
                      {/* change class placeholder with value if any value */}
                      <div role="presentation" className="placeholder">
                        { selectedDate ? selectedDate : 'Tanggal'}
                      </div>
                    </div>
                    <div className="ft-semantic__textfield-info" />
                  </div>
                  <div
                    role="presentation"
                    className="ft-semantic__textfield--wrapper" style={{'width':'33%'}}>
                    <div
                      role="presentation"
                      className={classnames('ft-semantic__textfield',{'error': error.selectedMonth})}
                      data-dob="showMonth"
                      onClick={this.toggleDateOfBirth}
                      onBlur={() => this.handleBlur('selectedMonth')}
                      tabIndex="0"  
                    >
                      <div role="presentation" className="placeholder">
                        {selectedMonth ? selectedMonth : 'Bulan'}
                      </div>
                    </div>
                    <div className="ft-semantic__textfield-info" />
                  </div>
                  <div
                    role="presentation"
                    className="ft-semantic__textfield--wrapper"
                    style={{'width':'33%'}}
                    >
                    <div
                      role="presentation"
                      className={classnames('ft-semantic__textfield',{'error': error.selectedYear})}
                      data-dob="showYear"
                      onClick={this.toggleDateOfBirth}
                      onBlur={() => this.handleBlur('selectedYear')}
                      tabIndex="0"  
                    >
                      <div role="presentation" className="placeholder">
                        {selectedYear ? selectedYear : 'Tahun'}
                      </div>
                    </div>
                    <div className="ft-semantic__textfield-info" />
                  </div>
                </div>  
                {renderErrors}    
            </div>
          </section>
        </DateContainer>

        <BottomSheetV2
          className="ft-recharge-unify__bottomsheet"
          withClose
          title="Pilih Tanggal"
          onClose={this.toggleBottomSheets('showDate')}
          display={showDate}>
          <div
            style={{
              maxHeight: '300px',
              overflowY: 'auto',
              margin: '-16px -16px 0',
              padding: '16px'
            }}>
            <List noMargin items={datesList} />
          </div>
        </BottomSheetV2>

        <BottomSheetV2
          className="ft-recharge-unify__bottomsheet"
          withClose
          title="Pilih Bulan"
          onClose={this.toggleBottomSheets('showMonth')}
          display={showMonth}>
          <div
            style={{
              maxHeight: '300px',
              overflowY: 'auto',
              margin: '-16px -16px 0',
              padding: '16px'
            }}>
            <List
              noMargin
              items={monthsList}
            />
          </div>
        </BottomSheetV2>

        <BottomSheetV2
            className="ft-recharge-unify__bottomsheet"
            withClose
            title="Pilih Tahun"
            onClose={this.toggleBottomSheets('showYear')}
            display={showYear}>
            <div
              style={{
                maxHeight: '300px',
                overflowY: 'auto',
                margin: '-16px -16px 0',
                padding: '16px'
              }}>
              <List noMargin items={yearsList} />
            </div>
          </BottomSheetV2>
      </Fragment>
    )
  }
}

export default DateOfBirth
