import React from 'react';
import Carousel from '../../../Utils/Carousel/Carousel';
import {SafeAreaView, Image} from 'react-native';

import face1 from './images/facebook_connect_1.png';
import face2 from './images/facebook_connect_2.png';
import face3 from './images/facebook_connect_3.png';
import face4 from './images/facebook_connect_4.png';
import face5 from './images/facebook_connect_5.png';
const ENTRIES1 = [
  {
    id: 0,
    illust: face1,
  },
  {
    id: 1,
    illust: face2,
  },
  {
    id: 2,
    illust: face3,
  },
  {
    id: 3,
    illust: face4,
  },
  {
    id: 4,
    illust: face5,
  },
];

export default function MyCarousel(props: any) {
  return (
    <SafeAreaView>
      <Carousel
        page={props.Page}
        setPage={props.setPage}
        gap={40}
        data={ENTRIES1}
        pageWidth={320}
        RenderItem={ENTRIES1Page}
      />
    </SafeAreaView>
  );
}
const ENTRIES1Page = ({
  item,
}: {
  item: {
    id: number;
    illust: string;
  };
}) => {
  return <Image style={{width: 320, height: 270}} source={item.illust} />;
};
