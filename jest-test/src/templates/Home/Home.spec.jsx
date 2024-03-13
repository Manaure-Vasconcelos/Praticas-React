/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Home from './Home.jsx';

describe('<Home />', () => {
	it('should render SearchInput', () => {
		const { debug ,getByPlaceholderText } = render(<Home />);

		debug()
		const input = getByPlaceholderText('SearchInput')

		expect(input).toBeInTheDocument();
	});
});
