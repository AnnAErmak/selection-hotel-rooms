import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const showDatePicker = () =>{
    datePicker.show()
}


const datePickerStart = document.querySelector('.js-dateDropdown__item_start')
const datePickerFinish = document.querySelector('.js-dateDropdown__item_finish')
datePickerStart.addEventListener('click', showDatePicker)
datePickerFinish.addEventListener('click', showDatePicker)

const writeDate = (dateStart, dateFinish) => {
    console.log(dateStart, dateFinish)
    if (dateStart&&dateFinish) {
        datePickerStart.value = dateStart
        datePickerFinish.value = dateFinish
    }

}


let datePickerBtnApply = {
    content: 'ПРИМЕНИТЬ',
    className: 'datepicker-btn-apply',
    onClick: (dp) => {
        dp.hide()
    }
}

let datePicker = new AirDatepicker('.dateDropdown__datepicker-global',{
    selectOtherMonths: true,
    minDate: new Date(),
    multipleDates: 2,
    range: true,
    dynamicRange: true,
    buttons: ['clear', datePickerBtnApply],
    autoClose: false,
    dateFormat:'dd.MM.yyyy',
    navTitles: {
        days: 'MMMM yyyy'
    },
    onHide: function (isFinished) {
        if (isFinished) {

            writeDate(datePicker.formatDate(datePicker.selectedDates[0],'dd.MM.yyyy'),
                datePicker.formatDate(datePicker.selectedDates[1],'dd.MM.yyyy'))
        }
    },

})

let datePicker2 = new AirDatepicker('.d',{
    selectOtherMonths: true,
    minDate: new Date(),
    multipleDates: 2,
    range: true,
    dynamicRange: true,
    buttons: ['clear', datePickerBtnApply],
    autoClose: false,
    dateFormat:'dd.MM.yyyy',
    navTitles: {
        days: 'MMMM yyyy'
    },


    onHide: function (isFinished) {
        if (isFinished) {
            writeDate(datePicker.formatDate(datePicker.selectedDates[0],'dd.MM.yyyy'),
                datePicker.formatDate(datePicker.selectedDates[1],'dd.MM.yyyy'))
        }
    },

})

// new AirDatepicker('.js-dateDropdown__item_start')