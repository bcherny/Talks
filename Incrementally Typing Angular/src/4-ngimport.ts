import { module } from 'angular'
import Component from 'ngcomponent'
import { $http } from 'ngimport'

type Props = {
  day: number
  month: number
  year: number
}

type State = {
  events: Array<{ name: string }>
}

module('myModule', [])
  .component('calendar', {
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
      constructor() {
        super()
        this.fetchEvents()
      }
      fetchEvents() {
        const { day, month, year } = this.props
        $http.get<any>('/api/events', { params: { day, month, year }})
          .then(events => this.state.events = events.data)
      }
    }
  })
  .component('app', {
    template: `<calendar date="3" month="4" year="5"></calendar>`
  })