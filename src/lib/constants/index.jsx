import CalenderSvg from '../../assets/Calendar.svg' 
import CategorySvg from '../../assets/Category.svg'
import NotificationSvg from '../../assets/Notification.svg'
import SettingSvg from '../../assets/Setting.svg'
import DocumentSvg from '../../assets/Document.svg';
import TicketSvg from '../../assets/Ticket.svg'
import ChartSvg from '../../assets/Chart.svg'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon:<img src={CategorySvg} alt="Setting" style={{ width: '24px', height: '27px' }}  />,
	},
	{
		key: 'upload',
		label: 'Uploads',
		path: '/upload',
		icon: <img src={ChartSvg} alt="Setting" style={{ width: '24px', height: '27px' }}  />,
	},
	{
		key: 'invoice',
		label: 'Invoice',
		path: '/invoice',
		icon: <img src={TicketSvg} alt="Setting" style={{ width: '24px', height: '27px' }}  />,
	},
	{
		key: 'schedule',
		label: 'Schedule',
		path: '/schedule',
		icon: <img
        src={DocumentSvg}
        alt="Document"
        style={{ width: '24px', height: '27px' }}
      />,
	},
	{
		key: 'calender',
		label: 'Calender',
		path: '/calender',
		icon: <img src={CalenderSvg} alt="Calender" style={{ width: '24px', height: '27px' }} />,
	},
	{
		key: 'notification',
		label: 'Notification',
		path: '/notification',
		icon: <img src={NotificationSvg} alt="Notification" style={{ width: '24px', height: '27px' }} />,
	},
    {
		key: 'settings',
		label: 'Settings',
		path: '/setting',
		icon:<img src={SettingSvg} alt="Setting" style={{ width: '24px', height: '27px' }}  />,
	}
]

