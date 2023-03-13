import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowRight, Check } from 'phosphor-react'
import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { NextSeo } from 'next-seo'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error

  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }

  return (
    <>
      <NextSeo title="Conectar calendário | Ignite Call" noindex />

      <Container>
        <Header>
          <Heading as="strong">Conecte sua agenda!</Heading>
          <Text>
            Conecte o seu calendário para verificar automaticamente as horas
            ocupadas e os novos eventos à medida em que são agendados.
          </Text>

          <MultiStep size={4} currentStep={2} />
        </Header>

        <ConnectBox>
          <ConnectItem>
            <Text>Google Agenda</Text>

            {isSignedIn ? (
              <Button size="sm" disabled>
                Conectado
                <Check weight="bold" />
              </Button>
            ) : (
              <Button
                size="sm"
                variant="secondary"
                onClick={handleConnectCalendar}
              >
                Conectar
                <ArrowRight />
              </Button>
            )}
          </ConnectItem>

          {hasAuthError && (
            <AuthError>
              Ocorreu um erro na conecção com o Google Agenda. Por favor, cheque
              as permissões e tente novamente.
            </AuthError>
          )}

          <Button
            type="submit"
            onClick={handleNavigateToNextStep}
            disabled={!isSignedIn}
          >
            Próximo Passo
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Container>
    </>
  )
}
