import React from 'react';
import Carousel from '../../../Utils/Carousel/Carousel';
import {SafeAreaView, Image} from 'react-native';

import pro1 from './images/professional_1.png';
import pro2 from './images/professional_2.png';
import pro3 from './images/professional_3.png';
import pro4 from './images/professional_4.png';

const ENTRIES1 = [
  {
    id: 0,
    illust: pro1,
  },
  {
    id: 1,
    illust: pro2,
  },
  {
    id: 2,
    illust: pro3,
  },
  {
    id: 3,
    illust: pro4,
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
  return <Image source={item.illust} style={{width: 320, height: 320}} />;
};
