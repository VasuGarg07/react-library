import { useState } from "react";
import Modal from "./Modal";

export default function ModalContainer() {
    const [open, setOpen] = useState(false);
    const handleModalOpen = (event) => {
        event.stopPropagation();
        setOpen((prev) => !prev);
    }

    return (
        <>
            <button onClick={(handleModalOpen)}>{open ? 'Close' : 'Open'} Modal</button>
            {open && <Modal onClose={() => setOpen(false)} />}
        </>
    )
}