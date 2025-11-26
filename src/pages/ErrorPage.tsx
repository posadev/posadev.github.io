import Gradient from "@/components/Gradient.tsx";
import Tree from "@/components/icons/Tree.tsx";
import React from "react";

interface ErrorPageProps {
    error?: Error
}

const ErrorPage: React.FC<ErrorPageProps> = ({error}) => {
    console.log(error)
    return (
        <Gradient className="min-h-screen flex flex-col gap-4 items-center justify-center text-center">
            <Tree/>
            <div className="flex flex-col">
                <h1 className="text-4xl text-primary-600 font-bold mb-4">404</h1>
                <p className="text-2xl text-primary-600 mb-4">Oops! Algo salio mal</p>
                <p className="text-xl text-gray-500 mb-4">
                    Parece que hubo un problema al cargar la pagina. Por favor, intenta
                    nuevamente mas tarde.
                </p>
            </div>
        </Gradient>
    )
}
export default ErrorPage;