import React from 'react';
import Modal from '../modal';

import {
    Container,
    Spinner,
    Text
} from './styles';

interface Props {
    opacity? : number;
}

const Loader : React.FC<Props> = ({opacity = 1}) => {
    return (
        <Modal>
            <Container opacity={opacity}>
                <Text>free.pick</Text>
                <Spinner/>
            </Container>
        </Modal>
    )
}

export default Loader;