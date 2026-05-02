import Accordion from "./components/Accordion";
import Tabs from "./components/Tabs";
import Typeahead from "./components/Typeahead";
import ThemeHook from "./demos/ThemeHook";
import ToggleHook from "./demos/ToggleHook";
import LocalStorageHook from "./demos/LocalStorageHook";
import DebounceHook from "./demos/DebounceHook";
import ClickOutsideHook from "./demos/ClickOutsideHook";
import VirtualListDemo from "./demos/VirtualListDemo";
import DialogDemo from "./demos/DialogDemo";
import RatingDemo from "./demos/RatingDemo";
import CarouselDemo from "./demos/CarouselDemo";
import TreeView from "./demos/TreeView";
import OnLineHook from "./demos/OnLineHook";
import ProgressBarDemo from "./demos/ProgressBarDemo";
import PaginationDemo from "./demos/PaginationDemo";
import CommentsDemo from "./demos/CommentsDemo";
import StepperDemo from "./demos/StepperDemo";
import ChipsInput from "./components/ChipsInput";

const APPS_LIST = [
    { name: "ChipsInput", component: <ChipsInput /> },
    { name: "Stepper", component: <StepperDemo /> },
    { name: "Nested Comments", component: <CommentsDemo /> },
    { name: "Pagination", component: <PaginationDemo /> },
    { name: "Progress Bar", component: <ProgressBarDemo /> },
    { name: "Tree View", component: <TreeView /> },
    { name: "Carousel", component: <CarouselDemo /> },
    { name: "Star Rating", component: <RatingDemo /> },
    { name: "Dialog Component", component: <DialogDemo /> },
    { name: "Virtualized List", component: <VirtualListDemo /> },
    { name: "Tabs", component: <Tabs /> },
    { name: "Typeahead Search", component: <Typeahead /> },
    { name: "Accordion", component: <Accordion /> },
    { name: "useOnlineStatus Hook", component: <OnLineHook /> },
    { name: "useClickOutside Hook", component: <ClickOutsideHook /> },
    { name: "useDebounce Hook", component: <DebounceHook /> },
    { name: "useLocalStorage Hook", component: <LocalStorageHook /> },
    { name: "useTheme Hook", component: <ThemeHook /> },
    { name: "useToggle Hook", component: <ToggleHook /> },
];

export default APPS_LIST;