import { ComponentType } from 'react';
import HomePage from '../domains/home/pages';
import ToyDoPage from '../domains/toydo/pages';
import ReadinPage from '../domains/readin/pages';
import PioPage from '../domains/pio/pages';
import LayeredPage from '../domains/layered/pages';
import HanaDiaryPage from '../domains/hana-diary/pages';
import DaydotPage from '../domains/daydot/pages';
import FocusOvenPage from '../domains/focusoven/pages';
import Auth from '../shared/pages/Auth';
import AuthVerify from '../shared/pages/AuthVerify';
import TermsAndPolicy from '../shared/pages/TermsAndPolicy';
import UserDelete from '../shared/pages/UserDelete';

export interface RouteConfig {
  path: string;
  element: ComponentType;
}

export const routes: RouteConfig[] = [
  { path: '/', element: HomePage },
  { path: '/ToyDo', element: ToyDoPage },
  { path: '/ToyDo/terms-and-policy', element: TermsAndPolicy },
  { path: '/readin', element: ReadinPage },
  { path: '/readin/terms-and-policy', element: TermsAndPolicy },
  { path: '/readin/user/delete', element: UserDelete },
  { path: '/pio', element: PioPage },
  { path: '/pio/terms-and-policy', element: TermsAndPolicy },
  { path: '/pio/user/delete', element: UserDelete },
  { path: '/layered', element: LayeredPage },
  { path: '/layered/terms-and-policy', element: TermsAndPolicy },
  { path: '/HanaDiary', element: HanaDiaryPage },
  { path: '/HanaDiary/terms-and-policy', element: TermsAndPolicy },
  { path: '/daydot', element: DaydotPage },
  { path: '/daydot/terms-and-policy', element: TermsAndPolicy },
  { path: '/FocusOven', element: FocusOvenPage },
  { path: '/FocusOven/terms-and-policy', element: TermsAndPolicy },
  { path: '/auth', element: Auth },
  { path: '/auth/verify', element: AuthVerify },
];

