const initialState = ''

export default (state = initialState,action) =>{
  if (action.type === 'Input') {
      return action.payload
  }
  else {
    return initialState
  }
}
