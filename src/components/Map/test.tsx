import Map from '.'
import { render, screen } from '@testing-library/react'

describe('<Map/>', () => {
  it('should render without any markers', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: `1`,
      name: 'Imbituba',
      slug: 'imbituba',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    render(<Map places={[place]} />)
    expect(screen.getByTitle(/Imbituba/i)).toBeInTheDocument()
  })
})
