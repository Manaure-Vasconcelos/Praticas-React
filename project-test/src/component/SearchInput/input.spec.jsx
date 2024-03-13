/* eslint-disable no-undef */

import { render} from '@testing-library/react';
import SearchInput from './index';
import userEvent from '@testing-library/user-event';

describe('<SearchInput />', () => {
	it('should render SearchInput', () => {
		const { getByTestId } = render(<SearchInput data-testid='input' />);
		const inputTest = getByTestId('input')
		expect(inputTest).toBeInTheDocument();
	});

	it('should search for an item', async () => {
		const fn = jest.fn()
		const { getByTestId } = render(<SearchInput data-testid='input' onChange={fn} />);
		const inputTest = getByTestId('input')
		await userEvent.type(inputTest, 'Test')
		expect(fn).toHaveBeenCalledTimes(4);
	});
	
	it('should be disabled when disabled is true', () => {
		const { getByTestId } = render(<SearchInput data-testid='input' disabled={true} />);
		const inputTest = getByTestId('input')
		expect(inputTest).toBeDisabled();
	});

	it('should be eneable when disabled is false', () => {
		const { getByTestId } = render(<SearchInput data-testid='input' disabled={false} />);
		const inputTest = getByTestId('input')
		expect(inputTest).toBeEnabled();
	});
});
