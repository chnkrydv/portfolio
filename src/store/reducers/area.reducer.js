const initialArea = 'job';

const initState = {
  area: initialArea
}

const area = (state = initState, action) =>{
  switch (action.type) {
    case 'SELECT_MENU':
      return { ...state };
    default:
      return { ...state };
  }
}