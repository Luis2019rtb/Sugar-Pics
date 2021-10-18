import React from 'react';
import { Image } from 'antd';
import PropTypes from 'prop-types'


const GeneralImage = props => {

    const { url, imageWidth , imageHeigth } = props;
    return <Image width={imageWidth} height={imageHeigth} src={url} />
}

GeneralImage.propTypes = {
    imageWidth: PropTypes.number,
    imageHeigth:PropTypes.number,
    url: PropTypes.string
}
GeneralImage.defaultProps = {
    imageWidth: 200,
    imageHeigth:200,
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
}


export default GeneralImage;