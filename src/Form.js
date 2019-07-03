import React, { Component, Fragment } from 'react'
//import { Link } from 'react-router-dom'
import NavBar from 'unify-react-mobile/build/NavBar'
import Card from 'unify-react-mobile/build/Card'
import Button from 'unify-react-mobile/build/Button'
import TextField from 'unify-react-mobile/build/TextField'
import Checkbox from 'unify-react-mobile/build/Checkbox'
import BottomSheetV2 from 'unify-react-mobile/build/BottomSheetV2'
import Divider from 'unify-react-mobile/build/Divider'
import { Formik } from 'formik'
import * as yup from 'yup'
//import get from 'lodash/get'

import TermsAndConditions from './Components/TermsAndConditions'
import DateOfBirth from './Components/DatePicker'
import { InfoTicker, MessageTicker } from './Components/Ticker'
import applicationData from './formData'
import { FormContainer } from './_FormStyle'

class FormView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayDetailProduct: false,
    }
    this.componentList = {
      'text': TextField,
      'dob': DateOfBirth,
      'checkbox': Checkbox,
      'infoTicker': InfoTicker,
      'messageTicker': MessageTicker,
      'termsAndConditions': TermsAndConditions,
    }
  }

  renderFormElements = props => {
    const { formData:{ formFields } } = applicationData
    const formField = formFields.map((item, index) => {
      const Component = this.componentList[item.type];
      let error = props.errors.hasOwnProperty(item.id) && props.errors[item.id];
      const { id, label, placeholder, text, type } = item
      switch(type) {
        case 'dob': {
          return (
            <Component
              key={index}
              label={label}
              name={id}
              placeholder={item.placeholder}
              value={props.values[id]}
              onBlur={props.setFieldTouched}
              error={props.touched[id] && error}
              message={error}
              setFieldValue={props.setFieldValue}
              setFieldTouched={props.setFieldTouched}
          />
          )
        }
       case 'text': {
         return (
          <div className="form__textfield--wrapper" key={index}>
            <Component
              label={label}
              name={id}
              placeholder={placeholder}
              value={props.values[id]}
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              error={props.touched[id] && error}
              message={error}
          />
         </div>
         )
       }
       case 'infoTicker': {
         return (
           <Component
              key={index}
              text={text}
           />
         )
       }
       case 'messageTicker': {
         return (
           <Component 
              key={index}
              text={text}
           />
         )
       }
       case 'termsAndConditions': {
         return (
          <div className="form__textfield--wrapper" key={index}>
            <TermsAndConditions 
              label={label}
            />
           </div> 
         )
       }
       default:
         return null 
      }
  })
  return formField
}

  toggleDetailProduct = () => {
    this.setState({ displayDetailProduct: !this.state.displayDetailProduct })
  }

  render() {
    const { info, formData } = applicationData
    const { title, description, ctaText } = info
    const { formTitle, formDescription, badge } = formData
    if(!info || !title || !description) {
      return null
    }
    const renderApplicationInfo = (
      <Card className="form__summary--short" margin="0" padding="12px 16px">
        <div className="content__text--wrapper">
          <span className="label">{title}</span>
            <p className="ft-truncate ft-text__title title">
              {description}
            </p>
        </div>
        {/* <Link className="content__cta--wrapper" to="#!" onClick={this.toggleDetailProduct}> */}
          <Button filled main small block>
            {ctaText}
          </Button>
        {/* </Link> */}
      </Card>
    )
    const renderFormDetails = (
      <Fragment>
        <p className="ft-text__title form__title">
          {formTitle}
          { badge ? <span className="form__label-chips"> {badge} </span> : null }
        </p>
        <p className="form__subheading">
          {formDescription}
        </p>
      </Fragment>
    )
    const initialValues = {};
    formData.formFields.forEach(item => {
      initialValues[item.id] = item.value || "";
    })
    const validateSchema = yup.object().shape({
      name: yup.string().required().min(4, "min 4 char"),
      email: yup.string().email().required().min(4, "min 4 char"),
      phoneNumber: yup.string().required().min('8', "min 8 char").max(10,"max 10"),
      dob: yup.object().shape({
        selectedDate: yup.number().required("date is requried"),
        selectedMonth: yup.string().required("month is required"),
        selectedYear: yup.number().required("year is required"),
      })
    })
    return (
      <Fragment>
        <NavBar inverted title="Formulir Pendaftaran" onBack="#!" />
        <FormContainer>
          {renderApplicationInfo}
          <section className="form__container">
            {renderFormDetails}
            <div className="form__content--wrapper">
            <Formik
              initialValues={initialValues}
              validationSchema={validateSchema}
              onSubmit={(values, actions) => {
                console.log(`%c values ${values}`, 'color:teal;font-size:22px;')
                console.log("values", values);
              }}
              >
                {props => (
                  <form>
                    {this.renderFormElements(props)}
                    <Button
                      filled
                      main={true}
                      // disabled={!this.state.checkedAgreement}
                      large
                      block
                      submit
                      onClick={props.handleSubmit}
                    >
                      Lanjutkan
                    </Button>
                  </form>
                )}
            </Formik>
              <div className="form__textfield--wrapper">
            </div>
          </div>
          </section>
        </FormContainer>

        {/* Bottomsheet Detail Product */}
        <BottomSheetV2
          className="ft-recharge-unify__bottomsheet"
          withClose
          title="Detail Asuransi"
          onClose={this.toggleDetailProduct}
          display={this.state.displayDetailProduct}
        >
          <div className="sa-form__detail--wrapper">
            <div className="content__intro">
              <div className="content__logo--wrapper">
                <img
                  src="https://via.placeholder.com/35x12"
                  alt="Logo Partner"
                />
              </div>
              <div className="content__desc--wrapper">
                <p className="ft-text__title title">Allianz Life Indonesia</p>
                <p className="desc">Hospital Cash Plan - Basic</p>
              </div>
            </div>
            <Divider />

            <div className="content__detail--wrapper">
              <div className="content__detail">
                <p className="title">
                  <strong>Manfaat Asuransi</strong>
                </p>
                <ul className="list list--unordered">
                  <li>
                    Santunan perawatan rumah sakit akibat DBD sebesar
                    Rp1.000.000
                  </li>
                  <li>
                    Santunan meninggal dunia akibat DBD sebesar Rp20.000.000
                  </li>
                </ul>
              </div>

              <div className="content__detail">
                <p className="title">
                  <strong>Persyaratan Umum</strong>
                </p>
                <ol className="list list--ordered">
                  <li>Minimal usia Pemegang Polis: 21 tahun</li>
                  <li>Usia masuk Tertanggung: 3 bulan s/d 64 tahun</li>
                  <li>Cara pembayaran Premi Sekaligus</li>
                </ol>
              </div>
            </div>
          </div>
        </BottomSheetV2>
        {/* end of Bottomsheet Detail Product */}
      </Fragment>
    )
  }
}

export default FormView