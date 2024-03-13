/* eslint-disable no-undef */

import { render } from '@testing-library/react';
import SearchInput from './index';

describe('<SearchInput />', () => {
	test('', () => {
		const { getByTestId } = render(<SearchInput data-testid="searchInput" />);
	
		const searchInput = getByTestId('searchInput');
		expect(searchInput).toBeInTheDocument();
	});
	
	test('test component', () => {
		const { getByTestId } = render(<SearchInput data-testid="searchInput" />);
	
		const searchInput = getByTestId('searchInput');
		expect(searchInput).toBeInTheDocument();
	});


});