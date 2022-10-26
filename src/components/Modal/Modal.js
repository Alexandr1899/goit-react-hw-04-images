
import { createPortal } from "react-dom";
import { ModalBox, ModalField } from "./Modal.styled";
import PropTypes from 'prop-types';
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root")

export const Modal = ({children, closeModal}) => {
    useEffect(() => {
        const clickEscape = (evt) => {
        evt.preventDefault()
        if (evt.code === "Escape") {
            closeModal()
        }
    }
    const clickBackdrop = (evt) => {
        evt.preventDefault()
        if (evt.target === document.querySelector("#modal-root > div")) {
            closeModal()
        }
    }
        window.addEventListener("keydown", clickEscape)
        window.addEventListener("click", clickBackdrop)
        return () => {
            window.removeEventListener("keydown", clickEscape)
            window.removeEventListener("click", clickBackdrop)}
    }, [closeModal]
    )
    
        return createPortal(
            <ModalBox>
                <ModalField>
                    {children}
                </ModalField>
            </ModalBox>, modalRoot
        )
    }

Modal.propTypes = {
    children: PropTypes.element,
    closeModal: PropTypes.func
}