'use client'

import { Button } from 'flowbite-react'
import { showToast } from '../Toast/storeToast'

const CounterComponent = () => {
  return (
    <>
      <Button
        title="success"
        onClick={() =>
          showToast({
            status: 'success',
            text: 'Counter',
          })
        }
      />
      <Button
        title="error"
        onClick={() =>
          showToast({
            status: 'error',
            text: 'Counter afasd;kfja;sdfkjalksdjf kasdf kjasdkfja;sldkjfaksjdfjkfj;aksdjf asdkfja;sdlkfja sdfas;dlkfjas dfkjas;dfkja sdf',
          })
        }
      />
      <Button />
      <Button />
    </>
  )
}
export default CounterComponent
