import { module } from 'angular'
import { react2angular } from 'react2angular'
import { App, Calendar, MonthPickerComponent } from './6-angular2react'

module('myModule', [])
  .component('monthPicker', MonthPickerComponent)
  .component('app', react2angular(App))
  .component('calendar', react2angular(Calendar, ['day', 'month', 'year']))
