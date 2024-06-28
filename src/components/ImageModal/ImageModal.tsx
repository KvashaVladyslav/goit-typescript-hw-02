import Modal from 'react-modal'
import css from "./ImageModal.module.css"
import { ModalImagesInterface } from '../../types';

Modal.setAppElement('#root');

export default function ImageModal({ isModalOpen, closeModal, targetPhoto }: ModalImagesInterface) {
    
    return (
        <Modal 
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            overlayClassName={css.Overlay}
            className={css.Content}
            bodyOpenClassName={css.Open}
      >
          <img src={targetPhoto.url} alt={targetPhoto.alt} className={css.Img} />
        </Modal>
    )
}