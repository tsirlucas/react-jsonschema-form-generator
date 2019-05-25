import * as React from 'react';
import {useState, useContext, useEffect, useCallback} from 'react';
import {AddButton} from 'components';
import {TextInput} from 'components';
import {SchemaContext} from 'providers';

import {AnyField} from './Fields';

export const FormBuilder = () => {
  const {state, actions} = useContext(SchemaContext);
  const [schema, setSchema] = useState(state);

  useEffect(() => {
    setSchema(state);
  }, [state]);

  const create = useCallback(
    (option: string) => () => {
      actions.addToSchema({path: ['properties'], element: option});
    },
    [actions.addToSchema],
  );

  const createFromChild = useCallback(
    (path: string[], option: string) => {
      const newPath = ['properties', ...path];
      actions.addToSchema({path: newPath, element: option});
    },
    [actions.addToSchema],
  );

  const update = useCallback(
    (value: string) => {
      actions.updateSchema({path: ['title'], value});
    },
    [actions.updateSchema],
  );

  const updateFromChild = useCallback(
    (path: string[], value: string | number) => {
      const newPath = ['properties', ...path];
      actions.updateSchema({path: newPath, value});
    },
    [actions.updateSchema],
  );

  const removeFromChild = useCallback(
    (path: string[]) => {
      const newPath = ['properties', ...path];
      actions.removeFromSchema(newPath);
      actions.setRequiredOnSchema({path: newPath, value: false});
    },
    [actions.removeFromSchema, actions.setRequiredOnSchema],
  );

  const setRequiredFromChild = useCallback(
    (path: string[], value: boolean) => {
      const newPath = ['properties', ...path];
      actions.setRequiredOnSchema({path: newPath, value});
    },
    [actions.setRequiredOnSchema],
  );

  const {properties} = schema;
  const propertiesKeys = Object.keys(properties);
  return (
    <form>
      <TextInput label="Form title" value={schema.title} onChange={update} />
      {propertiesKeys.map((key) => (
        <AnyField
          key={key}
          elementKey={key}
          element={properties[key]}
          updateWithParentPath={updateFromChild}
          createWithParentPath={createFromChild}
          removeWithParentPath={removeFromChild}
          setRequiredWithParentPath={setRequiredFromChild}
        />
      ))}
      <AddButton onSelect={create} />
    </form>
  );
};
