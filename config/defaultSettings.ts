import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = ProSettings & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'Telecare',
  pwa: false,
  iconfontUrl: 'https://telecareonline.com.au/assets/logo-68974c781dc7bba54130309a5bedeb8fac9b7b5a62c6b14a05dd1991434d98d2.png',
};

export type { DefaultSettings };

export default proSettings;
