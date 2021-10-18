import React from 'react';
import PropTypes from 'prop-types'
import GeneralImage from '../GeneralImage';
import { Card, Typography } from 'antd'
import { LikeOutlined, EyeOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';



const GeneralCard = props => {

    /**
     * Props to passed
     */
    const { pixelPicture } = props;

    const { Title } = Typography;

    const { largeImageURL, likes, views, downloads, tags } = pixelPicture

    /**
     * General styles fot he card 
     * Mandatory to have this blueprint
     */
    const GENERAL_CARD_STYLE = {
        width: 300,
        margin: "10px",
        textAlign: 'center',
        maxHeight: 400
    }

    const DATA_CARD_STYLE = {
        fontSize: '30px'
    }

    return (
        <>
            <Card
                hoverable
                style={GENERAL_CARD_STYLE}
                cover={<GeneralImage
                    url={largeImageURL}
                    imageHeigth={200}
                    imageWidth={300} />}
                actions={[
                    <>
                        {/*Likes*/}
                        <LikeOutlined style={DATA_CARD_STYLE} />
                        <Title level={4}>{likes}</Title>
                    </>,
                    <>
                        {/*Views*/}
                        <EyeOutlined style={DATA_CARD_STYLE} />
                        <Title level={4}>{views}</Title>
                    </>,
                    <>
                        {/*Downloads*/}
                        <VerticalAlignBottomOutlined style={DATA_CARD_STYLE} />
                        <Title level={4}>{downloads}</Title>
                    </>
                ]}
            >
                <Title level={4} >{tags}</Title>
            </Card>
        </>
    )
}

GeneralCard.propTypes = {
    pixelPicture: PropTypes.shape({
        largeImageURL: PropTypes.string,
        likes: PropTypes.number,
        views: PropTypes.number,
        tags: PropTypes.string,
        downloads: PropTypes.number,
    })
}

GeneralCard.defaultProps = {
    pixelPicture: {
        largeImageURL: '',
        likes: 0,
        views: 0,
        tags: "",
        downloads: 0,
    }
}


export default GeneralCard;


/**
 *
 *
 * id(pin):4255829
    pageURL(pin):"https://pixabay.com/photos/rose-flower-plant-garden-rose-4255829/"
    type(pin):"photo"
    tags(pin):"rose, flower, plant"
    previewURL(pin):"https://cdn.pixabay.com/photo/2019/06/06/11/49/rose-4255829_150.jpg"
    previewWidth(pin):150
    previewHeight(pin):97
    webformatURL(pin):"https://pixabay.com/get/g01198d31505bc609cf0fc12bde6796c8864d7228283e5285b4608aefb1cea65231e30dcb1627fbecd581d0ab9fffa6bf3bae22a1e002e801fef98833a2dc1e2d_640.jpg"
    webformatWidth(pin):640
    webformatHeight(pin):416
    largeImageURL(pin):"https://pixabay.com/get/gf6bbd67c7a0647f22e5531d7337b55c995a6b02d95d554d8c7867b34eb5112e2ab5fbba28862f7842132b3b0fa86f93fd77aee164bbfd4d35fa17f647fdeb204_1280.jpg"
    imageWidth(pin):4608
    imageHeight(pin):3001
    imageSize(pin):1586488
    views(pin):4004
    downloads(pin):2854
    collections(pin):27
    likes(pin):63
    comments(pin):35
    user_id(pin):5632430
    user(pin):"s-ms_1989"
    userImageURL(pin):"https://cdn.pixabay.com/user/2021/07/07/09-28-28-461_250x250.jpg"
 */