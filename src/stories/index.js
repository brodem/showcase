import React from 'react'

import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import '../scss/showcase.scss'

import Btn from '../Components/Button/Btn'
import Mobile from '../Components/Devices/Mobile'
import Tablet from '../Components/Devices/Tablet'

storiesOf('Buttons', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Primary', () => <Btn />)
  .add('Primary custom text', () => <Btn text="Click me!" />)
  .add('Flat', () => <Btn classes={'a-buttonFlat'} />)
  .add('Flat custom text', () => (
    <Btn classes={'a-buttonFlat'} text="Click me!" />
  ))

storiesOf('Devices/Mobiles', module)
  .add('Dark', () => <Mobile />)
  .add('Dark no notch', () => <Mobile notch={false} />)
  .add('Dark landscape', () => <Mobile landscape={true} />)
  .add('Light', () => <Mobile shade={'light'} />)
  .add('Light no notch', () => <Mobile shade={'light'} notch={false} />)
  .add('Light no notch landscape', () => (
    <Mobile shade={'light'} notch={false} landscape={true} />
  ))

storiesOf('Devices/Tablets', module)
  .add('Dark', () => <Tablet />)
  .add('Dark landscape', () => <Tablet landscape={true} />)
  .add('Light', () => <Tablet shade={'light'} />)
  .add('Light landscape', () => <Tablet shade={'light'} landscape={true} />)
