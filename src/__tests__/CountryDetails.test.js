import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from '../redux/store';
import CountryDetails from '../components/CountryDetails';

test('should render the country details page', () => {
  const component = renderer.create(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <CountryDetails />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
