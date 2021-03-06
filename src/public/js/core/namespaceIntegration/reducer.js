import { ACTIONS } from './constants';

const DefaultState = {
  activeNamespace: undefined,
  sharedFlowStepsData: null
};

export default (state = DefaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_ACTIVE_NAMESPACE:
      return {
        ...state,
        activeNamespace: action.payload
      };

    case ACTIONS.CALC_SHARED_FLOW_STEPS_DATA:
      return {
        ...state,
        sharedFlowStepsData: action.payload
      };

    case ACTIONS.SET_FULL_STATE:
      return {
        ...state,
        ...action.payload
      };

    case ACTIONS.RESET_ALL:
      return DefaultState;

    default:
      return state;
  }
};
