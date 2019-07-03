const applicationData = {
  info: {
    title: 'ASURANSI KESEHATAN',
    description: 'Hospital Cash Plan - Basic',
    ctaText: 'detail',
    ctaLink: 'http://www.google.com',
  },
  formData: {
    formTitle: 'Lengkapi Informasi',
    formDescription: 'Pastikan data yang dimasukkan sesuai dengan data yang terdapat di KTP',
    badge: 'Hanya 1 menit',
    formFields: [{
      id: "name",
      label: "Full name",
      placeholder: "Enter full name",
      type: "text",
      validationType: "string",
      initialValue: "",
      validations: [{
          type: "required",
          params: ["this field is required"]
        },
        {
          type: "min",
          params: [5, "name cannot be less than 5 characters"]
        },
        {
          type: "max",
          params: [10, "name cannot be more than 10 characters"]
        }
      ]
    },
    {
      id: "dob",
      label: "Date of birth",
      type: "dob",
      value: {
        selectedDate: '',
        selectedMonth: '',
        selectedYear: ''
      },
      validations: [
        // {
        //   type: "required",
        //   params: ["this field is required"]
        // },
        // {
        //   type: "min",
        //   params: [1, "there should be atleast 1 family member"]
        // },
        // {
        //   type: "max",
        //   params: [5, "max family members can be 5"]
        // }
      ]
    },
    {
      id: 'ticker id',
      type: 'infoTicker',
      text: 'Asuransi berlaku selama 20 hari, dihitung sejak tanggal keberangkatan.'
    },
    {
      id: "email",
      label: "Email",
      placeholder: "Email",
      type: "text",
      validationType: "string",
      initialValue: "",
      validations: [{
          type: "email",
          params: ["please enter a valid email"]
        },
        {
          type: "required",
          params: ["this field is required"]
        },
        {
          type: "min",
          params: [8, "email cannot be less than 8 characters"]
        },
        {
          type: "max",
          params: [25, "email cannot be more than 10 characters"]
        },
      ]
    },
    {
      id: "phoneNumber",
      label: "phone number",
      type: "text",
      validationType: "string",
      placeholder: 'cth: 08123456789',
      initialValue: "",
      validations: [{
          type: "min",
          params: [7, "phone number cannot be less than 7 characters"]
        },
        {
          type: "max",
          params: [10, "phone number cannot be more than 10 characters"]
        },
        {
          type: "required",
          params: ["phone number is required"]
        }
      ]
    },
    {
      id: 'ticker id',
      type: 'messageTicker',
      text: 'Polis akan dikirim melalui e-mail dan topchat.'
    },
    {
      id: 'termsAndConditions',
      type: 'termsAndConditions',
      label: 'Dengan ini saya setuju dengan <a onClick={this.toggleDisplayTnc}> Syarat dan Ketentuan</a> yang berlaku.'
      // popupDetails: {
      //   "id": 'popid',
      //   "type": "popup",
      //   "title": "Detail Asuransi",
      //   "product_name": 'Hospital Cash Plan - Basic',
      //   "img_url": '<img >' ,
      //   "underwiter_name": "Allianz Life indonesia",
      //   "values": [{
      //       "title": "Manfaat Asuransi",
      //       "html": "<ul> <li> <span class=\"check\"/> Santunan Perawatan Rumah Sakit akibat DBD sebesar <strong>Rp 1.000.000</strong> </li> <li> <span class=\"check\"/> Santunan Perawatan Rumah Sakit akibat DBD sebesar <strong>Rp 1.000.000</strong> </li> </ul>"
      //     },
      //     {
      //       "title": "Persayaratan Umaun",
      //       "html": "<ul> <li> <span class=\"check\"/> Santunan Perawatan Rumah Sakit akibat DBD sebesar <strong>Rp 1.000.000</strong> </li> <li> <span class=\"check\"/> Santunan Perawatan Rumah Sakit akibat DBD sebesar <strong>Rp 1.000.000</strong> </li> </ul>"
      //     }
      //   ]
      // }
    },
  ],
  },
}

export default applicationData

// export const formData = [
//   {
//     id: "name",
//     label: "Full name",
//     placeholder: "Enter full name",
//     type: "text",
//     validationType: "string",
//     value: "",
//     validations: [
//       {
//         type: "required",
//         params: ["this field is required"]
//       },
//       {
//         type: "min",
//         params: [5, "name cannot be less than 5 characters"]
//       },
//       {
//         type: "max",
//         params: [10, "name cannot be more than 10 characters"]
//       }
//     ]
//   },
//   {
//     id: "email",
//     label: "Email",
//     placeholder: "Email",
//     type: "text",
//     validationType: "string",
//     value: "",
//     validations: [
//       {
//         type: "email",
//         params: ["please enter a valid email"]
//       },
//       {
//         type: "required",
//         params: ["this field is required"]
//       },
//       {
//         type: "min",
//         params: [8, "email cannot be less than 8 characters"]
//       },
//       {
//         type: "max",
//         params: [25, "email cannot be more than 10 characters"]
//       },
//     ]
//   },
//   {
//     id: "phoneNumber",
//     label: "phone number",
//     type: "text",
//     validationType: "string",
//     value: "",
//     validations: [
//       {
//         type: "min",
//         params: [7, "phone number cannot be less than 7 characters"]
//       },
//       {
//         type: "max",
//         params: [10, "phone number cannot be more than 10 characters"]
//       },
//       {
//         type: "required",
//         params: ["phone number is required"]
//       }
//     ]
//   },
//   {
//     id: "total",
//     label: "Total People in Family",
//     placeholder: "family members count",
//     type: "text",
//     validationType: "number",
//     required: false,
//     value: "1",
//     validations: [
//       {
//         type: "required",
//         params: ["this field is required"]
//       },
//       {
//         type: "min",
//         params: [1, "there should be atleast 1 family member"]
//       },
//       {
//         type: "max",
//         params: [5, "max family members can be 5"]
//       }
//     ]
//   },
//   {
//     id: "dob",
//     label: "Date of birth",
//     // placeholder: "family members count",
//     type: "dob",
//     //validationType: "number",
//     // required: false,
//     // value: "1",
//     value: {
//       day: 3,
//       month: 'June',
//       year: 1990
//     },
//     validations: [
//       // {
//       //   type: "required",
//       //   params: ["this field is required"]
//       // },
//       // {
//       //   type: "min",
//       //   params: [1, "there should be atleast 1 family member"]
//       // },
//       // {
//       //   type: "max",
//       //   params: [5, "max family members can be 5"]
//       // }
//     ]
//   }
// ];
