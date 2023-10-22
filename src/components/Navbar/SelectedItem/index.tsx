import React from 'react';
import book from '../../../assets/book.svg';
import { ListItemButton, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../routes/routes/paths';

export default function SelectedItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const navigate = useNavigate();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => {
            navigate(`${paths.vacancies}`);
            handleListItemClick(event, 0)}}
          sx={{ display: 'flex', gap: '4px' }}
        >
          <img
            src={book}
            alt={'book'}
            style={{ width: '16px', height: '16px' }}
          />

          <ListItemText
            sx={{ fontSize: '16px', color: '#FFFFFF' }}
            primary="Вакансии"
          />
        </ListItemButton>
      </List>

      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{ borderBottom: '1px solid white', borderTop: '1px solid white' }}
      >
        <ListItemButton
          sx={{ fontSize: '5px' }}
          disabled={true}
          selected={selectedIndex === 0}
          onClick={(event) => {
            handleListItemClick(event, 0)}}
        >
          <ListItemText
            sx={{ fontSize: '1px', color: '#FFFFFF' }}
            primary="Тестовый режим"
          />
        </ListItemButton>
        <ListItemButton
          sx={{ fontSize: '5px' }}
          disabled={true}
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText
            sx={{ fontSize: '1px', color: '#FFFFFF' }}
            primary="Нейросеть"
          />
        </ListItemButton>
      </List>
    </>
  );
}
