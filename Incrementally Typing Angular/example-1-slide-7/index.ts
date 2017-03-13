angular.module('myModule', []).component('calendar', {
  bindings: {
    day: '<',
    month: '<',
    year: '<'
  },
  template: `
    <p>Today is: {{$ctrl.day}}/{{$ctrl.month}}/{{$ctrl.year}}</p>
    <p>Today's events are:</p>
    <ul><li ng-repeat="event in events">{{event.name}}</li></ul>
    <month-picker year="$ctrl.year" month="$ctrl.moth"></month-picker>`,
  controller: class Calendar {
    day: number
    month: number
    year: number
    events: { name: string }[]
    constructor(private $http: angular.IHttpService) {
      this.fetchEvents()
    }
    fetchEvents() {
      const { day, month, year } = this
      this.$http.get('/api/events', { params: { day, month, year }})
        .then(events => this.events = events)
    }
  }
})
