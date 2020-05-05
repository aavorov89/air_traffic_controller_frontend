import { compose } from 'redux'

import component from './index.component'
import container from './index.container'
import wrapper from './index.wrapper'

export default compose(container, wrapper)(component)