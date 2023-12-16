import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as PiIcons from 'react-icons/pi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
    },
    {
        title: 'FAQs',
        path: '/faq',  // Puedes cambiar la ruta si es necesario
        icon: <BsIcons.BsQuestionCircleFill />,
    },
    {
        title: 'Chat',
        path: '/chat',
        icon: <PiIcons.PiChatsCircle />,
    }
]

export default SidebarData;