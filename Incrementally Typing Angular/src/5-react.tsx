import React, { Component } from 'react'
import { $http } from 'ngimport'

type Props = {
  day: number
  month: number
  year: number
}

type State = {
  events: Array<{ name: string }>
}

export class Calendar extends Component<Props, State> {
  render() {
    return <div>
      <p>Today is: {this.props.day}/{this.props.month}/{this.props.year}</p>
      <p>Today's events are:</p>
      <ul>{events.map(event => <li key={event.name}>{event.name}</li>)}</ul>
      <MonthPicker year={this.props.year} month={this.props.moth} />
    </div>
  }
  constructor() {
    super()
    this.fetchEvents()
  }
  fetchEvents() {
    const { day, month, year } = this.props
    $http.get<any>('/api/events', { params: { day, month, year }})
      .then(events => this.setState({ events: events.data }))
  }
}

export const App = () =>
  <Calendar date={3} month={4} year={5} />
