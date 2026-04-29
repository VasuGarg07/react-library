import React, { useRef } from 'react'
import Dialog from '../components/Dialog'

const DialogDemo = () => {
    const ref = useRef(null);

    return (
        <>
            <button
                onClick={() => ref.current?.toggle()}>
                Toggle Dialog
            </button>
            <Dialog ref={ref}>
                <h4>You are viewing me in dialog</h4>
            </Dialog>
        </>
    )
}

export default DialogDemo