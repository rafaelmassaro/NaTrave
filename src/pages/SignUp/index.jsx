import { Icon, Input } from "~/components"


export const SignUp = () => {
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
                    <h2 className="text-xl font-bold">Crie sua conta</h2>
                </div>

                <form action="" className="p-4 space-y-6">
                    <Input name="name" type="text" label="Seu nome" placeholder="Digite o nome" />
                    <Input name="username" type="text" label="Seu nome de usuário" placeholder="Digite o seu nome de usuário" />
                    <Input name="email" type="text" label="Seu e-mail" placeholder="Digite o seu e-mail" />
                    <Input name="password" type="password" label="Sua senha" placeholder="Digite sua senha" />
                    
                    <a href="/dashboard" className="block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl">
                        Criar minha conta
                    </a>
                </form>
            </main>
        </div>
    )
}