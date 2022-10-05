import { Icon, Input } from "~/components"

export const Login = () => {
    return (
        <div>
            <header className=" border-b border-red-300">
                <div className="container max-w-xl flex justify-center">
                    <img src="/imgs/logo-fundo-branco.svg" alt="" className="w-32 md:w-40" />
                </div>
            </header>

            <main className="p-4 container max-w-xl">
                <div className="flex space-x-4 items-center">
                    <a href="/">
                        <Icon name="back" className="h-6"/>
                    </a>
                    <h2 className="text-xl font-bold">Entre na sua conta</h2>
                </div>

                <form action="" className="p-4 space-y-6">
                    <Input name="email" type="text" label="Seu e-mail" placeholder="Digite o seu e-mail" />
                    <Input name="password" type="password" label="Sua senha" placeholder="Digite sua senha" />
                    
                    <a href="/dashboard" className="block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl">
                        Entrar
                    </a>
                </form>
            </main>
        </div>
    )
}