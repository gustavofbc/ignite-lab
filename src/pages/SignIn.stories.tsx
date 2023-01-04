import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { SignIn } from './SignIn'
import { rest } from 'msw'

export default {
    title: 'pages/Sign in',
    component: SignIn,
    args: {
    },
    argTypes: {},
    //emular uma API integrada ao storybook
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login realizado!'
                    }))
                })
            ]
        }
    }
} as Meta

export const Default: StoryObj = {
    //criando testes junto com o storybook
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'gustavo.felipe@email.com')
        userEvent.type(canvas.getByPlaceholderText('********'), '12345678')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
        })
    }
}