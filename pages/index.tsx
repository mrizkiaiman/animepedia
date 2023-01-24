import Home from '@app/pages/home'
import { GetServerSideProps } from 'next'

export default function App(props: { page: number }) {
  return <Home queryPage={props.page} />
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { page } = context.query
  return { props: { page: Number(page) } }
}
