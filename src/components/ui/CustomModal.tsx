import React from 'react';
import {
    Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
    ButtonStrip,
    Button
} from '@dhis2/ui';

interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    onSave: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, title, children, onSave }) => {
    return (
        isOpen ? (
            <Modal>
                <ModalTitle>{title}</ModalTitle>
                <ModalContent>
                    {children}
                </ModalContent>
                <ModalActions>
                    <ButtonStrip end>
                        <Button onClick={onClose} secondary>
                            Cancel
                        </Button>
                        <Button onClick={onSave} primary>
                            Save changes
                        </Button>
                    </ButtonStrip>
                </ModalActions>
            </Modal>
        ) : null
    );
};

export default CustomModal;
