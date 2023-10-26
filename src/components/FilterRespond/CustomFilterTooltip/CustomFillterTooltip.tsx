import { styled } from '@mui/material/styles';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Tooltip from '@mui/material/Tooltip';

export const FilterTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#FFF',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 284,
      width: '100%',
      borderRadius: '6px',
      boxShadow: '8px 6px 30px 0px rgba(0, 0, 0, 0.08)',
    },
  }));
