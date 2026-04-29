import Accordion from "./components/Accordion";
import StarRating from "./components/StarRating";
import Tabs from "./components/Tabs";
import Typeahead from "./components/Typeahead";
import ThemeHook from "./demos/ThemeHook";
import ToggleHook from "./demos/ToggleHook";
import LocalStorageHook from "./demos/LocalStorageHook";
import DebounceHook from "./demos/DebounceHook";
import ClickOutsideHook from "./demos/ClickOutsideHook";
import VirtualListDemo from "./demos/VirtualListDemo";

const APPS_LIST = [
    { name: "Virtualized List", component: <VirtualListDemo /> },
    { name: "Star Rating", component: <StarRating /> },
    { name: "Tabs", component: <Tabs /> },
    { name: "Typeahead Search", component: <Typeahead /> },
    { name: "Accordion", component: <Accordion /> },
    { name: "useClickOutside Hook", component: <ClickOutsideHook /> },
    { name: "useDebounce Hook", component: <DebounceHook /> },
    { name: "useLocalStorage Hook", component: <LocalStorageHook /> },
    { name: "useTheme Hook", component: <ThemeHook /> },
    { name: "useToggle Hook", component: <ToggleHook /> },
];

export default APPS_LIST;