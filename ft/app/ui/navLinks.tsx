import UserGroupIcon from '@mui/icons-material/PeopleAlt';
import GridOnIcon from '@mui/icons-material/GridOn';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WidgetsIcon from '@mui/icons-material/Widgets';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Elements', href: '/', icon: WidgetsIcon },
    { name: 'Buttons', href: '/buttons', icon: CheckBoxIcon },
    { name: 'Alerts', href: '/alert', icon: NotificationsActiveIcon },
    { name: 'Frames', href: '/frames', icon: UserGroupIcon },
    { name: 'Table', href: '/table', icon: GridOnIcon },
];

export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <a
                        key={link.name}
                        href={link.href}
                        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-900 p-3 text-sm text-gray-500 font-medium hover:bg-neutral-400 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block text-neutral-700">{link.name}</p>
                    </a>
                );
            })}
        </>
    );
}