import {shallow} from 'enzyme'
import React from 'react'

import {BLOCK_CLASS_NAME, DAYS_OF_WEEK} from '../consts'
import DaysOfWeek from '../days_of_week'

describe('DaysOfWeek', () => {
  let wrapper, props

  beforeEach(() => {
    props = getProps()
    wrapper = shallow(<DaysOfWeek {...props} />)
  })

  describe('#_getDaysOfWeek', () => {
    it('return days of week', () => {
      const daysOfWeek = wrapper.instance()._getDaysOfWeek(3)

      expect(daysOfWeek).toEqual(['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'])
    })
  })

  describe('#render', () => {
    it('renders <DaysOfWeek />', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

const getProps = (overrides = {}) => ({
  blockClassName: BLOCK_CLASS_NAME,
  daysOfWeek: DAYS_OF_WEEK,
  weekStartsOn: 1,
  ...overrides,
})
