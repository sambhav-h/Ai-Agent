"use client"

import { ErrorState } from "@/components/error-state"

const ErrorPage = () => {
    return (
        <ErrorState
        title = "Error Loading Agents"
        description="Something Went Wrong"
        />
    )
}

export default ErrorPage