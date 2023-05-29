import { Button, Checkbox, Flex, Heading, Input, Text, useModal, useToast } from '@pancakeswap/uikit'
import AppWrapper from '../../../components/AppWrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import FormError from '../../../views/Bridge/components/FormError'
import FileInput from '../../../components/FileInput'
import { FormValues, schema, toBase64 } from './add-token-schema'
import { useEffect, useMemo, useState } from 'react'
import { useToken } from '../../../hooks/Tokens'
import styled from 'styled-components'
import { convertImage } from './convert-image'
import { trpc } from '@maxiproswap/backend'
import { useActiveChainId } from '../../../hooks/useActiveChainId'

const Logo = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
`

export const AddToken: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  })
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = form
  const { chainId } = useActiveChainId()
  const tokenAddress = watch('tokenAddress')
  const logoFile = watch('logo')
  const [logo, setLogo] = useState({ fileName: '', blob: '' })
  useEffect(() => {
    const a = async () => {
      if (!logoFile) {
        setLogo({ fileName: '', blob: '' })
        return
      }
      setLogo({ fileName: logoFile[0].name, blob: await convertImage(logoFile[0]) })
    }
    a()
  }, [logoFile])
  const token = useToken(tokenAddress)
  useEffect(() => {
    if (token) {
      setValue('tokenName', token.name || token.symbol)
      setValue('tokenSymbol', token.symbol)
      setValue('tokenDecimals', token.decimals)
    }
  })
  // @ts-ignore
  const submit = trpc.token.add.useMutation()

  return (
    <AppWrapper title="Create Token" subtitle="Create your own Token in seconds">
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit((data) => {
            if (!chainId) return
            // @ts-ignore
            submit
              .mutateAsync({
                ...data,
                logo: logo.blob,
                chainId,
              })
              .then(() => {
                toast.toastSuccess('Token added')
                Object.keys(schema.shape).forEach((key) => {
                  form.resetField(key as keyof FormValues)
                })
              })
              .catch((e) => {
                toast.toastError(e.message)
              })
          })}
          style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}
        >
          <Flex flexDirection="column">
            <Text>Token Address</Text>
            <Input placeholder="Token Address" {...register('tokenAddress')} />
            {errors.tokenAddress && <FormError>{errors.tokenAddress.message}</FormError>}
          </Flex>
          <Flex flexDirection="column">
            <Text>Token Name</Text>
            <Input placeholder="Token Name" {...register('tokenName')} />
            {errors.tokenName && <FormError>{errors.tokenName.message}</FormError>}
          </Flex>
          <Flex flexDirection="column">
            <Text>Token Symbol</Text>
            <Input placeholder="Token Symbol" {...register('tokenSymbol')} />
            {errors.tokenSymbol && <FormError>{errors.tokenSymbol.message}</FormError>}
          </Flex>
          <Flex flexDirection="column">
            <Text>Token Decimals</Text>
            <Input type="number" placeholder="Token Decimals" {...register('tokenDecimals')} />
            {errors.tokenDecimals && <FormError>{errors.tokenDecimals.message}</FormError>}
          </Flex>
          <Flex flexDirection="column">
            <Text>Logo</Text>
            <FileInput
              accept={{
                'image/png': ['.png'],
                'image/jpeg': ['.jpeg', '.jpg'],
              }}
              name="logo"
            />
            {errors.logo && <FormError>{errors.logo.message}</FormError>}
          </Flex>
          <Logo src={`data:image/png;base64,${logo.blob}`} />
          <Button type="submit" disabled={submit.isLoading}>
            Create Token
          </Button>
        </form>
      </FormProvider>
    </AppWrapper>
  )
}
