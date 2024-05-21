import { 
    MonitorDot, 
    PictureInPicture2, 
    Upload,
    History
} from "lucide-react";

const menuData: any = [
    {
        label: 'menu',
        isTitle: true,
    },
    {
        id: "uploads",
        label: 'Uploads',
        link: "/uploads",
        icon: <MonitorDot />,
    },
    // {
    //     id: "landing",
    //     label: 'Landing Page',
    //     link: "/#",
    //     icon: <PictureInPicture2 />,
    // },
    // {
    //     id: "dashboard",
    //     label: 'Upload',
    //     link: "/upload",
    //     icon: <Upload />,
    // },
    {
        id: "landing",
        label: 'Analytics',
        link: "/analytics",
        icon: <PictureInPicture2 />,
    },
    {
        id: 'chat',
        label: 'History',
        icon: <History />,
        link: '/history',
    },
];

export { menuData };