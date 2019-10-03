# `hospital-iq` take-home assessment

* An implementation of the take-home assessment for a frontend engineering position
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Requirements

* Design and implement a view based on an API response
  * The API endpoint, hosted on Apiary, provides metadata about some units (groups of beds) within a hospital
* Consume the output of a simple API
* Use HTML, CSS and Javascript to render the data in a readable, usable manner
* Add some sorting mechanism so the data can be sorted in different ways

### API

`https://private-66479-hospiqtest.apiary-mock.com/units`

* `id`:(string) a unique id
* `name`: (string) unit name - may not be unique but will always be valued
* `capacity`: (number) maximum number of patients the unit can accommodate
* `census`: (number) the number of patients currently in this unit
* `highAlarm`: (number or null) if specified, an alarm will trigger if the census falls at or above this value. May be null, indicating no upper alarm is set
* `lowAlarm`: (number or null) if specified, an alarm will trigger if the census falls at or below this value. May be null, indicating no lower alarm is set

## Visual Examples

**Application Example**

![](https://i.imgur.com/NPQsEuK.png "hospital-iq application example")

**Empty table**

![](https://i.imgur.com/3hovqe5.png "hospital-iq application empty table")

**Error state**

![](https://i.imgur.com/V7GyV65.png "hospital-iq application error state")

**Sorting Example**

![](https://i.imgur.com/9Wam0zL.gif "hospital-iq sorting example")

## Development server

Run `ng serve --aot` for a dev server after installing the app's packages via `npm install`. Navigate to `http://localhost:4200/`.

## Running Cypress tests

Cypress is an end-to-end integration testing utility for web applications. To run the Cypress tests for this project, follow the steps below:

* [Downloading and running Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Direct-download)

![](https://i.imgur.com/I2pV463.png "hospital-iq Cypress tests")
