export const buttonsStyles = {
  borderRadius: '6px',
  fontSize: '16px',
  outlined: {
    color: '#1D6BF3',
    border: '1px solid #1D6BF3',
    hover: {
      backgroundColor: '#1D6BF3',
      border: '1px solid transparent',
      color: '#FFFFFF',
    },
    focus: {
      backgroundColor: '#1D6BF3',
      border: '1px solid transparent',
      color: '#FFFFFF',
    },
    disabled: {
        border: '1px solid #B5B5B7'
    }
  },

  default: {
    color: '#fff',
    backgroundColor: '#5A9BFF',
    hover: {
      backgroundColor: '#1D6BF3',
    },
    focus: {
      backgroundColor: '#1D6BF3',
    },
    disabled: {
        backgroundColor: '#B5B5B7'
    }
  },


  red: {
    color: 'rgba(255, 2, 0, 1)',
    border: '1px solid rgba(255, 2, 0, 1)',
    focus: {
      backgroundColor: '#FF0200',
    },
  },
  hover: {
    opacity: 0.7,
  },
};
