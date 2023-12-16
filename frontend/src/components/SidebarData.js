import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as PiIcons from 'react-icons/pi';
import * as MdIcons from 'react-icons/md';

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
    },
    {
        title: 'Quiz',
        path: '/quiz', // Ajusta la ruta según tus necesidades
        icon: <MdIcons.MdQuiz />, // Ajusta el nombre del icono según el que estés utilizando
    }
]

export default SidebarData;