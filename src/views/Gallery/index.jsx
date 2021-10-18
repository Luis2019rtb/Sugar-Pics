import React, { lazy } from 'react';
import { Row, Col } from 'antd'
import { useSelector } from 'react-redux';

const CardImage = lazy(() => import('../../components/util-components/GeneralCard'));

const Gallery = props => {

    /**
    * Setting Up selector
    */


    const images = useSelector(state => state.imageList.list);

    return (
        <>
            <Row>
                {images.map(item => (
                    <Col className="col" key={item.id} span={6}>
                        <CardImage pixelPicture={item} />
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default Gallery;