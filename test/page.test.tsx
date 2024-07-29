import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'

const Title = ({ title }: { title: string }) => {
    return <div>{title}</div>
}

test('Rendering test: Title', () => {
    const title = "Let's test with vitest!"

    render(<Title title={title} />)

    expect(screen.getByText(title)).toBeInTheDocument()
})
