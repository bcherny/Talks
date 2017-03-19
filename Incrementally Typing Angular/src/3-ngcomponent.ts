//////////////////////////////////////////////////////////////////////////
// Calendar
//////////////////////////////////////////////////////////////////////////

import { module } from 'angular'
import Component from 'ngcomponent'

type Props = {
  day: number
  month: number
  year: number
}
type State = { events: Events }
type Events = Array<{ name: string }>

module('myModule').component('calendar', {
  bindings: {
    day: '<',
    month: '<',
    year: '<'
  },
  template: `
    <p>Today is: {{$ctrl.day}}/{{$ctrl.month}}/{{$ctrl.year}}</p>
    <p>Today's events are:</p>
    <ul><li ng-repeat="event in events">{{event.name}}</li></ul>
    <month-picker year="$ctrl.year" month="$ctrl.moth"></month-picker>
  `,
  controller: class Calendar extends Component<Props, State> {
    constructor(private $http: angular.IHttpService) {
      super()
      this.state.events = this.fetchEvents()
    }
    fetchEvents() {
      const { day, month, year } = this.props
      return this.$http.get<Events>('/api/events', { params: { day, month, yer }})
        .then(events => events.data)
    }
  }
})


//////////////////////////////////////////////////////////////////////////
// App
//////////////////////////////////////////////////////////////////////////

module('myModule').component('app', {
  template: `<calendar date="3" month="4" year="5"></calendar>`
})
