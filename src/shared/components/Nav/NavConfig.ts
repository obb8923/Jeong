import { NavKey, NavConfig } from '../../types';

export const navConfigs: Record<NavKey, NavConfig> = {
  '/': {
    logo: 'Jeong',
    menu: [
      {
        type: 'button',
        text: '제품',
      }
    ]
  },
  '/ToyDo': {
    logo: 'ToyDo',
    menu: [
      {
        type: 'link',
        text: '약관 및 정책',
        to: '/ToyDo/terms-and-policy'
      }
    ]
  },
  '/readin': {
    logo: 'readin',
    menu: [
      {
        type: 'link',
        text: '약관 및 정책',
        to: '/readin/terms-and-policy'
      },
      {
        type: 'link',
        text: '회원 탈퇴',
        to: '/readin/user/delete'
      }
    ]
  },
  '/pio': {
    logo: 'pio',
    menu: [
      {
        type: 'external_link',
        text: '문의하기',
        href: 'mailto:companyjeong25@gmail.com?subject=문의하기'
      },
      {
        type: 'external_link',
        text: '건의하기',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSdZNHnBRyogMjZqO1jyGvQJfIHhoW4UhKv_8xS-mKyRzaVXTg/viewform?usp=header'
      },
      {
        type: 'link',
        text: '약관 및 정책',
        to: '/pio/terms-and-policy'
      },
      {
        type: 'link',
        text: '회원 탈퇴',
        to: '/pio/user/delete'
      }
    ]
  },
  '/layered': {
    logo: 'layered',
    menu: [
      {
        type: 'link',
        text: '약관 및 정책',
        to: '/layered/terms-and-policy'
      }
    ]
  },
  '/HanaDiary': {
    logo: '하나일기',
    menu: [
      {
        type: 'external_link',
        text: '문의하기',
        href: 'mailto:companyjeong25@gmail.com?subject=문의하기'
      },
      {
        type: 'external_link',
        text: '건의하기',
        href: 'https://docs.google.com/forms/d/1UwFIDg3nLWFeGyZTOcXMOe4Nvoy5z6NtjOu3rtB8RLc/edit'
      },
      {
        type: 'link',
        text: '약관 및 정책',
        to: '/HanaDiary/terms-and-policy'
      }
    ]
  },
  '/daydot': {
    logo: 'daydot',
    menu: [
      {
        type: 'link',
        text: '약관 및 정책',
        to: '/daydot/terms-and-policy'
      }
    ]
  }
};

