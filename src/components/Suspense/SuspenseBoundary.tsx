import { ReactNode, Suspense } from 'react'

interface SuspenseBoundaryProps {

    children: ReactNode
    fallback: ReactNode

}

const SuspenseBoundary = ({ children, fallback }: SuspenseBoundaryProps) => {

    return <Suspense fallback={fallback}>{children}</Suspense>

}

export default SuspenseBoundary