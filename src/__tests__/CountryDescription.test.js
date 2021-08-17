import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import CountryDescription from '../components/CountryDescription';

const description = {
  abbreviation: 'AF',
  confirmed: '143439',
  continent: 'Asia',
  deaths: '6357',
  label: 'Afghanistan',
  population: '35530081',
  recovered: '82586',
  updated: '2021/07/24 00:21:36+00',
};

test('should render the country description component', () => {
  const component = renderer.create(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <CountryDescription description={description} />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('<CountryDescription />', () => {
  let component;
  beforeEach(() => {
    component = render(<CountryDescription description={description} />);
  });

  test('Should have abbreviation test', () => {
    component.getByText('AF');
  });

  test('Should have continent', () => {
    component.getByText('Asia');
  });

  test('Should have label', () => {
    component.getByText('AFGHANISTAN');
  });
});
