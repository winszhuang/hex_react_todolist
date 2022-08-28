import { ReactNode } from 'react';
import { useForm, FormProvider } from 'react-hook-form'

interface Props<T> {
  children: ReactNode,
  onSubmit: (data: T) => void
}

export default function BaseForm<T>({ onSubmit, children }: Props<T>) {
  const methods = useForm<T>();
  return (
    <FormProvider {...methods} >
      <form
        className="w-full"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  )
}