export const generateDates = function(lastDay) {
  const arrayOfDate = []

  for (let i = 1; i <= lastDay; i++) {
    arrayOfDate.push((i < 10 ? "0" : "") + i.toString())
  }

  return arrayOfDate
}

export const setInitialDates = function() {
  return generateDates(31)
}

export const generateYears = lastYear => {
  const yearList = []

  for (let i = new Date().getFullYear(); i >= lastYear; i--) {
    yearList.push(i)
  }

  return yearList
}

export const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]
