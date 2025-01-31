import {
  ReactIcon,
  UIKitIcon,
  AngularIcon,
  AndroidIcon,
  AppleIcon,
  FlutterIcon,
  HTMLIcon,
  VueIcon,
} from './icons';

const SECTIONS = [
  // no sections for default section, i.e; home
  {
    id: 'default',
    section: false,
  },
  {
    id: 'guides',
    section: false,
  },

  {
    name: 'React SDKx',
    id: 'react',
    icon: ReactIcon,
    section: 'old-web-sdks',
  },
  {
    name: 'JavaScript SDK',
    id: 'javascript',
    icon: UIKitIcon,
    section: 'old-web-sdks',
  },

  // Web SDKs
  // - ui-sdk
  {
    name: 'HTML Web Components',
    id: 'ui-kit',
    icon: HTMLIcon,
    section: 'ui-sdk',
  },
  {
    name: 'React UI Kit',
    id: 'react-ui-kit',
    icon: ReactIcon,
    section: 'ui-sdk',
  },
  {
    name: 'Angular UI Kit',
    id: 'angular-ui-kit',
    icon: AngularIcon,
    section: 'ui-sdk',
  },
  {
    name: 'Vue UI Kit',
    id: 'vue-ui-kit',
    icon: VueIcon,
    section: 'ui-sdk',
    disabled: true,
  },

  // - core-sdk
  {
    name: 'JavaScript',
    id: 'web-core',
    icon: UIKitIcon,
    section: 'core-sdk',
  },

  // Mobile SDKs
  {
    name: 'React Native',
    id: 'react-native',
    icon: ReactIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'Android',
    id: 'android',
    icon: AndroidIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'iOS',
    id: 'ios',
    icon: AppleIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'Flutter',
    id: 'flutter',
    icon: FlutterIcon,
    section: 'mobile-sdk',
  },
];

const MULTI_SECTIONS = [
  [
    {
      name: 'UI Kit',
      section: 'ui-sdk',
      description:
        'Use our pre-built UI components as a base to build on top of.',
    },
    {
      name: 'Core SDK',
      section: 'core-sdk',
      description: 'Build your own UI from scratch, use our low level APIs.',
    },
  ],
];

export { SECTIONS, MULTI_SECTIONS };
