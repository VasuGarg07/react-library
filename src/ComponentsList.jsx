import { lazy } from 'react';

// ─── Apps ──────────────────────────────────────────────────────────────────
const TodoMain = lazy(() => import('./apps/Todo/TodoMain'));

// ─── Components ────────────────────────────────────────────────────────────
const Accordion = lazy(() => import('./components/Accordion'));
const CarouselDemo = lazy(() => import('./demos/CarouselDemo'));
const ChipsInput = lazy(() => import('./components/ChipsInput'));
const CommentsDemo = lazy(() => import('./demos/CommentsDemo'));
const DialogDemo = lazy(() => import('./demos/DialogDemo'));
const MenuBar = lazy(() => import('./components/MenuBar'));
const OtpInput = lazy(() => import('./components/OtpInput'));
const PaginationDemo = lazy(() => import('./demos/PaginationDemo'));
const ProgressBarDemo = lazy(() => import('./demos/ProgressBarDemo'));
const RatingDemo = lazy(() => import('./demos/RatingDemo'));
const StepperDemo = lazy(() => import('./demos/StepperDemo'));
const Stopwatch = lazy(() => import('./components/Stopwatch'));
const Tabs = lazy(() => import('./components/Tabs'));
const ToastDemoWithProvider = lazy(() => import('./demos/ToastDemoWithProvider'));
const TrafficLight = lazy(() => import('./demos/TrafficLight'));
const TreeView = lazy(() => import('./demos/TreeView'));
const Typeahead = lazy(() => import('./components/Typeahead'));
const VirtualListDemo = lazy(() => import('./demos/VirtualListDemo'));

// ─── Hooks ─────────────────────────────────────────────────────────────────
const ClickOutsideHook = lazy(() => import('./demos/ClickOutsideHook'));
const CopyToClipboardHook = lazy(() => import('./demos/CopyToClipboardHook'));
const DebounceHook = lazy(() => import('./demos/DebounceHook'));
const FetchHook = lazy(() => import('./demos/FetchHook'));
const InfiniteScrollDemo = lazy(() => import('./demos/InfiniteScrollDemo'));
const LocalStorageHook = lazy(() => import('./demos/LocalStorageHook'));
const MediaQueryHook = lazy(() => import('./demos/MediaQueryHook'));
const OnLineHook = lazy(() => import('./demos/OnLineHook'));
const PreviousHook = lazy(() => import('./demos/PreviousHook'));
const ThemeHook = lazy(() => import('./demos/ThemeHook'));
const ToggleHook = lazy(() => import('./demos/ToggleHook'));
const WindowSizeHook = lazy(() => import('./demos/WindowSizeHook'));


const APPS_LIST = [
    // Apps
    { name: 'Todo App', category: 'Apps', component: TodoMain },

    // Components
    { name: 'Accordion', category: 'Components', component: Accordion },
    { name: 'Carousel', category: 'Components', component: CarouselDemo },
    { name: 'Chips Input', category: 'Components', component: ChipsInput },
    { name: 'Dialog', category: 'Components', component: DialogDemo },
    { name: 'Menu Bar', category: 'Components', component: MenuBar },
    { name: 'Nested Comments', category: 'Components', component: CommentsDemo },
    { name: 'OTP Input', category: 'Components', component: OtpInput },
    { name: 'Pagination', category: 'Components', component: PaginationDemo },
    { name: 'Progress Bar', category: 'Components', component: ProgressBarDemo },
    { name: 'Star Rating', category: 'Components', component: RatingDemo },
    { name: 'Stepper', category: 'Components', component: StepperDemo },
    { name: 'Stopwatch', category: 'Components', component: Stopwatch },
    { name: 'Tabs', category: 'Components', component: Tabs },
    { name: 'Toasts', category: 'Components', component: ToastDemoWithProvider },
    { name: 'Traffic Lights', category: 'Components', component: TrafficLight },
    { name: 'Tree View', category: 'Components', component: TreeView },
    { name: 'Typeahead Search', category: 'Components', component: Typeahead },
    { name: 'Virtualized List', category: 'Components', component: VirtualListDemo },

    // Hooks
    { name: 'useClickOutside', category: 'Hooks', component: ClickOutsideHook },
    { name: 'useCopyToClipboard', category: 'Hooks', component: CopyToClipboardHook },
    { name: 'useDebounce', category: 'Hooks', component: DebounceHook },
    { name: 'useFetch', category: 'Hooks', component: FetchHook },
    { name: 'useInfiniteScroll', category: 'Hooks', component: InfiniteScrollDemo },
    { name: 'useLocalStorage', category: 'Hooks', component: LocalStorageHook },
    { name: 'useMediaQuery', category: 'Hooks', component: MediaQueryHook },
    { name: 'useOnlineStatus', category: 'Hooks', component: OnLineHook },
    { name: 'usePrevious', category: 'Hooks', component: PreviousHook },
    { name: 'useTheme', category: 'Hooks', component: ThemeHook },
    { name: 'useToggle', category: 'Hooks', component: ToggleHook },
    { name: 'useWindowSize', category: 'Hooks', component: WindowSizeHook },
];

export const CATEGORIES = ['Apps', 'Components', 'Hooks'];
export default APPS_LIST;