import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    // src: 'assets/1.jpeg',
    src: 'https://www.shillahotels.com/images/contents/main/MAIN_HUB/R0000001A4LM_KR.jpg',
    altText: '슬라이드1 이미지 대체 문구',
    caption: '슬라이드1 설명',
    header: '슬라이드1 제목'
  },
  {
    src: 'assets/2.jpeg',
    src: 'https://www.shillahotels.com/images/contents/main/MAIN_HUB/R0000001AHU1_KR.jpg',
    altText: '슬라이드2 이미지 대체 문구',
    caption: '슬라이드2 설명',
    header: '슬라이드2 제목'
  },
  {
    // src: 'assets/3.jpeg',
    src: 'https://www.shillahotels.com/images/contents/main/MAIN_HUB/R0000001AHUB_KR.jpg',
    altText: '슬라이드3 이미지 대체 문구',
    caption: '슬라이드3 설명',
    header: '슬라이드3 제목'
  }
];

class R041_ReactstrapCarousel extends Component {
  render() {
    return (
        <UncontrolledCarousel items={items} />
    )}
}

export default R041_ReactstrapCarousel;