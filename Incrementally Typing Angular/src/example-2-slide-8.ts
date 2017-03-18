angular.module('myModule').component('monthPicker', {
  bindings: {
    month: '<',
    year: '<',
    onPick: '&'
 },
  template: `
    <ul>
      <li ng-click="$ctrl.onPick({ day })"
          ng-repeat="day in $ctrl.getDaysInMonth()">{{ day }}</li>
    </ul>
  `,
  controller: class MonthPicker {
    month: number
    year: number
    getDaysInMonth() {
      const lastDay = new Date(this.year, this.month, 0).getDate()
      const days = []
      while (lastDay--) days.push(lastDay)
      return days
    }
  }
})