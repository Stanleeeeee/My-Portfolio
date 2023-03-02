import DeckIcon from '@mui/icons-material/Deck';
import PersonIcon from '@mui/icons-material/Person';
import HandymanIcon from '@mui/icons-material/Handyman';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

export const navbarItems = [
  {
    id: 0,
    icon: <DeckIcon sx={{ fontSize: { lg: '32px', xs: '25px' } }} />,
    label: 'Intro',
    route: 'intro',
  },
  {
    id: 1,
    icon: <PersonIcon sx={{ fontSize: { lg: '30px', xs: '24px' } }} />,
    label: 'AboutMe',
    route: 'about',
  },
  {
    id: 2,
    icon: <HandymanIcon sx={{ fontSize: { lg: '30px', xs: '24px' } }} />,
    label: 'Skills',
    route: 'skills',
  },
  {
    id: 3,
    icon: <BadgeIcon sx={{ fontSize: { lg: '28px', xs: '24px' } }} />,
    label: 'Projects',
    route: 'projects',
  },
  {
    id: 4,
    icon: (
      <ContactEmergencyIcon sx={{ fontSize: { lg: '26px', xs: '20px' } }} />
    ),
    label: 'ContactMe',
    route: 'contact',
  },
];
