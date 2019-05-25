type ActionType = (...args: any[]) => any;
interface IActionsType {
  [key: string]: ActionType;
}

export const bindActionCreators = <A extends IActionsType, D extends React.Dispatch<any>>(
  actions: A,
  dispatch: D,
) => {
  function bindActionCreator<AC extends ActionType, T extends D>(actionCreator: AC, dispatcher: T) {
    return (...args: Parameters<ActionType>) => {
      return dispatcher(actionCreator(...args));
    };
  }

  const newActions = Object.keys(actions).reduce(
    (ba, actionName) => {
      ba[actionName] = bindActionCreator(actions[actionName], dispatch);
      return ba;
    },
    {} as {[key in keyof A]: (...args: Parameters<A[key]>) => void},
  );
  return newActions;
};
