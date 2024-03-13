/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { PostCard } from '.';

const props = {
  title: 'title 1',
  body: 'body 1',
  cover: 'img/img.png',
  id: 1
}

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    const { getByAltText, getByText } = render(<PostCard {...props}/>)

    expect(getByAltText(props.title)).toHaveAttribute('src', props.cover)
    /* expect(getByRole('img', { name: props.title })).toHaveAttribute('src', props.cover) */
    expect(getByText('title 1')).toBeInTheDocument()
    expect(getByText('body 1')).toBeInTheDocument()
  })

})