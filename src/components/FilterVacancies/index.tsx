import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DeleteIcon from '../../assets/delete.svg';
import { ListItemButtonCustom } from './CustomListItemButton/CustomListItemButton'

export default function FilterVacancies() {
  const [openVacancies, setOpenVacancies] = React.useState(false);
  const [openDate, setOpenDate] = React.useState(false);

  return (
    <List
      sx={{ width: '95%', bgcolor: 'background.paper' }}
      component="nav"
    >
      <ListItemButtonCustom onClick={() => setOpenVacancies(!openVacancies)}>
        <ListItemText primary="Название вакансии" />
        {openVacancies ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonCustom>
      <ListItemButtonCustom onClick={() => setOpenDate(!openDate)}>
        <ListItemText primary="Дата публикации" />
        {openDate ? <ExpandLess /> : <ExpandMore />}
      </ListItemButtonCustom>
      <ListItemButtonCustom
        sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}
      >
        <img src={DeleteIcon} alt={'delete'} />
        <ListItemText primary="Отчистить фильтры" />
      </ListItemButtonCustom>
    </List>
  );
}
